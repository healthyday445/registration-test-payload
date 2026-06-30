import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SharedHeader from '../components/SharedHeader';
import SharedFooter from '../components/SharedFooter';
import { ArrowLeft } from 'lucide-react';
import PhoneInputCustom from '../components/PhoneInputCustom';
import { validatePhone } from '../utils/phoneValidation';
import StudentDetailsModal from '../components/StudentDetailsModal';

const SolidCheckCircle = () => (
    <svg aria-hidden="true" className="w-[18px] h-[18px] text-[#0D468B] flex-shrink-0 mt-[2px]" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
    </svg>
);

const BestValueRibbon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.4999 9.16917H17.3533L15.8341 4.725L2.79492 9.16917L2.49992 9.16667M2.08325 9.17H2.49992L11.7883 1.75L14.1358 5.04167" stroke="#FEAB27" strokeWidth="2" strokeLinecap="square"></path><path d="M12.0832 13.3333C12.0832 13.8859 11.8637 14.4158 11.473 14.8065C11.0823 15.1972 10.5524 15.4167 9.99984 15.4167C9.4473 15.4167 8.9174 15.1972 8.5267 14.8065C8.136 14.4158 7.9165 13.8859 7.9165 13.3333C7.9165 12.7808 8.136 12.2509 8.5267 11.8602C8.9174 11.4695 9.4473 11.25 9.99984 11.25C10.5524 11.25 11.0823 11.4695 11.473 11.8602C11.8637 12.2509 12.0832 12.7808 12.0832 13.3333Z" stroke="#FEAB27" strokeWidth="2" strokeLinecap="square"></path><path d="M17.9166 9.16667V17.5H2.08325V9.16667H17.9166Z" stroke="#FEAB27" strokeWidth="2" strokeLinecap="square"></path><path d="M2.08325 9.16667H3.74992C3.74992 9.6087 3.57432 10.0326 3.26176 10.3452C2.9492 10.6577 2.52528 10.8333 2.08325 10.8333V9.16667ZM17.9166 9.16667H16.2499C16.2499 9.6087 16.4255 10.0326 16.7381 10.3452C17.0506 10.6577 17.4746 10.8333 17.9166 10.8333V9.16667ZM2.08325 17.5H3.75159C3.7518 17.2809 3.7088 17.0638 3.62504 16.8613C3.54127 16.6588 3.41839 16.4748 3.26343 16.3198C3.10847 16.1649 2.92447 16.042 2.72195 15.9582C2.51944 15.8745 2.3024 15.8315 2.08325 15.8317V17.5ZM17.9166 17.5H16.2499C16.2499 17.058 16.4255 16.6341 16.7381 16.3215C17.0506 16.0089 17.4746 15.8333 17.9166 15.8333V17.5Z" stroke="#FEAB27" strokeWidth="2" strokeLinecap="square"></path></svg>
);

const SecurePaymentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none"><circle cx="42" cy="42" r="42" fill="url(#paint0_linear_863_1863)"></circle><circle cx="42" cy="42" r="37.25" stroke="white" strokeWidth="1.5"></circle><path d="M42 19.5L42.7375 17.775C42.5044 17.6753 42.2535 17.6239 42 17.6239C41.7465 17.6239 41.4956 17.6753 41.2625 17.775L42 19.5ZM42 64.5L41.07 66.1275C41.3532 66.2893 41.6738 66.3744 42 66.3744C42.3262 66.3744 42.6468 66.2893 42.93 66.1275L42 64.5ZM41.26 17.7775L25.28 24.625L26.75 28.075L42.735 21.225L41.26 17.7775ZM22.625 28.6475V45.7975H26.375V28.6475H22.625ZM31.1275 60.4475L41.07 66.1275L42.93 62.8725L32.9875 57.19L31.1275 60.4475ZM42.93 66.1275L52.8725 60.4475L51.0125 57.19L41.07 62.8725L42.93 66.1275ZM61.375 45.795V28.65H57.625V45.8L61.375 45.795ZM58.725 24.6275L42.7375 17.7775L41.2625 21.2225L57.2475 28.075L58.725 24.6275ZM61.375 28.65C61.375 26.9 60.3325 25.3175 58.725 24.6275L57.2475 28.075C57.3598 28.1234 57.4554 28.2037 57.5225 28.3059C57.5896 28.4081 57.6252 28.5277 57.625 28.65H61.375ZM52.8725 60.4475C55.4552 58.9716 57.6019 56.8393 59.095 54.2666C60.5882 51.6938 61.3747 48.7721 61.375 45.7975H57.625C57.6245 48.1107 57.0127 50.3827 55.8514 52.3834C54.6902 54.384 53.0209 56.0422 51.0125 57.19L52.8725 60.4475ZM22.625 45.7975C22.6253 48.7721 23.4118 51.6938 24.905 54.2666C26.3981 56.8393 28.5448 58.9716 31.1275 60.4475L32.9875 57.19C30.9788 56.042 29.3092 54.3834 28.1479 52.3823C26.9867 50.3812 26.3751 48.1086 26.375 45.795L22.625 45.7975ZM25.275 24.625C24.4885 24.9624 23.8183 25.5231 23.3472 26.2377C22.8762 26.9522 22.6251 27.7917 22.625 28.6475H26.375C26.375 28.3975 26.525 28.17 26.755 28.07L25.275 24.625Z" fill="white"></path><path d="M49.5 37L39.5 47L34.5 42" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><defs><linearGradient id="paint0_linear_863_1863" x1="42" y1="0" x2="42" y2="84" gradientUnits="userSpaceOnUse"><stop stopColor="#53AF58"></stop><stop offset="1" stopColor="#7DB54B"></stop></linearGradient></defs></svg>
);

const SslIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none"><circle cx="42" cy="42" r="42" fill="url(#paint0_linear_863_1865)"></circle><circle cx="42" cy="42" r="37.25" stroke="white" strokeWidth="1.5"></circle><path d="M32 37V29.5C32 26.8478 33.0536 24.3043 34.9289 22.4289C36.8043 20.5536 39.3478 19.5 42 19.5C44.6522 19.5 47.1957 20.5536 49.0711 22.4289C50.9464 24.3043 52 26.8478 52 29.5V37" stroke="white" strokeWidth="3.75" strokeLinecap="round"></path><path d="M24.5 37H59.5V59.5C59.5 60.8261 58.9732 62.0979 58.0355 63.0355C57.0979 63.9732 55.8261 64.5 54.5 64.5H29.5C28.1739 64.5 26.9021 63.9732 25.9645 63.0355C25.0268 62.0979 24.5 60.8261 24.5 59.5V37Z" stroke="white" strokeWidth="3.75" strokeLinejoin="round"></path><path d="M48.25 50.75H48.275V50.775H48.25V50.75Z" stroke="white" strokeWidth="5.625" strokeLinejoin="round"></path><defs><linearGradient id="paint0_linear_863_1865" x1="42" y1="0" x2="42" y2="84" gradientUnits="userSpaceOnUse"><stop stopColor="#1C7EB3"></stop><stop offset="1" stopColor="#51AAC9"></stop></linearGradient></defs></svg>
);

const TrustedCommerceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none"><circle cx="42" cy="42" r="42" fill="url(#paint0_linear_863_1881)"></circle><circle cx="42" cy="42" r="37.25" stroke="white" strokeWidth="1.5"></circle><path d="M59.8125 23.25H24.1875C20.5631 23.25 17.625 26.1881 17.625 29.8125V54.1875C17.625 57.8119 20.5631 60.75 24.1875 60.75H59.8125C63.4369 60.75 66.375 57.8119 66.375 54.1875V29.8125C66.375 26.1881 63.4369 23.25 59.8125 23.25Z" stroke="white" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.625 34.5H66.375M27 47.1562H32.625V49.5H27V47.1562Z" stroke="white" strokeWidth="7.03125" strokeLinejoin="round"></path><defs><linearGradient id="paint0_linear_863_1881" x1="42" y1="0" x2="42" y2="84" gradientUnits="userSpaceOnUse"><stop stopColor="#324C80"></stop><stop offset="1" stopColor="#6664A0"></stop></linearGradient></defs></svg>
);

const defaultPlan = {
    id: "6M_4",
    title: "6 Months Plan",
    duration: "6 Months Plan",
    originalPrice: "2999",
    discountPrice: "1899",
    usdPrice: "39",
    usdOriginalPrice: "79",
    discount: "Save 50%!",
    isBestValue: true,
    inrPlanName: "6m_new_inr",
    usdPlanName: "6m_new_usd"
};

const oldPlans: Record<string, any> = {
    '1year': {
        title: "1 Year Including Diet",
        duration: "1 Year Including Diet",
        originalPrice: "5999",
        discountPrice: "1999",
        usdPrice: "49",
        usdOriginalPrice: "149",
        discount: "Save 66%!",
        isBestValue: true,
        inrPlanName: "12m_renew_inr",
        usdPlanName: "12m_renew_usd"
    },
    '6months': {
        title: "6 Months Plan",
        duration: "6 Months Plan",
        originalPrice: "2999",
        discountPrice: "1499",
        usdPrice: "39",
        usdOriginalPrice: "79",
        discount: "Save 50%!",
        isBestValue: false,
        inrPlanName: "6m_renew_inr",
        usdPlanName: "6m_renew_usd"
    },
    '3months': {
        title: "3 Months Plan",
        duration: "3 Months Plan",
        originalPrice: "1499",
        discountPrice: "999",
        usdPrice: "29",
        usdOriginalPrice: "39",
        discount: "Save 33%!",
        isBestValue: false,
        inrPlanName: "3m_renew_inr",
        usdPlanName: "3m_renew_usd"
    }
};

const PlanCheckout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { planId } = useParams();
    const isUSDFlow = location.state?.isUSDFlow !== undefined ? location.state.isUSDFlow : location.pathname.includes('_usd');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dialCode, setDialCode] = useState(isUSDFlow ? '+1' : '+91');
    const [language, setLanguage] = useState('Telugu');
    const [phoneError, setPhoneError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [paymentId, setPaymentId] = useState('');

    let plan = location.state?.plan ? { ...location.state.plan } : null;

    if (!plan) {
        if (location.pathname.includes('/checkout/old') && planId) {
            if (planId === '1year') plan = { ...oldPlans['1year'] };
            else if (planId === '6months') plan = { ...oldPlans['6months'] };
            else if (planId === '3months') plan = { ...oldPlans['3months'] };
        } else if (location.pathname.includes('12m')) {
            const isRenew = location.pathname.includes('/renew');
            plan = {
                title: "1 Year Including Diet",
                duration: "1 Year Including Diet",
                originalPrice: "5999",
                discountPrice: isRenew ? "1999" : "2399",
                usdOriginalPrice: "149",
                usdPrice: "49",
                discount: isUSDFlow ? "Save 66%!" : (isRenew ? "Save 66%!" : "Save 60%!"),
                isBestValue: true,
                inrPlanName: isRenew ? "12m_renew_inr" : "12m_new_inr",
                usdPlanName: isRenew ? "12m_renew_usd" : "12m_new_usd"
            };
        } else if (location.pathname.includes('6m')) {
            const isRenew = location.pathname.includes('/renew');
            plan = {
                title: "6 Months Plan",
                duration: "6 Months Plan",
                originalPrice: "2999",
                discountPrice: isRenew ? "1499" : "1899",
                usdOriginalPrice: "79",
                usdPrice: "39",
                discount: isUSDFlow ? "Save 50%!" : (isRenew ? "Save 50%!" : "Save 37%!"),
                isBestValue: false,
                inrPlanName: isRenew ? "6m_renew_inr" : "6m_new_inr",
                usdPlanName: isRenew ? "6m_renew_usd" : "6m_new_usd"
            };
        } else if (location.pathname.includes('3m')) {
            const isRenew = location.pathname.includes('/renew');
            plan = {
                title: "3 Months Plan",
                duration: "3 Months Plan",
                originalPrice: "1499",
                discountPrice: isRenew ? "999" : "1399",
                usdOriginalPrice: "39",
                usdPrice: "29",
                discount: isUSDFlow ? "Save 33%!" : (isRenew ? "Save 33%!" : "Save 7%!"),
                isBestValue: false,
                inrPlanName: isRenew ? "3m_renew_inr" : "3m_new_inr",
                usdPlanName: isRenew ? "3m_renew_usd" : "3m_new_usd"
            };
        }
    }

    if (!plan) plan = { ...defaultPlan };

    // Inject USD prices if missing
    if (!plan.usdPrice) {
        if (plan.title?.includes('1 Year') || plan.title?.includes('12 Month') || plan.duration?.includes('1 Year')) {
            plan.usdPrice = "49";
            plan.usdOriginalPrice = "149";
        } else if (plan.title?.includes('6 Month') || plan.duration?.includes('6 Month')) {
            plan.usdPrice = "39";
            plan.usdOriginalPrice = "79";
        } else if (plan.title?.includes('3 Month') || plan.duration?.includes('3 Month')) {
            plan.usdPrice = "29";
            plan.usdOriginalPrice = "39";
        } else {
            plan.usdPrice = "39";
            plan.usdOriginalPrice = "79";
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        // Load Razorpay script only when checkout page is visited
        if (!document.getElementById('razorpay-script')) {
            const script = document.createElement('script');
            script.id = 'razorpay-script';
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validatePhone(phoneNumber, dialCode)) {
            setPhoneError(true);
            return;
        }
        setPhoneError(false);

        const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;

        if (!razorpayKey) {
            alert("Razorpay Key is missing! Please check your environment variables.");
            return;
        }

        if (!window.Razorpay) {
            alert("Razorpay SDK failed to load. Please check your internet connection.");
            return;
        }

        const fullContact = `${dialCode}${phoneNumber}`;
        console.log('Razorpay prefill contact:', fullContact, '| dialCode:', dialCode, '| phoneNumber:', phoneNumber);

        const isUSD = dialCode !== '+91';
        const finalPrice = isUSD && plan.usdPrice ? plan.usdPrice : plan.discountPrice;
        const currency = isUSD ? "USD" : "INR";

        let planNameId = '';
        if (isUSD) {
            planNameId = plan.usdPlanName || (plan.title?.includes('1 Year') || plan.title?.includes('12 Month') || plan.duration?.includes('1 Year') ? '12m_new_usd' : plan.title?.includes('6 Month') || plan.duration?.includes('6 Month') ? '6m_new_usd' : plan.title?.includes('3 Month') || plan.duration?.includes('3 Month') ? '3m_new_usd' : plan.title);
        } else {
            planNameId = plan.inrPlanName || plan.planName || plan.title;
        }

        try {
            const amountInPaisa = Number(finalPrice) * 100;

            // 1. Create Order from Backend to enable auto-capture
            const orderResponse = await fetch('/.netlify/functions/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: amountInPaisa,
                    currency: currency,
                    notes: {
                        language: language,
                        plan_name: planNameId
                    }
                })
            });
            const orderData = await orderResponse.json();

            if (!orderResponse.ok) {
                alert(`Error creating Razorpay order: ${orderData.error || 'Unknown error'}. Check console for details.`);
                console.error("Create Order Error Details:", orderData);
                return;
            }

            // 2. Open Razorpay Checkout with the generated order_id
            const options = {
                key: razorpayKey,
                amount: amountInPaisa,
                currency: currency,
                order_id: orderData.id, // Passed from backend order creation
                name: "Healthyday",
                description: `${plan.title} Subscription`,
                image: "/logo.webp",
                handler: function (response: any) {
                    setPaymentId(response.razorpay_payment_id);
                    setShowModal(true);
                },
                prefill: {
                    name: "",
                    email: "",
                    contact: fullContact
                },
                notes: {
                    language: language,
                    plan_name: planNameId
                },
                theme: {
                    color: "#004e8c"
                }
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Razorpay Error:", error);
            alert("Something went wrong with the payment gateway.");
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 overflow-x-hidden flex flex-col">
            <SharedHeader />

            <main className="flex-grow pt-24 md:pt-32 pb-16 px-4 md:px-6">
                <div className="max-w-[1200px] mx-auto flex flex-col items-start lg:flex-row lg:items-start lg:gap-8">

                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 lg:mb-0 lg:-ml-12 lg:mt-2 flex-shrink-0 flex items-center justify-center p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                        <ArrowLeft className="w-8 h-8 text-[#0D468B]" strokeWidth={3} />
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
                        {/* Left Column: Image and Benefits */}
                        <div className="order-2 lg:order-1">
                            <div className="mb-8 rounded-[24px] overflow-hidden">
                                <img
                                    src="https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/qm8mh28e2z5ev4.jpeg"
                                    alt="Yoga pose"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <h1 className="text-[28px] md:text-[32px] leading-tight font-bold text-[#0D468B] mb-6 text-center">
                                You've selected the {plan.title}
                            </h1>

                            <h2 className="text-[18px] md:text-[20px] text-[#202020] mb-5 font-medium">
                                Benefits to build strong wellness habits
                            </h2>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <SolidCheckCircle />
                                    <span className="text-[#202020] text-[15px]">Daily Yoga with JAGAN</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <SolidCheckCircle />
                                    <span className="text-[#202020] text-[15px]">
                                        {plan.title.includes('Year') ? '12 Months' : plan.title.replace(" Plan", "")} curated yoga streams (Recorded)
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <SolidCheckCircle />
                                    <span className="text-[#202020] text-[15px]">Face Yoga</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <SolidCheckCircle />
                                    <span className="text-[#202020] text-[15px]">Breathing Mastery</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <SolidCheckCircle />
                                    <span className="text-[#202020] text-[15px]">Diet-Sleep-Yoga Master Class</span>
                                </li>
                                {plan.title !== '3 Months Plan' && (
                                    <li className="flex items-start gap-3">
                                        <SolidCheckCircle />
                                        <span className="text-[#202020] text-[15px]">Monthly Surya Namaskar Challenge</span>
                                    </li>
                                )}
                                <li className="flex items-start gap-3">
                                    <SolidCheckCircle />
                                    <span className="text-[#202020] text-[15px]">WhatsApp Reminders</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <SolidCheckCircle />
                                    <span className="text-[#202020] text-[15px]">Attendance and Community Membership</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right Column: Checkout Form */}
                        <div className="order-1 lg:order-2 lg:pl-4">
                            {/* Plan Card */}
                            <div className="bg-white rounded-[14px] border border-[#0D468B] overflow-hidden mb-6 shadow-sm flex flex-col">
                                <div className="bg-[#0D468B] text-white py-2.5 px-4 flex items-center gap-2">
                                    <BestValueRibbon />
                                    <span className="font-bold text-[15px]">Best Value</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-[20px] font-bold text-[#0D468B] mb-2">{plan.title}</h3>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-[#919191] line-through text-[18px] font-medium decoration-2">
                                            {dialCode !== '+91' && plan.usdOriginalPrice ? `$${plan.usdOriginalPrice}` : `₹${plan.originalPrice}/-`}
                                        </span>
                                        <span className="text-[32px] font-bold text-[#0D468B]">
                                            {dialCode !== '+91' && plan.usdPrice ? `$${plan.usdPrice}` : `₹${plan.discountPrice}/-`}
                                        </span>
                                    </div>
                                    <div className="inline-block bg-[#ff0000] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                                        {plan.discount}
                                    </div>
                                </div>
                            </div>

                            {/* Form Card */}
                            <div className="bg-white rounded-[14px] border border-[#D5D5D5] p-6 mb-8 shadow-sm">
                                <form onSubmit={handleCheckout}>
                                    <div className="mb-6">
                                        <label className="block text-[15px] font-bold text-[#202020] mb-2">
                                            Your WhatsApp Number <span className="text-[#ff0000]">*</span>
                                        </label>
                                        <PhoneInputCustom
                                            value={phoneNumber}
                                            onChange={(phone, code) => {
                                                setPhoneNumber(phone);
                                                setDialCode(code);
                                                setPhoneError(false);
                                            }}
                                            placeholder="Enter Your Whatsapp Number"
                                            required
                                            defaultCountry={isUSDFlow ? "us" : "in"}
                                        />
                                        {phoneError && (
                                            <span className="text-red-500 text-[12px] font-medium mt-1 block">⚠ Please enter a valid mobile number.</span>
                                        )}
                                        {!isUSDFlow && dialCode !== '+91' && !phoneError && (
                                            <span className="text-[#0D468B] text-[13px] font-semibold mt-1.5 block">
                                                ⚠ Pricing changed to international
                                            </span>
                                        )}
                                    </div>

                                    <div className="mb-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                                        <label className="text-[14px] text-[#4a4a4a] whitespace-nowrap">
                                            Select Class Language:
                                        </label>
                                        <div className="flex items-center gap-5">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="language"
                                                    value="Telugu"
                                                    checked={language === 'Telugu'}
                                                    onChange={(e) => setLanguage(e.target.value)}
                                                    className="w-[15px] h-[15px] text-[#0D468B] accent-[#0D468B] cursor-pointer"
                                                />
                                                <span className="text-[#4a4a4a] text-[14px]">తెలుగు</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="language"
                                                    value="English"
                                                    checked={language === 'English'}
                                                    onChange={(e) => setLanguage(e.target.value)}
                                                    className="w-[15px] h-[15px] text-[#0D468B] accent-[#0D468B] cursor-pointer"
                                                />
                                                <span className="text-[#4a4a4a] text-[14px]">English</span>
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-b from-[#ffb93d] to-[#f49c0c] hover:from-[#eebb4d] hover:to-[#e18e0a] text-[#202020] font-bold py-3 rounded-[50px] transition-all duration-300 uppercase text-[15px] shadow-sm tracking-wide"
                                    >
                                        Checkout
                                    </button>
                                </form>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex justify-center md:justify-between px-2 gap-4">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-2">
                                        <SecurePaymentIcon />
                                    </div>
                                    <span className="text-[14px] font-semibold text-[#0D468B] uppercase">SECURE PAYMENT</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-2">
                                        <SslIcon />
                                    </div>
                                    <span className="text-[14px] font-semibold text-[#0D468B] uppercase">SSL ENCRYPTED</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-2">
                                        <TrustedCommerceIcon />
                                    </div>
                                    <span className="text-[14px] font-semibold text-[#0D468B] uppercase leading-tight">TRUSTED<br />COMMERCE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <SharedFooter />

            <StudentDetailsModal
                isOpen={showModal}
                paymentId={paymentId}
                mobile={`${dialCode}${phoneNumber}`}
                onClose={() => setShowModal(false)}
                onSuccess={() => {
                    setShowModal(false);
                    navigate('/thank-you', { state: { language } });
                }}
            />
        </div>
    );
};

export default PlanCheckout;
