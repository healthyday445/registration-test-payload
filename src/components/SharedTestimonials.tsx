import { useState } from 'react';

const SharedTestimonials = () => {
    const [testimonialPage, setTestimonialPage] = useState(0);

    const testimonials = [
        {
            name: "KAVITHA, SINGAPORE",
            stats: "106 HEALTHYDAYS",
            text: "I had long-standing neck discomfort that affected my movement and confidence. With consistent yoga focused on posture and alignment, I felt noticeably more comfortable in my body and confident returning to normal daily activities.",
            image: "/testimonial-1.webp"
        },
        {
            name: "ARUNA, VISHAKAPATNAM",
            stats: "103 HEALTHYDAYS",
            text: "After months of consistent yoga practice, I personally felt calmer, more balanced, and in better control of my daily wellbeing. Long-standing discomfort that affected my routine reduced gradually, and yoga became an important part of my life.",
            image: "/testimonial-3.webp"
        },
        {
            name: "DR. UDAY, CHITTOR",
            stats: "67 HEALTHYDAYS",
            text: "I personally noticed visible changes in my flexibility and overall fitness. Movements that once felt difficult slowly became comfortable, and my confidence in my body improved significantly over time.",
            image: "/testimonial-2.webp"
        },
        {
            name: "GAJAVELLI, CHENNAI",
            stats: "271 HEALTHYDAYS",
            text: "At 65, after months of disciplined yoga practice and mindful eating, I felt stronger, more active, and independent in my daily life. Routine activities like climbing stairs became easier, and yoga naturally became part of my lifestyle.",
            image: "/testimonial-4.webp"
        },
        {
            name: "DR. VIJAYAKUMARI, TIRUPATI",
            stats: "81 HEALTHYDAYS",
            text: "For years I struggled with discomfort and poor sleep that affected my confidence and daily routine. With consistent yoga practice, I personally felt more relaxed, balanced, and comfortable, which helped me regain control over my everyday life.",
            image: "/testimonial-5.webp"
        },
        {
            name: "RAJESWARI, GUNTUR",
            stats: "63 HEALTHYDAYS",
            text: "I once struggled with low stamina and discomfort during daily activities. With consistent breath-focused yoga practice, I personally felt more comfortable staying active, climbing stairs, and handling routine movements with confidence.",
            image: "/testimonial-6.webp"
        }
    ];

    const testimonialsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
    const currentTestimonials = testimonials.slice(
        testimonialPage * testimonialsPerPage,
        (testimonialPage + 1) * testimonialsPerPage
    );

    return (
        <section className="bg-white py-8 md:py-16 px-4 md:px-6 overflow-hidden max-w-[100vw]">
            <div className="max-w-6xl mx-auto overflow-hidden w-full">
                <div className="text-center mb-6 md:mb-12 mx-auto px-2" style={{ maxWidth: 'min(800px, 100%)' }}>
                    <h2 className="text-[24px] md:text-[42px] leading-[30px] md:leading-[44px] font-semibold text-[#0D468B] mb-2">
                        Testimonials
                    </h2>
                    <h5 className="text-[18px] leading-[26px] font-semibold text-[#0D468B] mb-4">
                        Hear from our Healthyday Heroes
                    </h5>
                    <p className="text-[12px] leading-[22px] text-[#919191] italic" style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>
                        The testimonials shown here are from real community members.{" "}
                        <span className="underline font-semibold">
                            Individual results vary
                        </span>{" "}
                        based on consistency, diet, lifestyle, and personal health factors.{" "}
                        <span className="underline font-semibold">
                            Results are not typical or guaranteed.
                        </span>{" "}
                        Yoga supports overall wellness but does not replace medical care. Please
                        consult your healthcare provider before starting any new program –{" "}
                        <strong>
                            <a
                                href="https://www.instagram.com/healthydayyoga/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#0D468B] hover:text-[#004e8c]"
                            >
                                Check out hundreds of our student wellness journeys in our Instagram
                            </a>
                        </strong>
                    </p>
                </div>

                {/* Mobile Testimonials (Slider with ALL items) */}
                <div className="flex md:hidden gap-4 mb-8 overflow-x-auto snap-x snap-mandatory px-4 hide-scrollbar pb-4">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white rounded-[30px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center border border-slate-50 relative h-auto min-w-[calc(100vw-32px)] w-[calc(100vw-32px)] snap-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <h4 className="font-bold text-slate-800 text-sm tracking-wide text-center">{t.name}</h4>
                            <p className="text-[10px] font-bold text-[#919191] mb-6">{t.stats}</p>
                            <p className="text-sm text-slate-500 mb-8 leading-relaxed text-center flex-grow">
                                {t.text}
                            </p>
                            <div className="mt-auto">
                                <div className="w-[4.5rem] h-[4.5rem] bg-[#f7f5f4] rounded-full flex items-center justify-center">
                                    <svg aria-hidden="true" className="w-[2.25rem] h-[2.25rem] text-[#feab27]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Testimonials (Paginated Grid) */}
                <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
                    {currentTestimonials.map((t, idx) => (
                        <div key={idx} className="bg-white rounded-[30px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)] p-6 flex flex-col items-center border border-slate-50 relative h-[500px]">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                            <h4 className="font-bold text-slate-800 text-sm tracking-wide text-center">{t.name}</h4>
                            <p className="text-[10px] font-bold text-[#919191] mb-6">{t.stats}</p>
                            <p className="text-sm text-slate-500 mb-8 leading-relaxed text-center flex-grow">
                                {t.text}
                            </p>
                            <div className="mt-auto">
                                <div className="w-[4.5rem] h-[4.5rem] bg-[#f7f5f4] rounded-full flex items-center justify-center">
                                    <svg aria-hidden="true" className="w-[2.25rem] h-[2.25rem] text-[#feab27]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Navigation Dots - one per testimonial */}
                <div className="flex md:hidden justify-center gap-2 mb-0">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === 0
                                ? 'bg-[#ffb129]'
                                : 'bg-[#ffeebb]'
                                }`}
                            aria-label={`Testimonial ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Desktop Navigation Dots - page-based */}
                <div className="hidden md:flex justify-center gap-2 mb-0">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setTestimonialPage(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${testimonialPage === idx
                                ? 'bg-[#ffb129]'
                                : 'bg-[#ffeebb]'
                                }`}
                            aria-label={`Go to testimonial page ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SharedTestimonials;
