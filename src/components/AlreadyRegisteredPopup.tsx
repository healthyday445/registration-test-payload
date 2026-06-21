import React from 'react';
import { useNavigate } from 'react-router-dom';
import successPopupSvg from '../assets/Frame 53 (5).webp';

interface AlreadyRegisteredPopupProps {
    isOpen: boolean;
    onClose: () => void;
    mobileNumber?: string;
}

const AlreadyRegisteredPopup: React.FC<AlreadyRegisteredPopupProps> = ({ isOpen, onClose, mobileNumber }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleHomeClick = () => {
        onClose();
        navigate('/');
        window.scrollTo(0, 0);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="relative w-full max-w-[570px] bg-white flex flex-col items-center justify-center shadow-2xl rounded-2xl overflow-hidden p-8 gap-6 md:min-h-[400px]">

                {/* Content Section */}
                <div className="flex flex-col items-center gap-6 text-center w-full">
                    {/* Success Illustration */}
                    <div className="w-[80%] h-auto object-contain mb-2 flex justify-center">
                        <img src={successPopupSvg} alt="Already Registered" className="w-full h-auto" />
                    </div>

                    {/* Already Registered Text */}
                    <div className="flex flex-col gap-4 w-full text-black">
                        <h3 className="text-[20px] md:text-[22px] font-semibold text-center leading-tight">
                            మీరు already మా next free batch లో register అయ్యారు!
                        </h3>

                        <p className="text-[16px] text-center font-">
                            ✨ 21 Days Yoga Challenge లో మీరు <span className="font-bold inline-flex items-center gap-1"><img draggable="false" role="img" className="w-5 h-5" alt="🗓️" src="https://s.w.org/images/core/emoji/17.0.2/svg/1f5d3.svg" /> Monday</span> నుండి join కావచ్చు!
                        </p>

                        {/* Timings Box */}
                        <div className="flex flex-col gap-1 items-center text-[16px]">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[20px]"><img draggable="false" role="img" className="w-5 h-5" alt="�" src="https://s.w.org/images/core/emoji/17.0.2/svg/1f4c5.svg" /></span>
                                <strong className="font-bold">Timings:</strong>
                            </div>
                            <div className="flex flex-col gap-1 text-center font-normal">
                                <p>☀️ ఉదయం: 5:30 | 6:30 | 7:30 | 8:30</p>
                                <p>🌙 సాయంత్రం: 4:30 | 5:30 | 6:30</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-[16px] mt-1">
                            <span>🔔</span>
                            <span className="font-bold">మా Next Update WhatsApp లో వస్తుంది</span>
                        </div>

                        <p className="text-[16px] font- text-center mt-1">
                            Stay tuned and get ready! 💪🧘🏻‍♂️
                        </p>
                    </div>
                </div>

                {/* Home Button */}
                <a
                    href={mobileNumber ? `https://class.healthyday.co.in/${mobileNumber}/leaderboard` : "https://class.healthyday.co.in/leaderboard"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto px-6 h-[55px] bg-[#f9a825] border-[2px] border-transparent hover:bg-white hover:border-[#f9a825] transition-all transform active:scale-95 rounded-full flex items-center justify-center cursor-pointer shadow-lg mt-2 group no-underline"
                >
                    <span className="font-semibold text-[16px] text-[#202020] uppercase tracking-wide group-hover:text-[#202020] whitespace-nowrap">{"REFER & WIN A YOGA KIT"}</span>
                </a>
            </div>
        </div>
    );
};

export default AlreadyRegisteredPopup;
