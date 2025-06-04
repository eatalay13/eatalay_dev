"use client";

import { FiExternalLink, FiMapPin } from "react-icons/fi";

export default function ContactMap() {
  return (
    <div className="sticky top-8">
      <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700">
        {/* Map header */}
        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <FiMapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Konum
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Bitlis, Türkiye
              </p>
            </div>
          </div>
        </div>

        {/* Map iframe */}
        <div className="relative h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.13095749983!2d42.0979!3d38.3938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40837c5d1c8c5c6b%3A0x3c8a2c8c8c8c8c8c!2sBitlis%2C%20Turkey!5e0!3m2!1sen!2str!4v1625847382365!5m2!1sen!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Map footer */}
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                Bitlis Eren Üniversitesi yakınında
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Doğu Anadolu Bölgesi
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Bitlis+Eren+University,Bitlis,Turkey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <span>Haritada Aç</span>
              <FiExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
