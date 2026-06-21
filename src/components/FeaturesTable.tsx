import { Check, X } from "lucide-react";

const FeaturesTable = () => {
  const features = [
    {
      name: "Daily YOGA Classes",
      year: true,
      sixMonths: true,
      threeMonths: true,
    },
    {
      name: "24 Hours Recordings",
      year: true,
      sixMonths: true,
      threeMonths: true,
    },
    {
      name: "Daily Reminder & Tracking",
      year: true,
      sixMonths: true,
      threeMonths: true,
    },
    {
      name: "Monthly 108 Surya Namaskar",
      year: true,
      sixMonths: true,
      threeMonths: false,
    },
    {
      name: "Breath Mastery",
      year: true,
      sixMonths: true,
      threeMonths: false,
    },
    {
      name: "Face YOGA",
      year: true,
      sixMonths: false,
      threeMonths: false,
    },
    {
      name: "Monthly Masterclass",
      year: true,
      sixMonths: false,
      threeMonths: false,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-healthyday-navy mb-8">Overview</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100"
                >
                  <td className="py-4 px-4 text-gray-700 font-medium">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    {feature.year ? (
                      <Check className="w-6 h-6 text-healthyday-navy mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.sixMonths ? (
                      <Check className="w-6 h-6 text-healthyday-navy mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.threeMonths ? (
                      <Check className="w-6 h-6 text-healthyday-navy mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeaturesTable;
