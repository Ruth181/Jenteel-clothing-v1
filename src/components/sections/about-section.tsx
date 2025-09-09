'use client';

import { Star } from "lucide-react";
import { BRAND } from "../data/constants";
import data from '../data/data.json'

export const AboutSection = () => {
    return(
        <section className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">About <span className="text-black font-semibold">{BRAND.NAME.split(' ')[0]}</span>&nbsp;{BRAND.NAME.split(' ')[1]}</p>
                            <h2 className="text-5xl md:text-6xl font-light text-slate-900 leading-tight">
                           <span className="text-orange-700">Master</span> of &nbsp;
                            <span className="inline-block">the Craft</span>
                            </h2>
                        </div>
                    
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            {data.about.paragraphs.map((paragraph : string, index: number) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center space-y-2">
                            <div className="text-4xl font-light text-slate-900">{data.about.highlights.clientsServed}+</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">Valued Clients</div>
                            </div>
                            <div className="text-center space-y-2">
                            <div className="text-4xl font-light text-slate-900">{data.about.highlights.yearsInBusiness}+</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">Years of Mastery</div>
                            </div>
                            <div className="text-center space-y-2">
                            <div className="text-4xl font-light text-slate-900">{data.about.highlights.uniqueCreations}+</div>
                            <div className="text-sm text-slate-500 uppercase tracking-wide">Unique Creations</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <img 
                                src="https://res.cloudinary.com/drzdipicj/image/upload/v1756481988/about_jenteel_e0v53u.jpg" 
                                alt="Master tailor at work"
                                className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
                            />
                        <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-2xl shadow-xl">
                            <Star className="h-8 w-8 text-slate-900" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}