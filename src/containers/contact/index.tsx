"use client";

import ContactCta from "./contact-cta";
import ContactHeader from "./contact-header";
import ContactMap from "./contact-map";
import ContactOptions from "./contact-options";

function ContactContainer() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* İletişim seçenekleri */}
          <div>
            <ContactOptions />
          </div>

          {/* Harita */}
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Konum
            </h2>
            <ContactMap />
          </div>
        </div>

        {/* Call to Action */}
        <ContactCta />
      </div>
    </div>
  );
}

export default ContactContainer;
