import React from 'react';
import successPopupSvg from '../assets/success_popup.svg';
import alreadyRegisteredSvg from '../assets/Frame 53 (5).webp';

type ApiStatus =
    | 'success'
    | 'free_eligible_again'
    | 'already_registered'
    | 'free_ongoing'
    | 'free_completed_recent'
    | 'paid_user'
    | 'subscription_expired_recently';

interface RegistrationSuccessPopupProps {
    isOpen: boolean;
    onClose: () => void;
    status: ApiStatus | string | null;
    language: 'Telugu' | 'English';
    mobileNumber?: string;
}

interface StatusContent {
    image: string;
    header: { te: string; en: string };
    body: { te: React.ReactNode; en: React.ReactNode };
    showTimings: boolean;
    showWhatsAppNote: boolean;
    ctaLink?: string;
    ctaLabel?: { te: string; en: string };
    contactNumber?: string;
}

const PLANS_URL = 'https://healthyday.co.in/pricing';

const TimingsBlock: React.FC<{ language: 'Telugu' | 'English' }> = ({ language }) => (
    <div className="flex flex-col gap-1 items-center">
        <div className="flex items-center gap-2 mb-1">
            <span className="text-[18px]">📅</span>
            <span className="font-bold">Timings:</span>
        </div>
        {language === 'Telugu' ? (
            <>
                <p>☀️ ఉదయం: 5:30 | 6:30 | 7:30 | 8:30</p>
                <p>🌙 సాయంత్రం: 4:30 | 5:30 | 6:30</p>
            </>
        ) : (
            <>
                <p>☀️ Morning: 5:30 AM | 6:30 AM | 7:30 AM | 8:30 AM</p>
                <p>🌙 Evening: 4:30 PM | 5:30 PM | 6:30 PM</p>
            </>
        )}
    </div>
);

const WhatsAppNote: React.FC<{ language: 'Telugu' | 'English' }> = ({ language }) => (
    <div className="flex items-center justify-center gap-2 mt-2">
        <span>🔔</span>
        <span className="font-semibold">
            {language === 'Telugu'
                ? 'మా Next Update WhatsApp లో వస్తుంది'
                : 'You will receive next update in WhatsApp'}
        </span>
    </div>
);

function getStatusContent(status: string): StatusContent {
    switch (status) {
        case 'success':
        case 'new_registration':
        case 'free_eligible_again':
            return {
                image: successPopupSvg,
                header: {
                    te: 'Congrats! మీ registration submit అయ్యింది!',
                    en: 'Congrats! Your Registration Submitted Successfully!',
                },
                body: {
                    te: (
                        <p>
                            ✨ 21 Days Yoga Challenge లో మీరు{' '}
                            <span className="font-bold inline-flex items-center gap-1">
                                <img draggable="false" role="img" className="w-5 h-5" alt="🗓️" src="https://s.w.org/images/core/emoji/17.0.2/svg/1f5d3.svg" />
                                Monday
                            </span>{' '}
                            నుండి join కావచ్చు!
                        </p>
                    ),
                    en: (
                        <p>✨ Your 21 Days FREE Yoga Starting From 21st June</p>
                    ),
                },
                showTimings: true,
                showWhatsAppNote: true,
            };

        case 'already_registered':
            return {
                image: alreadyRegisteredSvg,
                header: {
                    te: 'మీరు already మా next free batch లో register అయ్యారు!',
                    en: 'You are already registered in our upcoming 21 Days FREE Batch!',
                },
                body: {
                    te: (
                        <p>
                            ✨ 21 Days Yoga Challenge లో మీరు{' '}
                            <span className="font-bold inline-flex items-center gap-1">
                                <img draggable="false" role="img" className="w-5 h-5" alt="🗓️" src="https://s.w.org/images/core/emoji/17.0.2/svg/1f5d3.svg" />
                                Monday
                            </span>{' '}
                            నుండి join కావచ్చు!
                        </p>
                    ),
                    en: (
                        <p>✨ Your 21 Days FREE Yoga Starting From 21st June</p>
                    ),
                },
                showTimings: true,
                showWhatsAppNote: true,
            };

        case 'free_ongoing':
            return {
                image: alreadyRegisteredSvg,
                header: {
                    te: 'మీరు already ప్రస్తుతం జరుగుతున్న free batch లో register అయ్యారు.',
                    en: 'You are already registered in our ongoing 21 Days FREE Batch.',
                },
                body: {
                    te: (
                        <p>మీకు WhatsApp లో వచ్చిన link తో Join అవ్వండి</p>
                    ),
                    en: (
                        <div className="flex flex-col gap-2">
                            <p>Please join the classes using the link shared over WhatsApp</p>
                            <p className="text-[14px] text-gray-600">
                                In case you haven't received the link, please message us on{' '}
                                <a href="https://wa.me/918008153968" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0d468b] underline">
                                    +91 8008153968
                                </a>
                            </p>
                        </div>
                    ),
                },
                showTimings: false,
                showWhatsAppNote: false,
            };

        case 'free_completed_recent':
            return {
                image: successPopupSvg,
                header: {
                    te: 'మీ Free Yoga batch అయిపోయింది.',
                    en: 'You recently participated in our FREE Yoga Batch.',
                },
                body: {
                    te: (
                        <p>
                            <span className="font-bold">Yoga Continue చేయటానికి ఈ కింది లింక్ click చేయండి</span> 👇👇
                        </p>
                    ),
                    en: (
                        <p>To join our community for daily yoga sessions, please click below 👇👇</p>
                    ),
                },
                showTimings: false,
                showWhatsAppNote: false,
                ctaLink: PLANS_URL,
                ctaLabel: { te: 'JOIN DAILY YOGA', en: 'JOIN DAILY YOGA' },
            };

        case 'paid_user':
            return {
                image: alreadyRegisteredSvg,
                header: {
                    te: 'మీరు already మా Paid Classes లో subscription తీసుకున్నారు.',
                    en: 'We noticed that you are already our paid community member.',
                },
                body: {
                    te: (
                        <p>మీకు WhatsApp లో వచ్చిన Link తో జాయిన్ అవ్వండి</p>
                    ),
                    en: (
                        <div className="flex flex-col gap-2">
                            <p>Please continue your paid sessions using the link shared on WhatsApp</p>
                            <p className="text-[14px] text-gray-600">
                                In case you haven't received the link, please message us on{' '}
                                <a href="https://wa.me/919052888968" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0d468b] underline">
                                    +91 9052888968
                                </a>
                            </p>
                        </div>
                    ),
                },
                showTimings: false,
                showWhatsAppNote: false,
            };

        case 'subscription_expired_recently':
            return {
                image: successPopupSvg,
                header: {
                    te: 'మీ Yoga Subscription అయిపోయింది.',
                    en: 'Your paid subscription expired recently.',
                },
                body: {
                    te: (
                        <p>
                            <span className="font-bold">Yoga Continue చేయటానికి ఈ కింది లింక్ click చేయండి</span> 👇👇
                        </p>
                    ),
                    en: (
                        <p>To renew, please click the link below 👇👇</p>
                    ),
                },
                showTimings: false,
                showWhatsAppNote: false,
                ctaLink: PLANS_URL,
                ctaLabel: { te: 'JOIN DAILY YOGA', en: 'JOIN DAILY YOGA' },
            };

        default:
            return {
                image: successPopupSvg,
                header: {
                    te: 'Registration Successful!',
                    en: 'Registration Successful!',
                },
                body: { te: <></>, en: <></> },
                showTimings: false,
                showWhatsAppNote: false,
            };
    }
}

const RegistrationSuccessPopup: React.FC<RegistrationSuccessPopupProps> = ({
    isOpen,
    onClose,
    status,
    language,
    mobileNumber,
}) => {
    if (!isOpen || !status) return null;

    const content = getStatusContent(status);
    const lang = language === 'English' ? 'en' : 'te';

    const isNewRegistration = status === 'success' || status === 'new_registration';
    const isFreeEligibleAgain = status === 'free_eligible_again';
    let popupId = '';
    if (language === 'Telugu') {
        popupId = isFreeEligibleAgain ? 'elementor-popup-modal-1330' : isNewRegistration ? 'elementor-popup-modal-1316' : 'elementor-popup-modal-1336';
    } else {
        popupId = isFreeEligibleAgain ? 'elementor-popup-modal-1331' : isNewRegistration ? 'elementor-popup-modal-1589' : 'elementor-popup-modal-1592';
    }

    return (
        <div id={popupId} className="elementor-popup-modal fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" aria-modal="true" role="dialog">
            <div className="relative w-full max-w-[570px] bg-white flex flex-col items-center justify-center shadow-2xl rounded-2xl overflow-hidden p-8 px-4 gap-6 md:min-h-[400px]">

                {/* Content Section */}
                <div className="flex flex-col items-center gap-4 text-center w-full">
                    {/* Illustration */}
                    <div className="w-[80%] h-auto object-contain mb-2 flex justify-center">
                        <img src={content.image} alt="Status" className="w-full h-auto" />
                    </div>

                    {/* Header */}
                    <h2 className="text-[20px] md:text-[22px] font-bold text-black leading-tight flex items-center gap-2 justify-center flex-wrap">
                        {(status === 'success' || status === 'free_eligible_again') && (
                            <img draggable="false" role="img" className="w-5 h-5" alt="🎉" src="https://s.w.org/images/core/emoji/17.0.2/svg/1f389.svg" />
                        )}
                        <span className="font-semibold">{content.header[lang]}</span>
                        {(status === 'success' || status === 'free_eligible_again') && (
                            <img draggable="false" role="img" className="w-5 h-5" alt="🎉" src="https://s.w.org/images/core/emoji/17.0.2/svg/1f389.svg" />
                        )}
                    </h2>

                    {/* Body */}
                    <div className="flex flex-col gap-4 w-full text-[16px] text-center text-black leading-normal">
                        {content.body[lang]}

                        {/* Timings (Status 1 & 2 only) */}
                        {content.showTimings && <TimingsBlock language={language} />}

                        {/* WhatsApp Note (Status 1 & 2 only) */}
                        {content.showWhatsAppNote && <WhatsAppNote language={language} />}

                        {content.showWhatsAppNote && (
                            <p className="text-[16px] text-center mt-1">
                                Stay tuned and get ready! 💪🧘🏻‍♂️
                            </p>
                        )}
                    </div>
                </div>

                {/* CTA Button — either Plans link or Home */}
                {content.ctaLink ? (
                    <a
                        href={content.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[220px] h-[55px] bg-[#0d468b] hover:bg-[#0a3a73] transition-all transform active:scale-95 rounded-full flex items-center justify-center cursor-pointer shadow-lg mt-2 group no-underline"
                    >
                        <span className="font-semibold text-[16px] text-white uppercase tracking-wide">
                            {content.ctaLabel?.[lang] || 'JOIN DAILY YOGA'}
                        </span>
                    </a>
                ) : (
                    <a
                        href={mobileNumber ? `https://class.healthyday.co.in/${mobileNumber}/leaderboard` : "https://class.healthyday.co.in/leaderboard"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-auto px-6 h-[55px] bg-[#f9a825] border-[2px] border-transparent hover:bg-white hover:border-[#f9a825] transition-all transform active:scale-95 rounded-full flex items-center justify-center cursor-pointer shadow-lg mt-2 group no-underline"
                    >
                        <span className="font-semibold text-[16px] text-[#202020] uppercase tracking-wide group-hover:text-[#202020] whitespace-nowrap">{"REFER & WIN A YOGA KIT"}</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default RegistrationSuccessPopup;
