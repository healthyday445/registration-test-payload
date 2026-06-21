import React, { useState, useEffect } from 'react';
import TwentyOneDaysHeader from '../components/TwentyOneDaysHeader';
import PhoneInputCustom from '../components/PhoneInputCustom';
import { enforceReferralLimit, recordReferralUse, isReferralLimitReached } from '../utils/referralGuard';
import { validatePhone, formatPhone } from '../utils/phoneValidation';
import { safeSessionStorageGet } from '../utils/storage';
import { getIpAddress } from '../utils/getIpAddress';
import RegistrationPopup from '../components/RegistrationPopup';
import heroImg from '../assets/Referral Poster for registration page.webp';
interface FreeProgrammesProps {
    defaultLanguage?: 'Telugu' | 'English' | '';
}

const ReferralContestRegistration = ({ defaultLanguage = '' }: FreeProgrammesProps) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        dialCode: '+91',
        language: defaultLanguage
    });
    const [languageError, setLanguageError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [popupStatus, setPopupStatus] = useState<string | null>(null);
    const [heroLoaded, setHeroLoaded] = useState(false);

    // Referral fraud guard: if this ?ref= has been used 5+ times, strip it and redirect
    useEffect(() => {
        enforceReferralLimit();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const pushDataLayer = (data: Record<string, unknown>) => {
        const win = window as Window & { dataLayer?: Record<string, unknown>[] };
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push(data);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validatePhone(formData.phone, formData.dialCode)) {
            setPhoneError(true);
            return;
        }
        setPhoneError(false);

        if (!formData.language) {
            setLanguageError(true);
            return;
        }
        setLanguageError(false);

        if (isReferralLimitReached()) {
            pushDataLayer({ 'event': 'registration_device_limit', 'page_name': 'referral_contest' });
            setPopupStatus('device_limit_reached');
            return;
        }

        try {
            const searchParams = new URLSearchParams(window.location.search);
            const rawSource = searchParams.get('source') || searchParams.get('ref');
            const source = rawSource ? `${rawSource}_iydref` : 'iydref';

            const gclid = safeSessionStorageGet('gclid_persistent');
            const fbclid = safeSessionStorageGet('fbclid_persistent');

            let id_type = undefined;
            let id_value = undefined;

            if (gclid) {
                id_type = 'gclid';
                id_value = gclid;
            } else if (fbclid) {
                id_type = 'fbclid';
                id_value = fbclid;
            }

            const ip_address = await getIpAddress();

            const payload = {
                name: formData.name,
                mobile: formData.dialCode + formData.phone,
                source: source,
                language: formData.language,
                id_type,
                id_value,
                gclid,
                fbclid,
                ad_name: safeSessionStorageGet('ad_name_persistent'),
                ip_address
            };

            const response = await fetch('/api/register/iyd-rfc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok || response.status === 409) {
                // --- GTM Data Layer Push ---
                const formattedPhone = formatPhone(formData.phone, formData.dialCode);

                const successEvent = formData.language === 'Telugu' ? 'referral_page_telugu_success' : 'referral_page_english_success';

                pushDataLayer({
                    'event': successEvent,
                    'user_data': {
                        'phone_number': formattedPhone,
                        'first_name': formData.name,
                        'page_language': formData.language === 'English' ? 'English' : 'Telugu'
                    },
                    'attribution_data': {
                        'gclid': safeSessionStorageGet('gclid_persistent'),
                        'fbclid': safeSessionStorageGet('fbclid_persistent'),
                        'ad_name': safeSessionStorageGet('ad_name_persistent')
                    }
                });
                // --- End GTM Data Layer Push ---

                // Track this referral usage in localStorage
                recordReferralUse();

                // Open WhatsApp with share template
                const mobileRef = (formData.dialCode + formData.phone).replace('+', '');
                const waMessage = `I am Inviting you to join me in\n*21-Days FREE YOGA* 🧘‍♀️😊\n🗓️ Starts *21st JUNE*\n\n🧘 Daily Yoga\n🥗 Simple Diet\n🌿 Lifestyle Habits\n\nWith *JAGAN* 🧘🏻‍♂️\n🌍Internationally Certified Yoga Teacher\n👥 6,00,000+ Students\n\n*Register for FREE Now* 👇🏻👇🏻\nhttps://yoga.healthyday.co.in/21days?ref=${mobileRef}`;
                window.open(`https://wa.me/?text=${encodeURIComponent(waMessage)}`, '_blank');
            } else {
                console.error('Registration failed');
                alert(`Registration failed: ${data.message || 'Please try again.'}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col overflow-x-hidden max-w-[520px] mx-auto relative">
            <TwentyOneDaysHeader />
            <main className="flex-grow flex flex-col items-center justify-start pb-4 px-0">
                <div className="w-full flex flex-col">
                    {/* Hero Section */}
                    <div className="w-full pt-[80px]">
                        <div className="w-full relative" style={{ aspectRatio: '1080/1350' }}>
                            {!heroLoaded && (
                                <div className="absolute inset-0 bg-gradient-to-b from-[#7EC8ED] to-[#EFF8FC] animate-pulse" />
                            )}
                            <img
                                src={heroImg}
                                alt="Refer and Win — Top 500 Winners get a Yoga Kit"
                                width={1080}
                                height={1350}
                                fetchPriority="high"
                                loading="eager"
                                decoding="async"
                                onLoad={() => setHeroLoaded(true)}
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Card */}
                    <div className="w-full flex flex-col items-center pb-6">
                        <div className="w-[90%] max-w-[500px] flex flex-col gap-4 bg-white p-4 md:p-6 rounded-[30px] shadow-[0px_10px_40px_rgba(0,0,0,0.25)] border border-slate-100 relative z-10 -mt-20">
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                                <div className="w-full flex flex-col gap-3">
                                    <div className="w-full h-[55px] flex items-center gap-2.5 bg-white px-5 py-4 rounded-lg border-[1.2px] border-solid border-[#b4b4b4]">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Full name"
                                            className="w-full outline-none font-normal text-[16px] text-[#202020] placeholder:text-[#8e8e8e]"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <PhoneInputCustom
                                            value={formData.phone}
                                            onChange={(phone, dialCode) => { setFormData(prev => ({ ...prev, phone, dialCode })); setPhoneError(false); }}
                                            placeholder="Enter Your Whatsapp Number"
                                            required
                                            defaultCountry="in"
                                        />
                                        {phoneError && (
                                            <span className="text-red-500 text-[12px] font-medium mt-1 block">⚠ Please enter a valid {formData.dialCode === '+91' ? '10-digit' : ''} mobile number.</span>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-1.5">
                                    <div className="w-full flex items-center gap-4">
                                        <span className={`font-medium text-[14px] whitespace-nowrap ${languageError ? 'text-red-500' : 'text-[#202020]'}`}>Language: <span className="text-red-500">*</span></span>
                                        <label className="flex items-center gap-1.5 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="language"
                                                value="Telugu"
                                                checked={formData.language === 'Telugu'}
                                                onChange={(e) => { handleInputChange(e); setLanguageError(false); }}
                                                className="w-4 h-4 accent-[#0d468b]"
                                            />
                                            <span className="text-[14px] text-[#202020] font-medium">తెలుగు</span>
                                        </label>
                                        <label className="flex items-center gap-1.5 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="language"
                                                value="English"
                                                checked={formData.language === 'English'}
                                                onChange={(e) => { handleInputChange(e); setLanguageError(false); }}
                                                className="w-4 h-4 accent-[#0d468b]"
                                            />
                                            <span className="text-[14px] text-[#202020] font-medium">English</span>
                                        </label>
                                    </div>
                                    {languageError && (
                                        <span className="text-red-500 text-[12px] font-medium">⚠ Please select a class language to continue.</span>
                                    )}
                                </div>
                                <button type="submit" className="w-full h-[52px] bg-[#feab27] border-[2px] border-transparent hover:bg-white hover:border-[#feab27] transition-colors rounded-full flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg active:scale-95 duration-200 group mt-1">
                                    <span className="font-bold text-[17px] text-[#202020] uppercase tracking-wide">Register</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <RegistrationPopup
                isOpen={popupStatus !== null}
                onClose={() => setPopupStatus(null)}
                status={popupStatus}
                language={(formData.language || 'Telugu') as 'Telugu' | 'English'}
                mobileNumber={`${formData.dialCode.replace('+', '')}${formData.phone}`}
                variant="free"
            />
        </div>
    );
};

export default ReferralContestRegistration;
