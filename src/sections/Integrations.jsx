import React from 'react';
import { 
  CreditCard, 
  Video, 
  MessageSquare, 
  Mail, 
  BarChart, 
  Link, 
  FileSpreadsheet, 
  QrCode 
} from 'lucide-react';

export default function Integrations() {
  const partners = [
    { name: 'Stripe', desc: 'Secure payment gateway integrations.', icon: CreditCard },
    { name: 'MyFatoorah', desc: 'Regional middle-east payments.', icon: CreditCard },
    { name: 'Zoom', desc: 'Virtual webinars stream sync.', icon: Video },
    { name: 'Google Meet', desc: 'Auto session link setups.', icon: Video },
    { name: 'WhatsApp Business', desc: 'Ticket receipts dispatch alerts.', icon: MessageSquare },
    { name: 'SMTP Servers', desc: 'Dedicated branding email IPs.', icon: Mail },
    { name: 'Postmark', desc: 'High-speed transactional alerts.', icon: Mail },
    { name: 'Google Analytics', desc: 'Track registrant campaign sales.', icon: BarChart },
    { name: 'CRMs Integration', desc: 'Sync leads to HubSpot & Salesforce.', icon: Link },
    { name: 'REST APIs', desc: 'Connect to external platform tools.', icon: Link },
    { name: 'Excel Import/Export', desc: 'Flexible offline files handler.', icon: FileSpreadsheet },
    { name: 'QR Scan Hardware', desc: 'Support Honeywell, Opticon devices.', icon: QrCode }
  ];

  // Double the list for seamless looping marquee
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-primary">
            Syncs Seamlessly with Your Tech Stack
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Connect EVNT.AI to your favorite CRM tools, payment gateways, video streams, and offline files databases.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex overflow-x-hidden border-y border-slate-200/50 bg-white/40 py-6 backdrop-blur-sm">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Marquee Content */}
        <div className="animate-marquee whitespace-nowrap gap-6">
          {marqueeItems.map((item, idx) => {
            const PartnerIcon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center space-x-3 bg-white border border-slate-200/60 rounded-xl px-5 py-3 shadow-sm hover:border-accent-cyan/40 transition-colors"
                title={item.desc}
              >
                <div className="p-2 rounded bg-slate-100 text-slate-700">
                  <PartnerIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <h4 className="text-xs font-bold text-slate-850">{item.name}</h4>
                  <p className="text-[9px] text-slate-400 font-light mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
