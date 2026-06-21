import SharedHeader from "@/components/SharedHeader";
import PricingCards from "@/components/PricingCards";
import FeaturesTable from "@/components/FeaturesTable";
import SharedTestimonials from "@/components/SharedTestimonials";
import SharedFooter from "@/components/SharedFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SharedHeader />
      <div className="pt-[80px]">
        <PricingCards />
        <FeaturesTable />
        <SharedTestimonials />
      </div>
      <SharedFooter />
    </div>
  );
};

export default Index;
