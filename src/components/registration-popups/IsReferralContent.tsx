import React from 'react';
import { ChildPopupProps } from './types';
import whatsappIcon from '../../assets/WhatsApp.svg';
import { pushDataLayer } from '../../utils/pushDataLayer';

const WA_BUSINESS_NUMBER = '918008153968';

const IsReferralContent: React.FC<ChildPopupProps> = ({ status }) => {
    const handleClick = () => {
        pushDataLayer({ 'event': 'popup_cta_click', 'cta': 'complete_registration', 'popup_status': status });
        window.open(`https://wa.me/${WA_BUSINESS_NUMBER}?text=${encodeURIComponent('verify')}`, '_blank');
    };

    return (
        <div className="w-full max-w-[385px] rounded-2xl overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] bg-white">

            {/* Blue header */}
            <div className="bg-[#0d468b] h-[69px] flex items-center justify-center shadow-[0px_1px_8px_0px_rgba(0,0,0,0.3)]">
                <h2 style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: '28px', color: '#fff', textAlign: 'center', lineHeight: 'normal' }}>
                    Final Step
                </h2>
            </div>

            {/* White body */}
            <div className="px-6 pt-6 pb-5 flex flex-col items-center gap-5">

                {/* Body text */}
                <div className="flex flex-col items-center gap-1 text-center">
                    <p style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: '16px', color: '#000', lineHeight: 'normal' }}>
                        Click the button below to verify your
                    </p>
                    <p className="flex items-center gap-1.5" style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: '16px', color: '#000', lineHeight: 'normal' }}>
                        <img src={whatsappIcon} alt="WhatsApp" className="w-[22px] h-[22px]" />
                        WhatsApp Number
                    </p>
                </div>

                {/* CTA button */}
                <button
                    onClick={handleClick}
                    className="w-full h-[40px] bg-[#feab27] rounded-[30px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] cursor-pointer hover:brightness-105 active:scale-95 transition-all"
                >
                    <span style={{ fontFamily: 'Outfit', fontWeight: 500, fontSize: '16px', color: '#202020', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
                        Complete Registration
                    </span>
                </button>

            </div>
        </div>
    );
};

export default IsReferralContent;
