'use client';
import { ArrowDown } from "lucide-react";
import { BRAND } from "../data/constants";
import { useState } from "react";
import { ShareButton } from "../share";

export const HeroSection = () => {
    // const [copied, setCopied] = useState(false);
    // const image = "https://res.cloudinary.com/drzdipicj/image/upload/v1756482079/jenteel_hero_gih4p5.jpg";
//     const currentUrl = window.location.href;
//     const shareText = `Hello there, I would like to book a consultation`;
//     const shareLinks = {
//     whatsapp: `https://wa.me/?text=${encodeURIComponent(
//       `${shareText} ${currentUrl}`
//     )}`,
//     telegram: `https://t.me/share/url?url=${encodeURIComponent(
//       currentUrl
//     )}&text=${encodeURIComponent(shareText)}`,
//     twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
//       shareText
//     )}&url=${encodeURIComponent(currentUrl)}`,
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//       currentUrl
//     )}`,
//     instagram: `https://www.instagram.com/`, // Instagram doesn't support direct URL sharing
//     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//       currentUrl
//     )}`,
//   };

//   const handleShare = (platform: string) => {
//     if (platform === "instagram") {
//       // Instagram doesn't support direct URL sharing, so we'll copy the link
//       handleCopyLink();
//       return;
//     }
//     if (platform === "copy") {
//       handleCopyLink();
//       return;
//     }
//     if (platform && shareLinks[platform as keyof typeof shareLinks]) {
//       window.open(
//         shareLinks[platform as keyof typeof shareLinks],
//         "_blank",
//         "width=600,height=400"
//       );
//     }
//   };
//   const handleCopyLink = async () => {
//     try {
//       await navigator.clipboard.writeText(currentUrl);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error("Failed to copy link:", err);
//     }
//   };

    return(
         <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-red-50">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background with modern gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black"></div>
                <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" 
                style={{ 
                    backgroundImage: "url('https://res.cloudinary.com/drzdipicj/image/upload/v1756482079/jenteel_hero_gih4p5.jpg')",
                }}
                ></div>
                
                {/* Modern glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
                
                <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-center mb-8 group">
                        <div className="py-2 hidden md:inline-block rounded-2xl bg-white/10 backdrop-blur-sm border border-orange-400 mr-6 group-hover:scale-110 transition-transform duration-500">
                            <img src="https://res.cloudinary.com/drzdipicj/image/upload/v1756479133/jenteel_logo_hoiqwe.jpg" alt="Jenteel clothing" className="w-25 h-25 rounded-2xl object-contain" />
                        </div>
                        <h1 className="text-6xl md:text-7xl font-semibold  font-light bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent tracking-tight">
                            {BRAND.NAME.split(' ')[0]} <span className="text-orange-700">{BRAND.NAME.split(' ')[1]}</span>
                        </h1>
                    </div>
                
                    <div className="max-w-3xl mx-auto space-y-6 mb-8 md:mb-12">
                        <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
                        {/* Master Tailor • Bespoke Creations */}
                        {BRAND.DESCRIPTION.split(',')[0]} • {BRAND.DESCRIPTION.split(',')[1]}
                        </p>
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
                        Where contemporary craftsmanship meets timeless elegance. Creating exceptional, 
                        made-to-measure garments that define your unique aesthetic.
                        </p>
                    </div>
                
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    
                        <div 
                            className="flex items-center group bg-orange-800 text-white text-xs px-4 py-2.5 font-medium rounded-full shadow-xl">
                            Explore our Collection Below
                        <ArrowDown className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <ShareButton/>
                    </div>
                </div>
            </section>
        </div>
    );
}