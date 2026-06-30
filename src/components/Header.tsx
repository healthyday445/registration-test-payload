import { Button } from "@/components/ui/button";
import healthydayLogo from "@/assets/healthyday-logo.webp";

const Header = () => {
  return (
    <header className="bg-white py-3 px-6 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={healthydayLogo}
            alt="Healthyday Logo"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-healthyday-navy">Healthyday</span>
            <span className="text-[8px] text-healthyday-orange font-medium tracking-wider">
              HEALTH, HAPPINESS AND COMMUNITY
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <a href="https://healthyday.co.in/" className="text-healthyday-navy font-medium text-sm hover:text-healthyday-orange transition-colors">
            HOME
          </a>
          <a href="https://yoga.healthyday.co.in/pricing" className="text-healthyday-orange font-medium text-sm">
            PRICING
          </a>
          <a href="https://yoga.healthyday.co.in/" className="text-healthyday-navy font-medium text-sm hover:text-healthyday-orange transition-colors">
            FREE PROGRAMMES
          </a>
          <a href="https://healthyday.co.in/contact-us/" className="text-healthyday-navy font-medium text-sm hover:text-healthyday-orange transition-colors">
            CONTACT US
          </a>
        </nav>

        {/* CTA Button */}
        <a href="https://yoga.healthyday.co.in/">
          <Button className="bg-healthyday-orange hover:bg-healthyday-orange/90 text-white font-semibold px-6 text-sm">
            JOIN FREE CLASSES
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
