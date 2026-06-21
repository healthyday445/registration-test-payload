import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "ANURADHA",
      age: 53,
      city: "TIRUPATI",
      healthyDays: 45,
      quote:
        "Healthyday వల్ల నా జీవితం మారిపోయింది. రోజూ యోగా చేయడం వల్ల నా ఆరోగ్యం మెరుగుపడింది మరియు నా మానసిక శాంతి పెరిగింది.",
      initials: "A",
    },
    {
      name: "VANAJA",
      age: null,
      city: "KADAPA",
      healthyDays: 100,
      quote:
        "I started with the 3-month plan and upgraded to 1 year. The daily classes and tracking feature keep me motivated. Best investment for my health!",
      initials: "V",
    },
    {
      name: "SUDHARANI",
      age: 53,
      city: "GUNTUR",
      healthyDays: 99,
      quote:
        "The 108 Surya Namaskar challenge changed my life. I feel more energetic and focused. The trainers are excellent and very supportive.",
      initials: "S",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-healthyday-navy mb-2">
            Testimonials
          </h2>
          <h5 className="text-healthyday-navy font-bold text-lg mb-4">
            Hear from our Healthyday Heroes
          </h5>
          <p className="text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed italic">
            The testimonials shown here are from real community members.{" "}
            <strong><u>Individual results vary</u></strong> based on consistency, diet, lifestyle, and personal health factors.{" "}
            <strong><u>Results are not typical or guaranteed.</u></strong>{" "}
            Yoga supports overall wellness but does not replace medical care. Please consult your healthcare provider before starting any new program –{" "}
            <strong className="not-italic">
              <a 
                href="https://www.instagram.com/healthydayyoga/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-healthyday-navy hover:underline"
              >
                Check out hundreds of our student wellness journeys in our Instagram
              </a>
            </strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200">
              <CardContent className="p-6 text-center flex flex-col items-center">
                {/* Avatar at top */}
                <Avatar className="w-20 h-20 mb-4 bg-gray-300">
                  <AvatarFallback className="bg-gray-300 text-gray-600 text-2xl font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>

                {/* Name, Age, City */}
                <p className="font-bold text-healthyday-navy text-lg">
                  {testimonial.name}
                  {testimonial.age && <span>, {testimonial.age}</span>}
                </p>
                <p className="text-gray-500 text-sm mb-2">{testimonial.city}</p>

                {/* Healthydays count */}
                <p className="text-healthyday-orange font-bold text-lg mb-4">
                  {testimonial.healthyDays} HEALTHYDAYS
                </p>

                {/* Quote text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Quote icon at bottom */}
                <Quote className="w-8 h-8 text-healthyday-orange mt-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
