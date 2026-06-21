import { useState, useEffect } from 'react';
import {
    Check,
    X,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import SharedHeader from '../components/SharedHeader';
import SharedFooter from '../components/SharedFooter';
import SharedTestimonials from '../components/SharedTestimonials';

const Home = () => {
    const [activePlan, setActivePlan] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const handleNavigationToCheckout = (plan: any) => {
        navigate('/checkout', {
            state: { plan }
        });
    };

    const plans = [
        {
            title: "1 Year Including Diet",
            originalPrice: "5999",
            discountPrice: "2399",
            discount: "Save 60%!",
            isBestValue: true,
            buttonText: "JOIN NOW"
        },
        {
            title: "6 Months Plan",
            originalPrice: "2999",
            discountPrice: "1899",
            discount: "Save 37%!",
            isBestValue: false,
            buttonText: "JOIN NOW"
        },
        {
            title: "3 Months Plan",
            originalPrice: "1499",
            discountPrice: "1399",
            discount: "Save 7%!",
            isBestValue: false,
            buttonText: "JOIN NOW"
        }
    ];

    const features = [
        { name: "Daily YOGA", plan1: true, plan2: true, plan3: true },
        { name: "24-Hour Recording", plan1: true, plan2: true, plan3: true },
        { name: "Reminders & Tracking", plan1: true, plan2: true, plan3: true },
        { name: "108 Surya Namaskar", plan1: true, plan2: true, plan3: false },
        { name: "Breath Mastery", plan1: true, plan2: true, plan3: false },
        { name: "Face YOGA", plan1: true, plan2: false, plan3: false },
        { name: "Masterclasses", plan1: true, plan2: false, plan3: false },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden">
            {/* Header */}
            <SharedHeader />

            {/* Hero / Pricing Section */}
            <main className="pt-24 md:pt-32 pb-6 md:pb-10 px-4 md:px-6" id="pricing">
                <div className="max-w-[1200px] mx-auto text-center pt-0 pb-4 md:py-[50px]">
                    <h3 className="text-[26px] leading-[32px] md:text-[50px] md:leading-[40px] font-semibold text-[#0D468B] mb-2 md:mb-3">
                        Most affordable Subscription Plans
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-[1200px] mx-auto">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActivePlan(idx)}
                            className={`relative bg-white rounded-2xl shadow-xl border overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 ${activePlan === idx ? 'border-[#0D468B] ring-1 ring-[#0D468B]' : 'border-slate-10'} ${!plan.isBestValue ? 'h-fit md:mt-12' : ''}`}
                        >
                            {plan.isBestValue && (
                                <div className="bg-[#0D468B] text-white py-2 flex items-center justify-start px-6 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.4999 9.16917H17.3533L15.8341 4.725L2.79492 9.16917L2.49992 9.16667M2.08325 9.17H2.49992L11.7883 1.75L14.1358 5.04167" stroke="#FEAB27" strokeWidth="2" strokeLinecap="square"></path><path d="M12.0832 13.3333C12.0832 13.8859 11.8637 14.4158 11.473 14.8065C11.0823 15.1972 10.5524 15.4167 9.99984 15.4167C9.4473 15.4167 8.9174 15.1972 8.5267 14.8065C8.136 14.4158 7.9165 13.8859 7.9165 13.3333C7.9165 12.7808 8.136 12.2509 8.5267 11.8602C8.9174 11.4695 9.4473 11.25 9.99984 11.25C10.5524 11.25 11.0823 11.4695 11.473 11.8602C11.8637 12.2509 12.0832 12.7808 12.0832 13.3333Z" stroke="#FEAB27" strokeWidth="2" strokeLinecap="square"></path><path d="M17.9166 9.16667V17.5H2.08325V9.16667H17.9166Z" stroke="#FEAB27" strokeWidth="2" strokeLinecap="square"></path><path d="M2.08325 9.16667H3.74992C3.74992 9.6087 3.57432 10.0326 3.26176 10.3452C2.9492 10.6577 2.52528 10.8333 2.08325 10.8333V9.16667ZM17.9166 9.16667H16.2499C16.2499 9.6087 16.4255 10.0326 16.7381 10.3452C17.0506 10.6577 17.4746 10.8333 17.9166 10.8333V9.16667ZM2.08325 17.5H3.75159C3.7518 17.2809 3.7088 17.0638 3.62504 16.8613C3.54127 16.6588 3.41839 16.4748 3.26343 16.3198C3.10847 16.1649 2.92447 16.042 2.72195 15.9582C2.51944 15.8745 2.3024 15.8315 2.08325 15.8317V17.5ZM17.9166 17.5H16.2499C16.2499 17.058 16.4255 16.6341 16.7381 16.3215C17.0506 16.0089 17.4746 15.8333 17.9166 15.8333V17.5Z" stroke="#FEAB27" strokeWidth="2" strokeLinecap="square"></path></svg>
                                    <span className="font-bold">Best Value</span>
                                </div>
                            )}
                            <div className="p-4 md:p-6 text-left">
                                <h2 className="text-[25px] leading-7 font-semibold text-[#0D468B] mb-2">{plan.title}</h2>
                                <div className="flex items-baseline space-x-2 mb-4">
                                    <span className="text-[#919191] line-through text-[22px] leading-7">₹{plan.originalPrice}/-</span>
                                    <span
                                        onClick={(e) => { e.stopPropagation(); navigate('/pricing'); }}
                                        className="text-4xl font-semibold text-[#0D468B] cursor-pointer"
                                    >₹{plan.discountPrice}/-</span>
                                </div>
                                <div className="mb-6">
                                    <span className="bg-[#FF0000] text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {plan.discount}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleNavigationToCheckout(plan)}
                                    className="w-full bg-[#ffb129] hover:bg-white hover:text-[#0D468B] hover:border-[#ffb129] border-2 border-transparent text-[#202020] py-3 rounded-full font-bold shadow-md transition-all duration-300 uppercase"
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compare Header */}
                <div className="text-center mb-4 md:mb-8">
                    <h2 className="text-[24px] leading-[30px] md:text-5xl font-semibold text-[#0D468B]">Compare and choose your plan!</h2>
                </div>

                {/* Overview Table */}
                <div className="max-w-[1200px] mx-auto mb-12 relative px-4 md:px-0 overflow-hidden">

                    <div className="relative z-10 bg-white/0">
                        {/* Highlight Column Background - Dynamic Position */}
                        <div
                            className="block absolute top-[0px] bottom-0 bg-[#FFF8E7] border-2 border-[#0D468B] rounded-2xl z-0 transition-all duration-300 ease-in-out"
                            style={{
                                width: 'calc((100% - 30%) / 3)',
                                left: `calc(30% + ${activePlan} * (100% - 30%) / 3)`,
                            } as React.CSSProperties}
                        ></div>
                        <div className="flex mb-4 px-2 md:px-4 text-center items-end py-4 relative z-[1]">
                            <div className="w-[30%] text-left font-bold text-[#919191] text-[11px] md:text-[16px]">Features</div>
                            <div onClick={() => setActivePlan(0)} className={`w-[calc(70%/3)] cursor-pointer transform transition-all duration-300 font-semibold ${activePlan === 0 ? 'text-[13px] md:text-[26px] leading-[20px] md:leading-[24px] text-[#0D468B]' : 'text-[12px] md:text-[22px] leading-[20px] md:leading-[24px] text-[#202020]'}`}>1 Year</div>
                            <div onClick={() => setActivePlan(1)} className={`w-[calc(70%/3)] cursor-pointer transform transition-all duration-300 font-semibold ${activePlan === 1 ? 'text-[13px] md:text-[26px] leading-[20px] md:leading-[24px] text-[#0D468B]' : 'text-[12px] md:text-[22px] leading-[20px] md:leading-[24px] text-[#202020]'}`}>6 Months</div>
                            <div onClick={() => setActivePlan(2)} className={`w-[calc(70%/3)] cursor-pointer transform transition-all duration-300 font-semibold ${activePlan === 2 ? 'text-[13px] md:text-[26px] leading-[20px] md:leading-[24px] text-[#0D468B]' : 'text-[12px] md:text-[22px] leading-[20px] md:leading-[24px] text-[#202020]'}`}>3 Months</div>
                        </div>

                        <div className="">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center py-2 md:py-4 hover:bg-slate-50/50 transition-colors border-b border-transparent md:border-none relative z-[1]">
                                    <div className="w-[30%] text-left font-bold text-[#202020] text-[12px] leading-[18px] px-1 md:text-[18px] md:leading-[24px] md:px-4">{feature.name}</div>

                                    <div onClick={() => setActivePlan(0)} className="w-[calc(70%/3)] flex justify-center cursor-pointer">
                                        {feature.plan1 ? <Check className="w-4 h-4 md:w-7 md:h-7 text-[#0D468B]" strokeWidth={3} /> : <X className="w-4 h-4 md:w-7 md:h-7 text-[#ff0000]" strokeWidth={3} />}
                                    </div>

                                    <div onClick={() => setActivePlan(1)} className="w-[calc(70%/3)] flex justify-center cursor-pointer">
                                        {feature.plan2 ? <Check className="w-4 h-4 md:w-7 md:h-7 text-[#0D468B]" strokeWidth={3} /> : <X className="w-4 h-4 md:w-7 md:h-7 text-[#ff0000]" strokeWidth={3} />}
                                    </div>
                                    <div onClick={() => setActivePlan(2)} className="w-[calc(70%/3)] flex justify-center cursor-pointer">
                                        {feature.plan3 ? <Check className="w-4 h-4 md:w-7 md:h-7 text-[#0D468B]" strokeWidth={3} /> : <X className="w-4 h-4 md:w-7 md:h-7 text-[#ff0000]" strokeWidth={3} />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <SharedTestimonials />
            </main>

            {/* Footer */}
            <div id="contact">
                <SharedFooter />
            </div>
        </div>
    );
};

export default Home;
