import React from 'react';
import { ChildPopupProps } from './types';
import ReferWinCard from '../ReferWinCard';
import { pushDataLayer } from '../../utils/pushDataLayer';

// Popup 3 (English) / Popup 4 (Telugu)
// Triggered when the user enters their own referral number in the form.
const SelfReferralContent: React.FC<ChildPopupProps> = ({ language, mobileNumber, status }) => {
    const referralsUrl = mobileNumber
        ? `https://class.healthyday.co.in/${mobileNumber}/leaderboard`
        : 'https://class.healthyday.co.in/leaderboard';

    const shareLink = mobileNumber
        ? `${window.location.origin}${window.location.pathname}?ref=${mobileNumber}`
        : window.location.href;

    return (
        <div className="w-full max-w-[412px] rounded-2xl overflow-hidden shadow-2xl bg-white relative">
{/* Text content */}
            <div className="px-6 pt-10 pb-5 text-center flex flex-col gap-2">
                {language === 'English' ? (
                    <>
                        <p className="text-black font-semibold text-[17px] leading-snug">
                            You are already registered in our FREE Programme.
                        </p>
                        <p className="text-black text-[15px]">
                            This is your Referral Link.
                        </p>
                        <p className="text-gray-500 text-[14px]">
                            Share this link with others to Win Rewards.
                        </p>
                    </>
                ) : (
                    <>
                        <p className="text-black font-semibold text-[17px] leading-snug">
                            మీరు already FREE Programme లో register అయ్యారు
                        </p>
                        <p className="text-black text-[15px]">
                            ఇది మీ Referral Link.
                        </p>
                        <p className="text-gray-500 text-[14px]">
                            ఈ link మీ friends &amp; family కి share చేయండి<br />
                            వాళ్ళు మీ link తో register అయితే మీరు rewards win కావచ్చు
                        </p>
                    </>
                )}
            </div>

            {/* Refer & Win card */}
            <div className="px-4 pb-6">
                <ReferWinCard
                shareLink={shareLink}
                referralsUrl={referralsUrl}
                onCopyLink={() => pushDataLayer({ 'event': 'popup_cta_click', 'cta': 'copy_link', 'popup_status': status })}
                onWhatsAppShare={() => pushDataLayer({ 'event': 'popup_cta_click', 'cta': 'whatsapp_share', 'popup_status': status })}
            />
            </div>
        </div>
    );
};

export default SelfReferralContent;
