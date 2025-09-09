'use client';
import {Shirt, Crown, Sparkles } from "lucide-react";

const services = [
    { icon: Shirt, title: "Custom Tailoring", description: "Bespoke garments tailored to your exact measurements" },
    { icon: Crown, title: "Alterations", description: "Professional alterations for the perfect fit" },
    { icon: Sparkles, title: "Design Consultation", description: "Personal styling and design advice" },
];

export const ServicesSection = () => {
    return(
      // <section className="py-32 px-6 bg-slate-50">
      //       <div className="max-w-7xl mx-auto">
      //       <div className="text-center mb-16 space-y-4">
      //           <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">Services</p>
      //           <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight">
      //           What We Offer
      //           </h2>
      //       </div>

      //     <div className="grid md:grid-cols-3 gap-8">
      //       {services.map((service, index) => (
      //         <div key={index} className="group">
      //           <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-slate-200 hover:-translate-y-2">
      //             <div className="mx-auto w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors duration-300">
      //               <service.icon className="h-8 w-8 text-slate-600 group-hover:text-white transition-colors duration-300" />
      //             </div>
      //             <h3 className="text-2xl font-medium text-slate-900 mb-4">{service.title}</h3>
      //             <p className="text-slate-600 leading-relaxed">{service.description}</p>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>
       <section className="py-32 px-6 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium text-red-600 uppercase tracking-widest">Services</p>
            <h2 className="text-5xl md:text-6xl font-light text-black leading-tight">
              What We <span className="text-orange-600">Offer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 border border-orange-100 hover:border-red-200 hover:-translate-y-2">
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
                    <service.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-black mb-4">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}