"use client";

import ContactCta from "./contact-cta";
import ContactHeader from "./contact-header";
import ContactMap from "./contact-map";
import ContactOptions from "./contact-options";

function ContactContainer() {
  return (
    <div className="min-h-screen py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative z-10 py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <ContactHeader />

          {/* Main content grid */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact options */}
            <div className="order-2 lg:order-1">
              <ContactOptions />
            </div>

            {/* Map section */}
            <div className="order-1 lg:order-2">
              <ContactMap />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20">
            <ContactCta />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
