'use client'

import { Share2, Instagram, MessageCircle, Facebook } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import data from './data/data.json';
import { FC } from "react";

type ShareButtonProps = {
 useText?: boolean;
 ImgUrl ?: string;
 className ?: string;
};
export const ShareButton : FC<ShareButtonProps> = ({useText = true, ImgUrl = "", className}) => {
  const message = encodeURIComponent(`Hi 👋there, I want to inquire about this design => ${ImgUrl}`);

const getSocialHref = (platform: string, baseHref: string) => {
  if (platform === "whatsapp" || platform === "facebook") {
    return `${baseHref}${ImgUrl ? `?text=${message}` : ""}`;
  }

  if (platform === "instagram") {
    return baseHref; // no ?text support
  }

  return baseHref;
};

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" 
        className={className ? className : "bg-black border- border-white/30 text-orange-700 hover:bg-white/10 px-8 py-4 text-xs font-medium rounded-full backdrop-blur-sm"}>
          {useText ? "Schedule Consultation" : <Share2 className="h-4 w-4" />}    
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {data.socialLinks.map((social) => (
          <DropdownMenuItem key={social.name} asChild>
           
            <a
              href={getSocialHref(social.name.toLowerCase(), social.href)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 cursor-pointer"
            >
             {social.name.toLowerCase().includes('insta') && <Instagram className="h-4 w-4" />}
             {social.name.toLowerCase().includes('whats') && <MessageCircle className="h-4 w-4" />}
             {social.name.toLowerCase().includes('face') && <Facebook className="h-4 w-4" />}
              {social.label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};