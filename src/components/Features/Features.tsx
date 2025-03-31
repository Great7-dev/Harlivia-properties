import banner from "../../assets/Frame 36759.png";
import home1 from "../../assets/House Monocolor Icon 1.png";
import home2 from "../../assets/House Monocolor Icon (1) 1.png";
import home3 from "../../assets/Crane Hook Monocolor 1.png";

export default function Features() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent  transition-colors">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            What we do
          </button>
          <p className="mt-4 text-xl md:text-2xl text-[#1A1A1A] leading-8">
            Whether you want to buy a property, develop one from scratch, or
            find a shortlet that feels like home, we're here to make that
            happen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* We Build from the Ground Up */}
          <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={home3 || "/placeholder.svg"} alt="Building icon" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000]">
                  We Build from the Ground Up
                </h3>
                <p className="mt-2 text-gray-600">
                  We don't just resell properties that others have built, we
                  construct them ourselves. Every brick, every fixture, and
                  every finish is carefully thought out to ensure top-tier
                  quality, durability, and style.
                </p>
              </div>
            </div>
          </div>

          {/* 100% Quality Projects */}
          <div className="bg-[#E2E2E240] rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-full">
              <img
                src={banner}
                alt="100% Quality Projects"
                className="w-[498px] h-[228px] object-cover"
              />
            </div>
          </div>

          {/* We Sell Homes & Investments */}
          <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={home1} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000]">
                  We Sell Homes & Investments
                </h3>
                <p className="mt-2 text-gray-600">
                  Property buying shouldn't feel like a gamble whether you're
                  looking for a dream home or a smart investment. We ensure
                  they're worth your money, time, and future.
                </p>
              </div>
            </div>
          </div>

          {/* We Manage Shortlets */}
          <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={home2} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000]">
                  We Manage Shortlets
                </h3>
                <p className="mt-2 text-gray-600">
                  Whether you're in town for a few days, a few weeks, or longer,
                  our shortlets are designed to offer luxury, convenience, and a
                  touch of luxury without the headaches of hotels or unreliable
                  hosts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
