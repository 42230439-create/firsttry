import { MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-24 pb-24 px-6 sm:px-12 relative z-10 border-t border-sage/20 pt-24 bg-white/10 backdrop-blur-md">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
        
        {/* Location Section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-3 text-clay mb-2">
            <MapPin size={28} />
            <h3 className="font-serif text-2xl text-charcoal-green">Location</h3>
          </div>
          <p className="text-charcoal-green/70 font-light leading-relaxed text-lg">
            123 Culinary Avenue<br />
            Metropolis, NY 10001
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-3 text-clay mb-2">
            <Phone size={28} />
            <h3 className="font-serif text-2xl text-charcoal-green">Contact</h3>
          </div>
          <p className="text-charcoal-green/70 font-light leading-relaxed text-lg">
            <a href="tel:+15551234567" className="hover:text-electric-teal transition-colors">
              (555) 123-4567
            </a><br />
            <a href="mailto:info@laurabrasserie.com" className="hover:text-electric-teal transition-colors">
              info@laurabrasserie.com
            </a>
          </p>
        </div>

        {/* Hours Section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-3 text-clay mb-2">
            <Clock size={28} />
            <h3 className="font-serif text-2xl text-charcoal-green">Hours</h3>
          </div>
          <p className="text-charcoal-green/70 font-light leading-relaxed text-lg">
            Mon - Thu: 5:00 PM - 10:00 PM<br />
            Fri - Sat: 5:00 PM - 11:30 PM<br />
            Sun: 4:00 PM - 9:00 PM
          </p>
        </div>
        
      </div>
      
      <div className="max-w-4xl mx-auto mt-24 pt-12 border-t border-sage/30 text-center text-sm text-charcoal-green/50 font-light tracking-wide">
        © {new Date().getFullYear()} L'Aura Brasserie. All rights reserved.
      </div>
    </footer>
  );
}
