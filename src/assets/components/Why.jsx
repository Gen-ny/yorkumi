import { Leaf, Shield, Award } from "lucide-react";

const Why = () => {
  return (
    <section className="py-16 px-4  text-center bg-[#F9F4F0]">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose YORKUMI</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Experience the difference with our carefully curated cosmetic collection
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gray-200 p-4 rounded-full">
            <Leaf className="w-6 h-6 text-gray-700" />
          </div>
          <h3 className="text-lg font-bold">100% Natural</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Made with organic ingredients sourced from sustainable farms worldwide
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gray-200 p-4 rounded-full">
            <Shield className="w-6 h-6 text-gray-700" />
          </div>
          <h3 className="text-lg font-bold">Dermatologist Tested</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Clinically proven formulas safe for all skin types and sensitivities
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-gray-200 p-4 rounded-full">
            <Award className="w-6 h-6 text-gray-700" />
          </div>
          <h3 className="text-lg font-bold">Award Winning</h3>
          <p className="text-gray-600 text-sm max-w-xs">
            Recognized by beauty experts and loved by customers worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;