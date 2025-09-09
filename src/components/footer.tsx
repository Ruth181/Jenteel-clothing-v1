'use client';
import { BRAND } from "./data/constants";
import { Instagram, MessageCircle, Facebook } from "lucide-react";
import data from './data/data.json';

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks = ({ className = "" }: SocialLinksProps) => {

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-sm text-orange-200 mr-2">Follow us:</span>
      {data.socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 bg-white/10 rounded-full border border-orange-400/20 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
          aria-label={`Follow us on ${social.name}`}
        >
            {social.name.toLowerCase().includes('insta') && <Instagram className="h-4 w-4" />}
            {social.name.toLowerCase().includes('whats') && <MessageCircle className="h-4 w-4" />}
            {social.name.toLowerCase().includes('face') && <Facebook className="h-4 w-4" />}
        </a>
      ))}
    </div>
  );
};


export const Footer = () => {
    return(
        <>
            {/* Footer */}
            <footer className="bg-black text-orange-300 py-8 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center mb-4 md:mb-0">
                        <img src="https://res.cloudinary.com/drzdipicj/image/upload/v1756479133/jenteel_logo_hoiqwe.jpg" alt="Jenteel clothing" className="w-15 h-15 rounded-2xl object-contain" />
                        <span className="text-base font-medium text-white">{BRAND.NAME.split(' ')[0]}</span>&nbsp;
                        <span className="inline-block text-orange-500">{BRAND.NAME.split(' ')[1]}</span>
                        </div>
                        <p className="text-center text-sm md:text-right">&copy; 2024 {BRAND.NAME}. Crafted with passion.</p>
                    </div>
                     {/* Social Media Links */}
                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-orange-800">
                        <SocialLinks/>
                        <div className="mt-4 md:mt-0 text-center">
                            <p className="text-sm text-orange-300 mb-2">Connect with our tailors directly:</p>
                            <div className="flex gap-4 text-sm">
                            <a href="https://wa.me/15551234567" className="hover:text-white transition-colors">
                                WhatsApp: +234 (090) 3005-4104
                            </a>
                            <span className="text-orange-600">|</span>
                            <a href={`mailto:${BRAND.EMAIL}?subject=${BRAND.SUBJECT}&body=${BRAND.BODY}`} className="hover:text-white transition-colors">
                                Email Consultation
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}