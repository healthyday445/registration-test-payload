import React, { useState, useEffect } from 'react';
import SharedHeader from '../components/SharedHeader';
import SharedFooter from '../components/SharedFooter';
import SharedTestimonials from '../components/SharedTestimonials';
import RegistrationPopup from '../components/RegistrationPopup';
import { Award, Users, Sun, Moon, Dumbbell, Wind, HeartPulse, Clock } from 'lucide-react';
import frame129 from '../assets/image (36) (1).webp';
import smileySick from '../assets/streamline-freehand_smiley-sick-contageous.webp';
import PhoneInputCustom from '../components/PhoneInputCustom';
import { enforceReferralLimit, recordReferralUse, isReferralLimitReached } from '../utils/referralGuard';
import { validatePhone, formatPhone } from '../utils/phoneValidation';
import { safeSessionStorageGet } from '../utils/storage';
import { getIpAddress } from '../utils/getIpAddress';
interface FreeProgrammesProps {
    defaultLanguage?: 'Telugu' | 'English' | '';
}

const FreeProgrammes = ({ defaultLanguage = '' }: FreeProgrammesProps) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        dialCode: '+91',
        language: defaultLanguage
    });
    const [languageError, setLanguageError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [popupStatus, setPopupStatus] = useState<string | null>(null);

    // Referral fraud guard: if this ?ref= has been used 5+ times, strip it and redirect
    useEffect(() => {
        enforceReferralLimit();
    }, []);

    const pushDataLayer = (data: Record<string, unknown>) => {
        const win = window as Window & { dataLayer?: Record<string, unknown>[] };
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push(data);
    };

    const pushFocusEvent = (field: string) => {
        pushDataLayer({ 'event': 'input_focus', 'field_name': field, 'page_name': 'free_programmes' });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        pushDataLayer({ 'event': 'form_submit_attempt', 'page_name': 'free_programmes' });

        if (!validatePhone(formData.phone, formData.dialCode)) {
            setPhoneError(true);
            pushDataLayer({ 'event': 'form_validation_error', 'field': 'phone', 'page_name': 'free_programmes' });
            return;
        }
        setPhoneError(false);

        if (!formData.language) {
            setLanguageError(true);
            pushDataLayer({ 'event': 'form_validation_error', 'field': 'language', 'page_name': 'free_programmes' });
            return;
        }
        setLanguageError(false);

        const selfCheckParams = new URLSearchParams(window.location.search);
        const refParam = selfCheckParams.get('ref');
        const sourceParam = selfCheckParams.get('source');
        const enteredMobile = formData.dialCode + formData.phone;
        if (
            (refParam && '+' + refParam === enteredMobile) ||
            (sourceParam && '+' + sourceParam === enteredMobile)
        ) {
            pushDataLayer({ 'event': 'registration_self_referral', 'page_name': 'free_programmes' });
            setPopupStatus('self_referral');
            return;
        }

        if (isReferralLimitReached()) {
            pushDataLayer({ 'event': 'registration_device_limit', 'page_name': 'free_programmes' });
            setPopupStatus('device_limit_reached');
            return;
        }

        try {
            const searchParams = new URLSearchParams(window.location.search);
            const source = searchParams.get('source') || searchParams.get('ref') || 'website_organic';

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

            console.log("Registration API Payload:", payload);
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok || response.status === 409) {
                const resolvedStatus = data.status || 'success';

                // --- GTM Data Layer Push ---
                const formattedPhone = formatPhone(formData.phone, formData.dialCode);

                // Determine popup_id based on status and language
                const isNewReg = resolvedStatus === 'success' || resolvedStatus === 'new_registration';
                const isFreeAgain = resolvedStatus === 'free_eligible_again';
                let currentPopupId: number;
                if (formData.language === 'Telugu') {
                    currentPopupId = isFreeAgain ? 1330 : isNewReg ? 1316 : 1316;
                } else {
                    currentPopupId = isFreeAgain ? 1331 : isNewReg ? 1589 : 1589;
                }

                pushDataLayer({
                    'user_data': {
                        'phone_number': formattedPhone,
                        'first_name': formData.name,
                        'page_language': formData.language === 'English' ? 'English' : 'Telugu'
                    },
                    'attribution_data': {
                        'gclid': safeSessionStorageGet('gclid_persistent'),
                        'fbclid': safeSessionStorageGet('fbclid_persistent'),
                        'ad_name': safeSessionStorageGet('ad_name_persistent')
                    },
                    'popup_id': currentPopupId
                });

                if (isNewReg) {
                    pushDataLayer({ 'event': 'registration_success', 'page_name': 'free_programmes', 'language': formData.language, 'status': resolvedStatus });
                } else if (isFreeAgain) {
                    pushDataLayer({ 'event': 'registration_free_eligible_again', 'page_name': 'free_programmes', 'language': formData.language });
                } else {
                    pushDataLayer({ 'event': 'registration_duplicate', 'page_name': 'free_programmes', 'status': resolvedStatus });
                }
                // --- End GTM Data Layer Push ---

                // Track this referral usage in localStorage
                recordReferralUse();
                setPopupStatus(resolvedStatus);
            } else {
                pushDataLayer({ 'event': 'registration_api_error', 'page_name': 'free_programmes', 'http_status': response.status });
                console.error('Registration failed');
                alert(`Registration failed: ${data.message || 'Please try again.'}`);
            }
        } catch (error) {
            pushDataLayer({ 'event': 'registration_network_error', 'page_name': 'free_programmes' });
            console.error('Error submitting form:', error);
            alert(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col overflow-x-hidden">
            <SharedHeader />

            <main className="flex-grow flex flex-col items-center justify-center pt-24 md:pt-32 pb-20 px-0">
                <div className="w-full max-w-[1200px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-[0px] py-[50px] lg:pt-[48px] lg:pb-[100px]">
                    {/* Left Column: Instructor Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-[13px] px-4 py-[20px] lg:py-[52px] order-2 lg:order-none">
                        <div className="w-full max-w-[650px] h-auto mb-3">
                            <img src={frame129} alt="Jagan" className="w-full h-full object-contain transform scale-[1.15]" loading="lazy" />
                        </div>
                        <div className="flex flex-col items-center gap-px">
                            <span className="font-semibold text-[16px] text-center underline text-[#202020]">WITH</span>
                            <span className="font-semibold text-[28px] md:text-[36px] text-center text-[#202020]">Jagan</span>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-4 px-2 pb-4 lg:pb-0">
                            {/* Card 1 */}
                            <div className="h-[160px] md:h-[201px] w-[calc(50%-8px)] flex flex-col justify-center items-center gap-2.5 bg-[#0d468b] p-4 md:p-5 rounded-2xl shadow-lg">
                                <div className="w-[57px] h-[57px] flex items-center justify-center">
                                    <svg aria-hidden="true" className="w-[50px] h-[47px]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" fill="#FEAB27"><path d="M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z"></path></svg>
                                </div>
                                <span className="font- text-[16px] leading-[25px] text-center text-white">
                                    Internationally Certified Yoga Instructor
                                </span>
                            </div>
                            {/* Card 2 */}
                            <div className="h-[160px] md:h-[201px] w-[calc(50%-8px)] flex flex-col justify-center items-center gap-2.5 bg-[#0d468b] p-4 md:p-5 rounded-2xl shadow-lg">
                                <div className="w-[57px] h-[57px] flex items-center justify-center">
                                    <svg aria-hidden="true" className="w-[50px] h-[47px]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill="#FEAB27"><path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path></svg>
                                </div>
                                <span className="font- text-[16px] leading-[25px] text-center text-white">
                                    6,04,017+ Participated Already
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Registration & details */}
                    <div className="w-full lg:w-[584px] flex flex-col items-center gap-[40px] lg:gap-[51px] px-4 lg:px-10 order-1 lg:order-none">
                        {/* Heading */}
                        <div className="flex flex-col items-center gap-3 text-center">
                            <span className="font-semibold text-[36.48px] md:text-[48px] text-[#0d468b] leading-tight">21 Days FREE Yoga</span>
                            <span className="font-semibold text-[18px] md:text-[22px] text-center text-[#202020]">Starting From Tomorrow </span>
                        </div>

                        {/* Unified Card Container */}
                        <div className="w-full max-w-[500px] flex flex-col items-center gap-8 bg-white p-5 md:p-8 rounded-[30px] shadow-[0px_10px_40px_rgba(0,0,0,0.25)] border border-slate-100">
                            {/* Registration Form Inside Card */}
                            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5">
                                <div className="w-full flex flex-col gap-3">
                                    <div className="w-full h-[55px] flex items-center gap-2.5 bg-white px-5 py-4 rounded-lg border-[1.2px] border-solid border-[#b4b4b4]">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => pushFocusEvent('name')}
                                            placeholder="Full name"
                                            className="w-full outline-none font-normal text-[16px] text-[#202020] placeholder:text-[#8e8e8e]"
                                            required
                                        />
                                    </div>
                                    <div className="w-full">
                                        <PhoneInputCustom
                                            value={formData.phone}
                                            onChange={(phone, dialCode) => { setFormData(prev => ({ ...prev, phone, dialCode })); setPhoneError(false); }}
                                            onFocus={() => pushFocusEvent('phone')}
                                            placeholder="Enter Your Whatsapp Number"
                                            required
                                            defaultCountry="in"
                                        />
                                        {phoneError && (
                                            <span className="text-red-500 text-[12px] font-medium mt-1 block">⚠ Please enter a valid mobile number.</span>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-1">
                                    <div className="w-full flex items-center gap-3 py-1">
                                        <span className={`font-medium text-[14px] whitespace-nowrap ${languageError ? 'text-red-500' : 'text-[#202020]'}`}>Select Class Language: <span className="text-red-500">*</span></span>
                                        <label className="flex items-center gap-1.5 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="language"
                                                value="Telugu"
                                                checked={formData.language === 'Telugu'}
                                                onChange={(e) => { handleInputChange(e); setLanguageError(false); }}
                                                onFocus={() => pushFocusEvent('language_telugu')}
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
                                                onFocus={() => pushFocusEvent('language_english')}
                                                className="w-4 h-4 accent-[#0d468b]"
                                            />
                                            <span className="text-[14px] text-[#202020] font-medium">English</span>
                                        </label>
                                    </div>
                                    {languageError && (
                                        <span className="text-red-500 text-[12px] font-medium pl-1">⚠ Please select a class language to continue.</span>
                                    )}
                                </div>
                                <button type="submit" className="w-full h-[56px] bg-[#feab27] border-[2px] border-transparent hover:bg-white hover:border-[#feab27] transition-colors rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transform active:scale-95 duration-200 group">
                                    <span className="font-bold text-[18px] text-[#202020] uppercase tracking-wide group-hover:text-[#202020]">Register For Free</span>
                                </button>
                                <span className="font-semibold text-[16px] text-center text-[#0d468b]">6,04,017+ members participated</span>
                            </form>

                            {/* Batch Timings Inside Card */}
                            <div className="w-full flex flex-col items-center gap-5 bg-[#fff2dd] p-4 md:p-6 rounded-2xl border border-[#fff2dd]">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-[18px] h-[18px]">
                                        <Clock className="w-[15px] h-[15px] text-[#feab27]" />
                                    </div>
                                    <span className="font-semibold text-[18px] text-center text-[#feab27]">Flexible Batch Timings</span>
                                </div>
                                <div className="flex flex-row justify-between gap-3 w-full">
                                    <div className="flex-1 flex flex-col items-center gap-1.5">
                                        <div className="w-full h-[30px] flex justify-center items-center gap-2.5 bg-[#ffeac8] px-2 py-[3px] rounded-[5px]">
                                            <Sun className="w-[18px] h-[18px] text-[#0d468b]" />
                                            <span className="font-semibold text-[14px] sm:text-[16px] text-[#0d468b]">Morning Slots</span>
                                        </div>
                                        <span className="font-normal text-[12px] sm:text-[14px] text-center text-[#202020] leading-relaxed">
                                            5:30 AM - 6:30 AM<br />
                                            6:30 AM - 7:30 AM<br />
                                            7:30 AM - 8:30 AM<br />
                                            8:30 AM - 9:30 AM
                                        </span>
                                    </div>
                                    <div className="flex-1 flex flex-col items-center gap-1.5">
                                        <div className="w-full h-[30px] flex justify-center items-center gap-2.5 bg-[#ffeac8] px-2 py-[3px] rounded-[5px]">
                                            <Moon className="w-[18px] h-[18px] text-[#0d468b]" />
                                            <span className="font-semibold text-[14px] sm:text-[16px] text-[#0d468b]">Evening Slots</span>
                                        </div>
                                        <span className="font-normal text-[12px] sm:text-[14px] text-center text-[#202020] leading-relaxed">
                                            4:30 PM - 5:30 PM<br />
                                            5:30 PM - 6:30 PM<br />
                                            6:30 PM - 7:30 PM
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits Inside Card */}
                            <div className="flex flex-col items-center gap-5 w-full">
                                <span className="font-semibold text-[18px] text-center text-[#feab27]">Benefits</span>
                                <div className="flex flex-wrap justify-between items-start w-full px-2">
                                    <div className="w-[30%] flex flex-col items-center gap-[6px]">
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M2.03401 20.305C3.16301 21.92 8.07501 23.187 10.396 20.165C12.906 21.365 17.045 20.993 20.416 19.113C20.884 18.853 21.327 18.523 21.599 18.059C22.212 17.014 22.226 15.564 21.108 13.425C19.243 8.77099 15.89 4.68499 14.536 3.04199C14.258 2.78899 12.485 2.42899 11.403 2.08199C10.925 1.93499 10.036 1.83699 8.97301 3.23899C8.46801 3.90299 6.17701 5.53599 9.08301 6.63299C9.53401 6.74799 9.86501 6.95899 11.92 6.58399C12.187 6.53799 12.855 6.58399 13.326 7.40999L14.31 8.81699C14.402 8.94733 14.4601 9.09856 14.479 9.25699C14.651 10.756 14.645 12.632 15.481 13.583C14.191 12.649 10.817 11.541 8.27501 14.695M2.01801 12.94C3.16235 11.92 4.62125 11.3224 6.15228 11.2463C7.6833 11.1703 9.19424 11.6204 10.434 12.522" stroke="#0D468B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span className="font-medium text-[14px] text-center text-[#202020] leading-tight">Strength and Flexibility</span>
                                    </div>
                                    <div className="w-[30%] flex flex-col items-center gap-[6px]">
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M6.5 11C7.067 11.63 7.756 12 8.5 12C9.244 12 9.933 11.63 10.5 11M13.5 11C14.067 11.63 14.756 12 15.5 12C16.244 12 16.933 11.63 17.5 11" stroke="#0D468B" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M13 16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15C12.2652 15 12.5196 15.1054 12.7071 15.2929C12.8946 15.4804 13 15.7348 13 16Z" fill="#0D468B" />
                                                <path d="M17 4L20.464 2L19 7.464L22.464 5.464M14.048 5.5L15.78 6.5L13.048 7.232L14.78 8.232" stroke="#0D468B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22 12C22 17.523 17.523 22 12 22C10.2445 22.0024 8.51963 21.5408 7 20.662M12 2C6.477 2 2 6.477 2 12C2 13.821 2.487 15.53 3.338 17" stroke="#0D468B" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <span className="font-medium text-[14px] text-center text-[#202020] leading-tight">Eat, Sleep and Breath Well</span>
                                    </div>
                                    <div className="w-[30%] flex flex-col items-center gap-[6px]">
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <img src={smileySick} alt="Eat, Sleep and Breath Well" className="w-[24px] h-[24px]" />
                                        </div>
                                        <span className="font-medium text-[14px] text-center text-[#202020] leading-tight">Recover from Lifestyle diseases</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <SharedTestimonials />
            </main>

            <SharedFooter />
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

export default FreeProgrammes;
