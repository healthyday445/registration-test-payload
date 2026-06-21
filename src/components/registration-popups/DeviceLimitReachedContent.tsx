import React from 'react';
import { ChildPopupProps } from './types';
import warningImg from '../../assets/istockphoto-1163581975-612x612.jpg';
import { X } from 'lucide-react';

const DeviceLimitReachedContent: React.FC<ChildPopupProps> = ({ language, onClose }) => {
    return (
        <div className="relative w-full max-w-[570px] bg-white flex flex-col items-center justify-center shadow-2xl rounded-2xl overflow-hidden p-8 px-4 gap-6 md:min-h-[400px]">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label="Close popup"
            >
                <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-4 text-center w-full mt-2">
                <div className="w-[80%] max-w-[150px] h-auto object-contain mb-2 flex justify-center">
                    <img src={warningImg} alt="Limit Reached" className="w-full h-auto" />
                </div>

                {language === 'English' ? (
                    <>
                        <div className="flex flex-col gap-3 w-full text-[16px] text-center text-black leading-normal mt-2">
                            <p className="font-semibold text-[17px]">
                                You are trying to register multiple numbers from same device.
                            </p>
                            <p className="text-gray-700">
                                Please share the link to your friends & family. Ask them register by themselves.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col gap-3 w-full text-[16px] text-center text-black leading-normal mt-2">
                            <p className="font-semibold text-[17px]">
                                You are trying to register multiple numbers from same device.
                            </p>
                            <p className="text-gray-700">
                                Please share the link to your friends & family. Ask them register by themselves.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default DeviceLimitReachedContent;
