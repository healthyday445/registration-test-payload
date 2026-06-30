import React, { useState, useRef, useEffect } from 'react';

interface Country {
    name: string;
    code: string;
    dialCode: string;
}

const countries: Country[] = [
    { name: "India (भारत)", code: "in", dialCode: "+91" },
    { name: "Afghanistan (افغانستان)", code: "af", dialCode: "+93" },
    { name: "Albania (Shqipëri)", code: "al", dialCode: "+355" },
    { name: "Algeria (الجزائر)", code: "dz", dialCode: "+213" },
    { name: "American Samoa", code: "as", dialCode: "+1" },
    { name: "Andorra", code: "ad", dialCode: "+376" },
    { name: "Angola", code: "ao", dialCode: "+244" },
    { name: "Argentina", code: "ar", dialCode: "+54" },
    { name: "Armenia (Հայաստան)", code: "am", dialCode: "+374" },
    { name: "Australia", code: "au", dialCode: "+61" },
    { name: "Austria (Österreich)", code: "at", dialCode: "+43" },
    { name: "Azerbaijan (Azərbaycan)", code: "az", dialCode: "+994" },
    { name: "Bahrain (البحرين)", code: "bh", dialCode: "+973" },
    { name: "Bangladesh (বাংলাদেশ)", code: "bd", dialCode: "+880" },
    { name: "Belarus (Беларусь)", code: "by", dialCode: "+375" },
    { name: "Belgium (België)", code: "be", dialCode: "+32" },
    { name: "Bhutan (འབྲུག)", code: "bt", dialCode: "+975" },
    { name: "Bolivia", code: "bo", dialCode: "+591" },
    { name: "Brazil (Brasil)", code: "br", dialCode: "+55" },
    { name: "Brunei", code: "bn", dialCode: "+673" },
    { name: "Bulgaria (България)", code: "bg", dialCode: "+359" },
    { name: "Cambodia (កម្ពុជា)", code: "kh", dialCode: "+855" },
    { name: "Cameroon (Cameroun)", code: "cm", dialCode: "+237" },
    { name: "Canada", code: "ca", dialCode: "+1" },
    { name: "Chile", code: "cl", dialCode: "+56" },
    { name: "China (中国)", code: "cn", dialCode: "+86" },
    { name: "Colombia", code: "co", dialCode: "+57" },
    { name: "Costa Rica", code: "cr", dialCode: "+506" },
    { name: "Croatia (Hrvatska)", code: "hr", dialCode: "+385" },
    { name: "Cuba", code: "cu", dialCode: "+53" },
    { name: "Cyprus (Κύπρος)", code: "cy", dialCode: "+357" },
    { name: "Czech Republic (Česká republika)", code: "cz", dialCode: "+420" },
    { name: "Denmark (Danmark)", code: "dk", dialCode: "+45" },
    { name: "Ecuador", code: "ec", dialCode: "+593" },
    { name: "Egypt (مصر)", code: "eg", dialCode: "+20" },
    { name: "Ethiopia", code: "et", dialCode: "+251" },
    { name: "Finland (Suomi)", code: "fi", dialCode: "+358" },
    { name: "France", code: "fr", dialCode: "+33" },
    { name: "Georgia (საქართველო)", code: "ge", dialCode: "+995" },
    { name: "Germany (Deutschland)", code: "de", dialCode: "+49" },
    { name: "Ghana (Gaana)", code: "gh", dialCode: "+233" },
    { name: "Greece (Ελλάδα)", code: "gr", dialCode: "+30" },
    { name: "Hong Kong (香港)", code: "hk", dialCode: "+852" },
    { name: "Hungary (Magyarország)", code: "hu", dialCode: "+36" },
    { name: "Iceland (Ísland)", code: "is", dialCode: "+354" },
    { name: "Indonesia", code: "id", dialCode: "+62" },
    { name: "Iran (ایران)", code: "ir", dialCode: "+98" },
    { name: "Iraq (العراق)", code: "iq", dialCode: "+964" },
    { name: "Ireland", code: "ie", dialCode: "+353" },
    { name: "Israel (ישראל)", code: "il", dialCode: "+972" },
    { name: "Italy (Italia)", code: "it", dialCode: "+39" },
    { name: "Jamaica", code: "jm", dialCode: "+1" },
    { name: "Japan (日本)", code: "jp", dialCode: "+81" },
    { name: "Jordan (الأردن)", code: "jo", dialCode: "+962" },
    { name: "Kazakhstan (Казахстан)", code: "kz", dialCode: "+7" },
    { name: "Kenya", code: "ke", dialCode: "+254" },
    { name: "Kuwait (الكويت)", code: "kw", dialCode: "+965" },
    { name: "Laos (ລາວ)", code: "la", dialCode: "+856" },
    { name: "Lebanon (لبنان)", code: "lb", dialCode: "+961" },
    { name: "Libya (ليبيا)", code: "ly", dialCode: "+218" },
    { name: "Malaysia", code: "my", dialCode: "+60" },
    { name: "Maldives", code: "mv", dialCode: "+960" },
    { name: "Mexico (México)", code: "mx", dialCode: "+52" },
    { name: "Mongolia (Монгол)", code: "mn", dialCode: "+976" },
    { name: "Morocco (المغرب)", code: "ma", dialCode: "+212" },
    { name: "Myanmar (Burma)", code: "mm", dialCode: "+95" },
    { name: "Nepal (नेपाल)", code: "np", dialCode: "+977" },
    { name: "Netherlands (Nederland)", code: "nl", dialCode: "+31" },
    { name: "New Zealand", code: "nz", dialCode: "+64" },
    { name: "Nigeria", code: "ng", dialCode: "+234" },
    { name: "North Korea (조선)", code: "kp", dialCode: "+850" },
    { name: "Norway (Norge)", code: "no", dialCode: "+47" },
    { name: "Oman (عُمان)", code: "om", dialCode: "+968" },
    { name: "Pakistan (پاکستان)", code: "pk", dialCode: "+92" },
    { name: "Palestine (فلسطين)", code: "ps", dialCode: "+970" },
    { name: "Panama (Panamá)", code: "pa", dialCode: "+507" },
    { name: "Peru (Perú)", code: "pe", dialCode: "+51" },
    { name: "Philippines", code: "ph", dialCode: "+63" },
    { name: "Poland (Polska)", code: "pl", dialCode: "+48" },
    { name: "Portugal", code: "pt", dialCode: "+351" },
    { name: "Qatar (قطر)", code: "qa", dialCode: "+974" },
    { name: "Romania (România)", code: "ro", dialCode: "+40" },
    { name: "Russia (Россия)", code: "ru", dialCode: "+7" },
    { name: "Saudi Arabia (السعودية)", code: "sa", dialCode: "+966" },
    { name: "Singapore", code: "sg", dialCode: "+65" },
    { name: "South Africa", code: "za", dialCode: "+27" },
    { name: "South Korea (대한민국)", code: "kr", dialCode: "+82" },
    { name: "Spain (España)", code: "es", dialCode: "+34" },
    { name: "Sri Lanka (ශ්‍රී ලංකාව)", code: "lk", dialCode: "+94" },
    { name: "Sudan (السودان)", code: "sd", dialCode: "+249" },
    { name: "Sweden (Sverige)", code: "se", dialCode: "+46" },
    { name: "Switzerland (Schweiz)", code: "ch", dialCode: "+41" },
    { name: "Syria (سوريا)", code: "sy", dialCode: "+963" },
    { name: "Taiwan (台灣)", code: "tw", dialCode: "+886" },
    { name: "Tanzania", code: "tz", dialCode: "+255" },
    { name: "Thailand (ไทย)", code: "th", dialCode: "+66" },
    { name: "Turkey (Türkiye)", code: "tr", dialCode: "+90" },
    { name: "Uganda", code: "ug", dialCode: "+256" },
    { name: "Ukraine (Україна)", code: "ua", dialCode: "+380" },
    { name: "United Arab Emirates (الإمارات)", code: "ae", dialCode: "+971" },
    { name: "United Kingdom", code: "gb", dialCode: "+44" },
    { name: "United States", code: "us", dialCode: "+1" },
    { name: "Uruguay", code: "uy", dialCode: "+598" },
    { name: "Uzbekistan (Oʻzbekiston)", code: "uz", dialCode: "+998" },
    { name: "Venezuela", code: "ve", dialCode: "+58" },
    { name: "Vietnam (Việt Nam)", code: "vn", dialCode: "+84" },
    { name: "Yemen (اليمن)", code: "ye", dialCode: "+967" },
    { name: "Zambia", code: "zm", dialCode: "+260" },
    { name: "Zimbabwe", code: "zw", dialCode: "+263" },
];

interface PhoneInputCustomProps {
    value: string;
    onChange: (phone: string, dialCode: string) => void;
    onFocus?: () => void;
    placeholder?: string;
    required?: boolean;
    defaultCountry?: string;
}

const PhoneInputCustom: React.FC<PhoneInputCustomProps> = ({
    value,
    onChange,
    onFocus,
    placeholder = 'Enter Your Whatsapp Number',
    required = false,
    defaultCountry = 'in',
}) => {
    const [selectedCountry, setSelectedCountry] = useState<Country>(
        countries.find(c => c.code === defaultCountry) || countries[0]
    );
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearch('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && searchRef.current) {
            searchRef.current.focus();
        }
    }, [isOpen]);

    const filteredCountries = countries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.dialCode.includes(search)
    );

    const handleSelectCountry = (country: Country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        setSearch('');
        onChange(value, country.dialCode);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex items-center border border-[#D5D5D5] rounded-md h-[48px] focus-within:ring-1 focus-within:ring-[#0D468B] focus-within:border-[#0D468B] transition-shadow bg-white overflow-hidden">
                {/* Country selector */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-1.5 pl-3 pr-2 h-full cursor-pointer select-none flex-shrink-0 hover:bg-[#f5f5f5] transition-colors"
                >
                    <img
                        src={`https://flagcdn.com/w20/${selectedCountry.code}.png`}
                        alt={selectedCountry.code.toUpperCase()}
                        className="w-[20px] h-[15px] object-cover rounded-[2px]"
                    />
                    <span className="text-[15px] text-[#4a4a4a] font-medium">{selectedCountry.dialCode}</span>
                    <span className="text-[8px] text-[#999] ml-0.5">▾</span>
                </button>

                {/* Phone number input */}
                <input
                    type="tel"
                    value={value}
                    onChange={e => {
                        const val = e.target.value.replace(/\D/g, '');
                        onChange(val, selectedCountry.dialCode);
                    }}
                    onFocus={onFocus}
                    placeholder={placeholder}
                    required={required}
                    className="flex-1 h-full border-none outline-none text-[16px] text-[#4a4a4a] placeholder:text-[#999] bg-transparent"
                />
            </div>

            {/* Country dropdown */}
            {isOpen && (
                <div className="absolute top-[50px] left-0 w-full bg-white border border-[#D5D5D5] rounded-md shadow-lg z-50 max-h-[250px] overflow-hidden flex flex-col">
                    {/* Search input */}
                    <div className="p-2 border-b border-[#eee]">
                        <input
                            ref={searchRef}
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search country..."
                            className="w-full px-3 py-1.5 text-[16px] border border-[#D5D5D5] rounded outline-none focus:border-[#0D468B]"
                        />
                    </div>

                    {/* Country list */}
                    <ul className="overflow-y-auto flex-1">
                        {filteredCountries.map((country) => (
                            <li
                                key={country.code}
                                onClick={() => handleSelectCountry(country)}
                                className={`flex items-center gap-2.5 px-3 py-2 cursor-pointer text-[14px] hover:bg-[#e8f0fe] transition-colors ${country.code === selectedCountry.code ? 'bg-[#e8f0fe] font-medium' : ''
                                    }`}
                            >
                                <img
                                    src={`https://flagcdn.com/w20/${country.code}.png`}
                                    alt={country.code.toUpperCase()}
                                    className="w-[20px] h-[15px] object-cover rounded-[2px]"
                                />
                                <span className="text-[#333] flex-1">{country.name}</span>
                                <span className="text-[#888]">{country.dialCode}</span>
                            </li>
                        ))}
                        {filteredCountries.length === 0 && (
                            <li className="px-3 py-3 text-[14px] text-[#999] text-center">No countries found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PhoneInputCustom;
