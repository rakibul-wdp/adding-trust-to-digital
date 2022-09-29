import React from 'react';
import Service1 from '../../assets/images/service_1.svg';
import Service2 from '../../assets/images/service_2.svg';
import Service3 from '../../assets/images/service_3.svg';
import Service4 from '../../assets/images/service_4.svg';

const services = [
  {
    id: 1,
    servicesLogo: Service1,
    servicesName: "eCommerce Competitive Analytics",
    servicesText: "Map your brand to the eCommerce landscape to enhance market share with real-time market intelligence.",
    servicesDetails: "Read More...",
  },
  {
    id: 2,
    servicesLogo: Service2,
    servicesName: "Brand Hygiene Protection",
    servicesText: "Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.",
    servicesDetails: "Read More...",
  },
  {
    id: 3,
    servicesLogo: Service3,
    servicesName: "Mobile Identity Solution",
    servicesText: "Seamless identity verification to eliminate risk and fraud at a single go with minimal user input and reducing friction in identity validation",
    servicesDetails: "Read More...",
  },
  {
    id: 4,
    servicesLogo: Service4,
    servicesName: "Ad Traffic Validation",
    servicesText: "mFilterIt’s ad fraud detection solution provides deterministic ad-fraud detection & prevention for both App & Web campaigns and help advertisers save money with better ROI.",
    servicesDetails: "Read More...",
  },
]

const Services = () => {
  return (
    <div className="my-40">
      <h1 className="text-center text-[#1E1E1E] text-[45px] font-light mb-[35px]">Our Services</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {
          services.map((service) => (
            <div key={service.id} className="border-2 rounded-3xl flex flex-col lg:flex-row text-center lg:text-left justify-center items-center gap-2 p-10 py-14">
              <div>
                <img src={service.servicesLogo} alt="" className={`h-[200px] ${service.id === 1 || service.id === 2 ? "w-[300px]" : "w-[400px]"}`} />
              </div>
              <div>
                <h1 className="text-[20px] font-normal leading-[30px] mb-2">
                  {service.servicesName}
                </h1>
                <p className="text-[#1E1E1E] leading-[17px] font-light text-sm mb-2">
                  {service.servicesText}
                </p>
                <p className="text-[#D25412] cursor-pointer">{service.servicesDetails}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Services;
