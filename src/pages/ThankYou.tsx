import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Youtube, ChevronUp } from 'lucide-react';
import logo from '../assets/healthyday-logo.webp';
import image from '../assets/Frame 129.webp';

const ThankYou = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const language = location.state?.language || 'English';

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-white text-[#333]">
            {/* Header */}
            <header className="py-4 border-b border-gray-100 flex justify-center sticky top-0 bg-white z-50">
                <div className="flex items-center gap-2">
                    <div className="flex items-center">
                        <a href="https://healthyday.co.in/">
                            <img src={logo} alt="Healthyday" className="h-12 w-auto object-contain" />
                        </a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow relative py-12 px-4 md:px-8 overflow-hidden flex flex-col items-center justify-center text-center" style={{
                backgroundImage: `
                    linear-gradient(to right, #f3f4f6 1px, transparent 1px),
                    linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
            }}>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">Thank you for trusting us for your<br />healthy life</h1>

                {language === 'Telugu' ? (
                    <>
                        <p className="text-gray-800 mb-6 font-medium">కాసేపట్లో మీకు WhatsApp లో update వస్తుంది</p>

                        <p className="text-gray-600 mb-8 max-w-lg">
                            ఒకవేల 5 minutes లోపు మీకు ఎటువంటి confirmation రాకపోతే, ఈ కింది number కి మీరు whatsapp లో message చేయొచ్చు
                        </p>
                    </>
                ) : (
                    <>
                        <p className="text-gray-800 mb-6 font-medium">You will receive an update from us on WhatsApp.</p>

                        <p className="text-gray-600 mb-8 max-w-lg">
                            In case you didn't receive any message in next 5 Minutes, Please Whatsapp us on the below number
                        </p>
                    </>
                )}

                <a
                    href="https://wa.me/919052888968"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#25D366] border border-[#25D366] px-6 py-2 rounded-full font-semibold mb-12 hover:bg-[#25D366] hover:text-white transition-colors"
                >
                    <i className="fab fa-whatsapp text-lg"></i>
                    +91 9052888968
                </a>

                {/* Yoga Image */}
                <div className="w-full max-w-4xl rounded-[2rem] overflow-hidden mb-12 shadow-xl aspect-[16/7]">
                    <img
                        src={image}
                        alt="Man doing yoga"
                        className="w-full h-full object-cover"
                    />
                </div>

                <a
                    href="https://healthyday.co.in/"
                    className="bg-[#ffb129] hover:bg-[#f59e0b] text-black font-semibold px-12 py-3 rounded-full uppercase tracking-widest text-sm shadow-lg transition-transform active:scale-95 inline-block"
                >
                    Back to Home
                </a>

            </main>

            {/* Footer */}
            <footer className="bg-[#F7F5F4] pt-16 border-t border-slate-200 transition-colors duration-300 font-['Outfit']">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                        {/* Brand Column */}
                        <div className="lg:col-span-5">
                            <div className="flex items-center gap-2 mb-6">
                                <img src="/logo.webp" alt="Healthyday Logo" className="h-9 w-auto object-contain" />
                            </div>
                            <p className="text-[16px] leading-[24px] font-normal tracking-normal text-slate-900 lg:max-w-md">
                                Healthyday is a wellness community of over 6.04 Lakh+ students. Founded in 2024 by Jagan, an Internationally Certified Yoga Instructor, Healthyday conducts online Yoga and wellness programs. These programs help members work toward their personal health and fitness goals through consistent yoga practice and community support.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-3">
                            <h3 className="text-[#0D468B] font-bold text-sm tracking-widest uppercase mb-6">Quick Links</h3>
                            <ul className="space-y-4">
                                <li><a className="hover:text-[#0D468B] transition-colors text-[16px] leading-[24px] font-normal text-slate-900" href="#">Healthyday Healthtech Ltd</a></li>
                                <li><a className="hover:text-[#0D468B] transition-colors text-[16px] leading-[24px] font-normal text-slate-900" href="#">Privacy Policy</a></li>
                                <li><a className="hover:text-[#0D468B] transition-colors text-[16px] leading-[24px] font-normal text-slate-900" href="#">Refund Policy</a></li>
                                <li><a className="hover:text-[#0D468B] transition-colors text-[16px] leading-[24px] font-normal text-slate-900" href="#">Terms of Use</a></li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="lg:col-span-4 relative">
                            <h3 className="text-[#0D468B] font-bold text-sm tracking-widest uppercase mb-6">Contact Us</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-[#0D468B] mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <p className="text-[16px] leading-[24px] font-normal text-slate-900">
                                        Healthyday Healthtech Private Ltd, <br />
                                        Near Scotspine School, Kanuru - Autonagar Road, Vijayawada, <br />
                                        Andhra Pradesh - 520007
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[#0D468B]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 5.25V4.5z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <a className="text-[16px] leading-[24px] font-normal hover:text-[#0D468B] transition-colors text-slate-900" href="tel:+919052888968">+91 9052 888 968</a>
                                </div>
                                <div className="flex items-center gap-3 pt-2">
                                    <a className="w-9 h-9 rounded-full bg-[#0D468B] text-white flex items-center justify-center hover:opacity-90 transition-opacity" href="https://www.facebook.com/profile.php?id=61566464743247" target="_blank" rel="noopener noreferrer">
                                        <Facebook size={18} fill="currentColor" strokeWidth={0} />
                                    </a>
                                    <a className="w-9 h-9 rounded-full bg-[#0D468B] text-white flex items-center justify-center hover:opacity-90 transition-opacity" href="https://www.instagram.com/healthydayyoga/" target="_blank" rel="noopener noreferrer">
                                        <Instagram size={18} strokeWidth={2} />
                                    </a>
                                    <a className="w-9 h-9 rounded-full bg-[#0D468B] text-white flex items-center justify-center hover:opacity-90 transition-opacity" href="https://www.youtube.com/@healthydayyoga" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 w-full">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative">
                        <div className="border-t border-slate-200 pt-8 relative">
                            <p className="text-center text-[16px] leading-[24px] font-normal text-slate-900 pb-8">
                                2026, Healthyday Healthtech Private Limited, All rights reserved
                            </p>
                            <button
                                aria-label="Back to top"
                                className="absolute -top-6 right-0 w-12 h-12 bg-[#F9A825] text-black rounded-full flex items-center justify-center shadow-lg hover:bg-orange-500 transition-all hover:-translate-y-1 group"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <ChevronUp size={24} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ThankYou;
