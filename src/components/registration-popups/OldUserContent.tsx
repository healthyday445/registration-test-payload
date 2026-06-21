import React from 'react';
import { ChildPopupProps } from './types';
import successPopupSvg from '../../assets/success_popup.svg';
import alreadyRegisteredSvg from '../../assets/Frame 53 (5).webp';

const PLANS_URL = 'https://healthyday.co.in/pricing';

const OldUserContent: React.FC<ChildPopupProps> = ({ language, mobileNumber, status }) => {
    const lang = language === 'English' ? 'en' : 'te';
    const leaderboardUrl = mobileNumber
        ? `https://class.healthyday.co.in/${mobileNumber}/leaderboard`
        : 'https://class.healthyday.co.in/leaderboard';

    type Content = {
        image: string;
        header: { te: string; en: string };
        body: { te: React.ReactNode; en: React.ReactNode };
        ctaLink?: string;
        ctaLabel?: { te: string; en: string };
    };

    const contentMap: Record<string, Content> = {
        free_ongoing: {
            image: alreadyRegisteredSvg,
            header: {
                te: 'మీరు already ప్రస్తుతం జరుగుతున్న free batch లో register అయ్యారు.',
                en: 'You are already registered in our ongoing 21 Days FREE Batch.',
            },
            body: {
                te: <p>మీకు WhatsApp లో వచ్చిన link తో Join అవ్వండి</p>,
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
        },
        free_completed_recent: {
            image: successPopupSvg,
            header: {
                te: 'మీ Free Yoga batch అయిపోయింది.',
                en: 'You recently participated in our FREE Yoga Batch.',
            },
            body: {
                te: <p><span className="font-bold">Yoga Continue చేయటానికి ఈ కింది లింక్ click చేయండి</span> 👇👇</p>,
                en: <p>To join our community for daily yoga sessions, please click below 👇👇</p>,
            },
            ctaLink: PLANS_URL,
            ctaLabel: { te: 'JOIN DAILY YOGA', en: 'JOIN DAILY YOGA' },
        },
        paid_user: {
            image: alreadyRegisteredSvg,
            header: {
                te: 'మీరు already మా Paid Classes లో subscription తీసుకున్నారు.',
                en: 'We noticed that you are already our paid community member.',
            },
            body: {
                te: <p>మీకు WhatsApp లో వచ్చిన Link తో జాయిన్ అవ్వండి</p>,
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
        },
        subscription_expired_recently: {
            image: successPopupSvg,
            header: {
                te: 'మీ Yoga Subscription అయిపోయింది.',
                en: 'Your paid subscription expired recently.',
            },
            body: {
                te: <p><span className="font-bold">Yoga Continue చేయటానికి ఈ కింది లింక్ click చేయండి</span> 👇👇</p>,
                en: <p>To renew, please click the link below 👇👇</p>,
            },
            ctaLink: PLANS_URL,
            ctaLabel: { te: 'JOIN DAILY YOGA', en: 'JOIN DAILY YOGA' },
        },
    };

    const content = contentMap[status] ?? contentMap['free_ongoing'];

    return (
        <div className="relative w-full max-w-[570px] bg-white flex flex-col items-center justify-center shadow-2xl rounded-2xl overflow-hidden p-8 px-4 gap-6 md:min-h-[400px]">
            <div className="flex flex-col items-center gap-4 text-center w-full">
                <div className="w-[80%] h-auto object-contain mb-2 flex justify-center">
                    <img src={content.image} alt="Status" className="w-full h-auto" />
                </div>

                <h2 className="text-[20px] md:text-[22px] font-bold text-black leading-tight flex items-center gap-2 justify-center flex-wrap">
                    <span className="font-semibold">{content.header[lang]}</span>
                </h2>

                <div className="flex flex-col gap-4 w-full text-[16px] text-center text-black leading-normal">
                    {content.body[lang]}
                </div>
            </div>

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
                    href={leaderboardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto px-6 h-[55px] bg-[#f9a825] border-[2px] border-transparent hover:bg-white hover:border-[#f9a825] transition-all transform active:scale-95 rounded-full flex items-center justify-center cursor-pointer shadow-lg mt-2 group no-underline"
                >
                    <span className="font-semibold text-[16px] text-[#202020] uppercase tracking-wide group-hover:text-[#202020] whitespace-nowrap">
                        REFER & WIN A YOGA KIT
                    </span>
                </a>
            )}
        </div>
    );
};

export default OldUserContent;
