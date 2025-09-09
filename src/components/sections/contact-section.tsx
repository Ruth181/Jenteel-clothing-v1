'use client';

import { Mail, MapPin, Phone } from "lucide-react";
import data from '../data/data.json';
import { ShareButton } from "../share";
import { BRAND } from "../data/constants";

export const ContactSection = () => {   
    return(
        <section className="py-32 px-6  bg-gradient-to-br from-black via-orange-800 to-black text-white">
            <div className="max-w-5xl mx-auto text-center">
                <div className="space-y-6 mb-16">
                    <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">Contact</p>
                    <h2 className="text-5xl md:text-6xl font-light leading-tight">
                    Let&apos;s Create Something
                    <span className="block">Extraordinary</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Ready to bring your vision to life? Let&apos;s discuss your perfect garment ?
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="group">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <Phone className="h-8 w-8 text-white mx-auto mb-4" />
                        <h3 className="font-medium text-lg mb-2">Call Us</h3>
                        <p className="text-slate-300">{data.contact.phone}</p>
                    </div>
                    </div>
                    <div className="group">
                    <a href={`mailto:${BRAND.EMAIL}?subject=${BRAND.SUBJECT}&body=${BRAND.BODY}`}>
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <Mail className="h-8 w-8 text-white mx-auto mb-4" />
                            <h3 className="font-medium text-lg mb-2">Email</h3>
                            <p className="text-slate-300">{data.contact.email}</p>
                        </div>
                    </a>
                    </div>
                    <div className="group">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <MapPin className="h-8 w-8 text-white mx-auto mb-4" />
                        <h3 className="font-medium text-lg mb-2">Address</h3>
                        <p className="text-slate-300">{data.contact.address}</p>
                    </div>
                    </div>
                </div>

                {/* <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-slate-100 px-8 py-4 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105">
                    Schedule Consultation
                </Button> */}
                <ShareButton/>
            </div>
      </section>
    );
}