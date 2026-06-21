import { useState } from 'react';
import { X } from 'lucide-react';

const TwentyOneDaysHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] z-50 h-[80px]">
            <div className="w-full px-4 h-full flex items-center justify-between">
                <a href="https://healthyday.co.in/">
                    <img src="/logo.webp" alt="Healthyday Logo" className="h-[30px] w-auto object-contain" />
                </a>

                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="text-[#0D468B] p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 25" fill="none"><path d="M3 5.5C3 4.94772 3.44772 4.5 4 4.5H20C20.5523 4.5 21 4.94772 21 5.5C21 6.05228 20.5523 6.5 20 6.5H4C3.44772 6.5 3 6.05228 3 5.5ZM9 12.5C9 11.9477 9.44772 11.5 10 11.5H20C20.5523 11.5 21 11.9477 21 12.5C21 13.0523 20.5523 13.5 20 13.5H10C9.44771 13.5 9 13.0523 9 12.5ZM3 19.5C3 18.9477 3.44772 18.5 4 18.5H20C20.5523 18.5 21 18.9477 21 19.5C21 20.0523 20.5523 20.5 20 20.5H4C3.44772 20.5 3 20.0523 3 19.5Z" fill="#0D468B"></path></svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed inset-0 w-screen h-screen bg-white z-[60] flex flex-col items-center justify-center">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-6 text-[#0D468B] p-2"
                    >
                        <X size={32} />
                    </button>

                    <div className="mb-10">
                        <a href="https://healthyday.co.in/">
                            <img src="/logo.webp" alt="Healthyday Logo" className="h-[40px] w-auto object-contain" />
                        </a>
                    </div>

                    <div className="flex flex-col items-center space-y-6 text-[17px] font-semibold text-[#202020] uppercase tracking-wide">
                        <a href="https://healthyday.co.in" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ffb129] transition-colors">HOME</a>
                        <a href="https://healthyday.co.in/pricing/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ffb129] transition-colors">PRICING</a>
                        <a href="https://yoga.healthyday.co.in/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ffb129] transition-colors">FREE PROGRAMMES</a>
                        <a href="https://healthyday.co.in/contact-us/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#ffb129] transition-colors">CONTACT US</a>
                        <a href="https://yoga.healthyday.co.in/" onClick={() => setIsMenuOpen(false)}>
                            <button className="mt-4 bg-[#ffb129] border-2 border-[#ffb129] px-8 py-3 rounded-full font-medium text-[16px] shadow-lg text-black uppercase tracking-wide transition-all duration-300 hover:bg-white hover:text-[#202020]">
                                JOIN FREE CLASSES
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default TwentyOneDaysHeader;
