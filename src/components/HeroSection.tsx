import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ECardSettings } from '../types';
import { ScratchCardSection } from './ScratchCardSection';
import { MoveDown, MapPin, Settings, Instagram, MessageCircle, Sparkles, Pencil } from 'lucide-react';

interface Props {
  onOpenAdmin?: () => void;
  onOpenCreateYours?: () => void;
  onPauseMusic?: () => void;
  settings: ECardSettings;
  key?: string;
}

export function HeroSection({ settings, onOpenAdmin, onOpenCreateYours, onPauseMusic }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative w-full h-full min-h-full overflow-y-auto"
      style={{ backgroundColor: settings.sectionsBgColor || '#fdf2f8' }}
    >
      <div className="w-full flex flex-col items-center">
        {/* Hero Text Section (Centered for all phones and previews) */}
        <div 
          className="relative w-full min-h-[100dvh] min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center overflow-hidden shrink-0 bg-cover bg-center"
          style={{
            backgroundImage: settings.heroImageUrl ? `url(${settings.heroImageUrl})` : 'none',
          }}
        >
          {/* Text Elements */}
          <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto z-10 text-[#7a103c] my-auto">
            {settings.ganeshaIconUrl && (
              <img 
                src={settings.ganeshaIconUrl} 
                alt="Ganesha Icon" 
                className="h-16 sm:h-20 md:h-26 lg:h-30 w-auto object-contain drop-shadow-md mb-2 md:mb-3"
                referrerPolicy="no-referrer"
              />
            )}
            <p className="font-serif text-sm sm:text-base md:text-xl tracking-widest text-[#8a1c47] mb-2 md:mb-3 font-bold drop-shadow-xs">
              || Shree Ganeshaya Namah ||
            </p>

            <p className="font-serif text-sm sm:text-base md:text-lg leading-snug max-w-[320px] md:max-w-xl mx-auto mb-2.5 sm:mb-3 md:mb-4 whitespace-pre-wrap text-[#7a103c] font-bold">
              {settings.heroTopText}
            </p>

            <div className="flex flex-col items-center w-full">
              <h1 className="font-['Great_Vibes',cursive] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight py-1 text-[#7a103c] drop-shadow-sm whitespace-pre-wrap font-bold tracking-wide">
                {settings.heroGroomName}
              </h1>
              <p className="font-serif text-xs sm:text-sm md:text-base tracking-wide mt-0.5 whitespace-pre-wrap text-[#7a103c] font-medium leading-relaxed max-w-sm md:max-w-lg">
                {settings.heroGroomParents}
              </p>
            </div>

            <p className="font-serif text-base sm:text-lg md:text-2xl italic my-2 md:my-3 text-[#8a1c47] font-bold">
              {settings.heroMiddleText || 'with'}
            </p>

            <div className="flex flex-col items-center w-full">
              <h1 className="font-['Great_Vibes',cursive] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight py-1 text-[#7a103c] drop-shadow-sm whitespace-pre-wrap font-bold tracking-wide">
                {settings.heroBrideName}
              </h1>
              <p className="font-serif text-xs sm:text-sm md:text-base tracking-wide mt-0.5 whitespace-pre-wrap text-[#7a103c] font-medium leading-relaxed max-w-sm md:max-w-lg">
                {settings.heroBrideParents}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full flex flex-col items-center justify-center py-6 gap-2"
        >
          <span className="text-xs tracking-widest text-[#8a1c47] uppercase font-serif font-bold">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <MoveDown className="w-5 h-5 text-[#8a1c47]" strokeWidth={2} />
          </motion.div>
        </motion.div>

        {/* Dedicated Invitation Message Section */}
        <div className="w-full py-16 px-6 flex flex-col items-center justify-center text-center bg-[#FAF5EA] border-y border-[#C9A15A]/20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl flex flex-col items-center"
          >
            <div className="text-[#C9A15A] mb-3">
              <span className="font-serif text-lg flex items-center opacity-70">--- <span className="mx-2 text-xl">✿</span> ---</span>
            </div>
            <p className="font-serif text-base md:text-xl lg:text-2xl leading-relaxed text-[#7a103c] italic max-w-xl font-medium">
              "{settings.heroBottomText || 'We cordially invite you to the wedding celebration organised on this auspicious occasion.'}"
            </p>
            <div className="text-[#C9A15A] mt-3 rotate-180">
              <span className="font-serif text-lg flex items-center opacity-70">--- <span className="mx-2 text-xl">✿</span> ---</span>
            </div>
          </motion.div>
        </div>

        {/* Scratch Card Section */}
        <ScratchCardSection targetDate={settings.targetDate} settings={settings} />

        
        {/* Events Schedule Section */}
        {settings.eventDetails && settings.eventDetails.length > 0 && (
          <div id="events-section" className="w-full py-20 px-6 flex flex-col items-center relative bg-[#FAF5EA]">
            <div className="mb-16 text-center flex flex-col items-center">
              <div className="text-[#C9A15A] mb-4 opacity-70">
                <span className="font-serif text-lg flex items-center opacity-70">--- <span className="mx-2 text-xl">✿</span> ---</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-['Great_Vibes',cursive] text-[#8D2342] drop-shadow-sm">
                Events Schedule
              </h2>
              <div className="text-[#C9A15A] mt-4 opacity-70 rotate-180">
                <span className="font-serif text-lg flex items-center opacity-70">--- <span className="mx-2 text-xl">✿</span> ---</span>
              </div>
            </div>

            <div className="w-full max-w-4xl flex flex-col gap-8">
              {settings.eventDetails.map((event, index) => (
                <motion.div
                  key={event.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full relative aspect-[9/16] min-h-[640px] sm:min-h-0 sm:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl border-[3px] border-[#FAF5EA] ring-1 ring-[#C9A15A]/30 bg-stone-900 group"
                >
                  {/* Background Image */}
                  <img
                    src={event.imageUrl}
                    alt={event.heading}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/1920x1080/064e3b/d1fae5?text=Invalid+Image+URL';
                    }}
                  />
                  {/* Dark Overlay for readability */}
                  <div className="absolute inset-0 bg-black/45 sm:bg-gradient-to-r sm:from-black/75 sm:via-black/50 sm:to-transparent pointer-events-none"></div>
                  
                  {/* Text Content (Centered in the upper portion above caricature on mobile, left-aligned on desktop) */}
                  <div className="absolute top-0 left-0 right-0 bottom-[34%] sm:bottom-0 sm:top-0 sm:w-1/2 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-5 pb-2 sm:pt-0 sm:items-start sm:text-left sm:pl-12 md:pl-16">
                    <h3 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-['Great_Vibes',cursive] text-[#FAF5EA] leading-tight mb-1.5 sm:mb-2 drop-shadow-lg px-2 max-w-full tracking-wide">
                      {event.heading}
                    </h3>
                    {event.showDescription !== false && event.description && (
                      <p className="font-serif italic text-[#FAF5EA]/95 mb-2.5 sm:mb-3 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md max-w-[310px] sm:max-w-md line-clamp-2 sm:line-clamp-none">
                        "{event.description}"
                      </p>
                    )}
                    {(event.showDate !== false || event.showTime !== false || event.showVenue !== false) && (
                       <div className="w-14 sm:w-16 h-px bg-[#FAF5EA]/60 mb-2.5 sm:mb-3 md:ml-0" />
                    )}
                    
                    {event.showDate !== false && event.date && (
                      <div className="mb-1.5 sm:mb-2.5 w-full">
                         <div className="inline-block mb-0.5">
                           <p className="font-serif tracking-[0.2em] uppercase text-xs sm:text-sm font-bold drop-shadow-md" style={{ color: event.detailsColor && event.detailsColor !== '#ff0000' ? event.detailsColor : '#E8D28A' }}>DATE</p>
                         </div>
                         <p className="font-serif tracking-wide text-[#FAF5EA] text-sm sm:text-base md:text-lg drop-shadow-md font-medium leading-snug">{event.date}</p>
                      </div>
                    )}
                    {event.showTime !== false && event.time && (
                      <div className="mb-1.5 sm:mb-2.5 w-full">
                         <div className="inline-block mb-0.5">
                           <p className="font-serif tracking-[0.2em] uppercase text-xs sm:text-sm font-bold drop-shadow-md" style={{ color: event.detailsColor && event.detailsColor !== '#ff0000' ? event.detailsColor : '#E8D28A' }}>TIME</p>
                         </div>
                         <p className="font-serif tracking-wide text-[#FAF5EA] text-sm sm:text-base md:text-lg drop-shadow-md font-medium leading-snug">{event.time}</p>
                      </div>
                    )}
                    {event.showVenue !== false && event.venue && (
                      <div className="mb-2 sm:mb-3 w-full">
                         <div className="inline-block mb-0.5">
                           <p className="font-serif tracking-[0.2em] uppercase text-xs sm:text-sm font-bold drop-shadow-md" style={{ color: event.detailsColor && event.detailsColor !== '#ff0000' ? event.detailsColor : '#E8D28A' }}>VENUE</p>
                         </div>
                         <p className="font-serif tracking-wide text-[#FAF5EA] text-sm sm:text-base md:text-lg drop-shadow-md font-medium leading-snug">{event.venue}</p>
                      </div>
                    )}
                    {Boolean(
                      event.venue &&
                      event.venue.trim().length > 0 &&
                      event.showVenue !== false &&
                      event.directionUrl &&
                      event.directionUrl.trim().length > 0
                    ) && (
                      <a
                        href={event.directionUrl.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onPauseMusic?.()}
                        className="mt-1.5 inline-flex items-center gap-2 px-5 py-1.5 bg-black/25 hover:bg-black/40 border border-[#FAF5EA]/80 hover:border-[#FAF5EA] text-[#FAF5EA] rounded-full text-xs sm:text-sm font-serif tracking-widest uppercase transition-all shadow-md hover:scale-105 backdrop-blur-sm"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#C9A15A]" />
                        <span>Get Direction</span>
                      </a>
                    )}
                  </div>

                  {/* Caricature */}
                  {event.showCaricature && event.caricatureUrl && (
                    <>
                      {/* Mobile Caricature (Equal size, centered, positioned at bottom of event background) */}
                      <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute z-20 pointer-events-none origin-bottom sm:hidden flex items-end justify-center left-1/2 -translate-x-1/2 bottom-0 w-full h-[33%] max-h-[220px]"
                      >
                        <img 
                          src={event.caricatureUrl} 
                          alt="Caricature overlay" 
                          className="h-full w-auto max-w-[62%] object-contain object-bottom drop-shadow-2xl" 
                        />
                      </motion.div>

                      {/* Desktop Caricature (Auto-fitted to 16:9 on the right) */}
                      <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute z-20 pointer-events-none origin-bottom hidden sm:flex items-end justify-center right-4 md:right-8 bottom-0 w-1/2 h-[95%]"
                      >
                        <img 
                          src={event.caricatureUrl} 
                          alt="Caricature overlay" 
                          className="w-auto h-full object-contain drop-shadow-2xl object-bottom" 
                        />
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Invitation Message Section */}
        <div className="w-full py-32 px-6 flex flex-col items-center justify-center text-center bg-[#DCE8D3]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl flex flex-col items-center"
          >
            <div className="text-[#C9A15A]/60 mb-8">
              <span className="font-serif text-lg flex items-center opacity-70">--- <span className="mx-2 text-xl">✿</span> ---</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-['Great_Vibes',cursive] text-[#8D2342] mb-6 leading-relaxed">
              {settings.invitationMessageHeading || 'Awaiting Your Noble Presence'}
            </h3>
            <p className="font-serif italic text-lg md:text-xl text-[#6B5A51] leading-relaxed max-w-sm">
              {settings.invitationMessageBody || 'Because meeting two souls requires twice the joy — and you!'}
            </p>
            <div className="text-[#C9A15A]/60 mt-8 rotate-180">
              <span className="font-serif text-lg flex items-center opacity-70">--- <span className="mx-2 text-xl">✿</span> ---</span>
            </div>
          </motion.div>
        </div>

        {/* Venue Section */}
        <div id="venue-section" className="w-full py-28 px-6 flex flex-col items-center text-center bg-[#DCE8D3]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl flex flex-col items-center"
          >
            <p className="font-serif tracking-[0.25em] text-[#8D2342] text-[10px] md:text-xs uppercase font-bold mb-5">
              {settings.mapSubHeading || 'VENUE'}
            </p>
            <h3 className="text-5xl md:text-6xl font-['Great_Vibes',cursive] text-[#8D2342] mb-8">
              {settings.mapHeading || 'Where We Celebrate'}
            </h3>
            <p className="font-serif text-lg md:text-xl text-[#6B5A51] mb-12 max-w-sm leading-relaxed">
              {settings.mapAddress || 'The Vasdaa Grand Near Lacchiwala National Park Dehradun'}
            </p>
            
            {settings.showMap !== false && (
              <div className="w-full rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(141,35,66,0.15)] border border-[#C9A15A]/30 aspect-square md:aspect-video relative mb-12 bg-[#F3EBE1]">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src={"https://maps.google.com/maps?q=" + encodeURIComponent(settings.mapAddress || 'The Vasdaa Grand Near Lacchiwala National Park Dehradun') + "&t=&z=14&ie=UTF8&iwloc=&output=embed"}
                  title="Event Location Map"
                  className="absolute top-0 left-0 w-full h-full grayscale-[20%] sepia-[10%]"
                ></iframe>
              </div>
            )}
            
            {Boolean(
              (settings.googleMapUrl || (settings.mapAddress && settings.mapAddress.trim().length > 0)) &&
              Boolean((settings.mapAddress || '').trim().length > 0 || settings.googleMapUrl)
            ) && (
              <a
                href={settings.googleMapUrl || "https://share.google/wmtLIllz6B4AahbYN"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onPauseMusic?.()}
                className="px-10 py-4 bg-[#8D2342] hover:bg-[#721c35] text-[#FAF5EA] rounded-full font-serif tracking-[0.15em] shadow-[0_8px_25px_-8px_rgba(141,35,66,0.6)] hover:shadow-[0_8px_30px_-5px_rgba(141,35,66,0.5)] hover:scale-[1.02] transition-all text-xs sm:text-sm uppercase font-bold flex items-center gap-3 border border-[#C9A15A]/20 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#C9A15A]" />
                Get Directions
              </a>
            )}
          </motion.div>
        </div>

        {/* Footer Section */}
        <div className="w-full py-28 px-6 flex flex-col items-center justify-center text-center bg-[#3B291F]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full flex flex-col items-center"
          >
            <p className="font-serif tracking-[0.25em] text-[#C9A15A] text-[10px] md:text-xs uppercase font-bold mb-8">
              {settings.footerInviteHeading || 'WITH LOVE'}
            </p>
            <h2 className="text-2xl md:text-3xl font-serif text-[#FAF5EA] mb-10 leading-tight max-w-lg tracking-[0.15em] uppercase font-medium">
              {settings.footerInviteNames || 'KARAN & SAPNA'}
            </h2>
            
            <div className="text-[#C9A15A]/60 mb-10">
              <span className="font-serif text-lg flex items-center opacity-70">--- <span className="mx-2 text-xl">✿</span> ---</span>
            </div>
            
            <p className="font-serif text-[#FAF5EA]/90 text-sm md:text-base tracking-[0.2em] uppercase mb-4">
              {settings.footerInviteDate || '22nd November 2026'}
            </p>
            <p className="font-serif tracking-[0.15em] text-[#C9A15A] text-[11px] md:text-xs uppercase font-semibold">
              {settings.footerHashtag || '#ARJUNWEDSANANYA'}
            </p>
          </motion.div>
        </div>

        {/* Bottom Line & Credit */}
        <div className="w-full flex flex-col items-center justify-center pb-8 pt-4 bg-[#3B291F] relative z-10 border-t border-[#C9A15A]/20">
          {/* Create Yours Button (Fixed at the end of website) */}
          {settings.showCreateYoursButton !== false && (
            <div className="w-full flex flex-col items-center justify-center pt-2 pb-6 px-4">
              <button
                type="button"
                onClick={() => {
                  if (onOpenCreateYours) {
                    onOpenCreateYours();
                  } else if (onOpenAdmin) {
                    onOpenAdmin();
                  }
                }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#C9A15A] via-[#E8D28A] to-[#C9A15A] text-[#3B291F] rounded-full font-serif text-sm md:text-base font-bold tracking-wider uppercase shadow-[0_4px_20px_rgba(201,161,90,0.35)] hover:shadow-[0_6px_28px_rgba(201,161,90,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#FAF5EA]/60 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-[#3B291F]/15 flex items-center justify-center text-[#3B291F] shrink-0">
                  <Pencil className="w-3 h-3 stroke-[2.5]" />
                </div>
                <span>{settings.createYoursButtonText || 'Create yours'}</span>
                <Sparkles className="w-4 h-4 text-[#3B291F]" />
              </button>
              <p className="text-[10px] font-sans tracking-widest text-[#FAF5EA]/50 uppercase mt-2 text-center">
                Customize or generate your personalized wedding e-invitation
              </p>
            </div>
          )}

          <div className="flex flex-col items-center gap-3 mt-4">
            <p className="text-[9px] md:text-[10px] font-sans tracking-widest text-[#FAF5EA]/60 uppercase text-center mb-1">
              To create your memories contact
            </p>
            <div className="flex items-center gap-6 mb-2">
              <a href="https://www.instagram.com/digiinvitations_?igsi=MWh1ZnZhMm1xNnNkdw==" target="_blank" rel="noopener noreferrer" className="text-[#C9A15A] hover:text-[#FAF5EA] transition-colors flex items-center gap-1.5 opacity-90 hover:opacity-100">
                <Instagram className="w-[14px] h-[14px]" />
                <span className="text-[9px] font-sans tracking-widest uppercase">Instagram</span>
              </a>
              <a href="https://wa.me/919456411569" target="_blank" rel="noopener noreferrer" className="text-[#C9A15A] hover:text-[#FAF5EA] transition-colors flex items-center gap-1.5 opacity-90 hover:opacity-100">
                <MessageCircle className="w-[14px] h-[14px]" />
                <span className="text-[9px] font-sans tracking-widest uppercase">WhatsApp</span>
              </a>
            </div>
            <p className="text-[8px] md:text-[9px] font-sans tracking-widest text-[#FAF5EA]/30 uppercase">
              Crafted with 🤍 by digiinvitations_
            </p>
          </div>
          {onOpenAdmin && (
            <button
              onClick={() => onOpenAdmin()}
              className="mt-6 mb-2 p-2 bg-white/5 hover:bg-white/10 text-[#FAF5EA]/50 hover:text-[#FAF5EA] rounded-full transition-all flex items-center justify-center"
              aria-label="Open Admin Panel"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
