import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingCards = () => {
  const navigate = useNavigate();
  const plans = [
    {
      duration: "1 Year Including Diet*",
      price: "2399",
      originalPrice: "5999",
      discount: "Save 60%!",
      isBestValue: true,
      perMonth: "200",
    },
    {
      duration: "6 Months",
      price: "1899",
      originalPrice: "2999",
      discount: "Save 37%!",
      isBestValue: false,
      perMonth: "317",
    },
    {
      duration: "3 Months",
      price: "1399",
      originalPrice: "1499",
      discount: "Save 7%!",
      isBestValue: false,
      perMonth: "466",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-healthyday-navy mb-12">
          Most affordable Subscription Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="relative bg-white border border-gray-200 overflow-visible"
            >
              {plan.isBestValue && (
                <div className="absolute -top-3 left-4 flex items-center gap-1 bg-healthyday-navy text-white px-3 py-1 rounded-full text-xs font-semibold">
                  <Gift className="w-3 h-3" />
                  Best Value
                </div>
              )}
              <CardContent className="p-8 text-center pt-10">
                <h3 className="text-xl font-semibold mb-6 text-healthyday-navy">
                  {plan.duration}
                </h3>

                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="text-lg text-gray-400 line-through">
                    ₹{plan.originalPrice}/-
                  </span>
                  <span className="text-3xl font-bold text-healthyday-navy">
                    ₹{plan.price}/-
                  </span>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-healthyday-orange text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.discount}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-6">
                  Just ₹{plan.perMonth}/month
                </p>

                <Button
                  onClick={() => navigate('/checkout', { state: { plan: { title: plan.duration + " Plan", duration: plan.duration, price: plan.price, discountPrice: plan.price, originalPrice: plan.originalPrice, discount: plan.discount, isBestValue: plan.isBestValue } } })}
                  className="w-full bg-healthyday-orange hover:bg-healthyday-orange/90 text-white font-semibold py-6"
                >
                  JOIN NOW
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
