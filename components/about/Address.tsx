"use client";

import { MapPin, Phone, Mail } from "lucide-react";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactItem[] = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Address",
    value: "2-29-10, Kita-machi, Nerima, Tokyo, JAPAN",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+81 80-1278-3812",
    href: "tel:+818012783812",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "kaho.satoyoshi@gouni.io",
    href: "mailto:kaho.satoyoshi@gouni.io",
  },
];

function ContactCard({ icon, label, value, href }: ContactItem) {
  const content = (
    <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
      <div className="text-neutral-600">{icon}</div>
      <div>
        <p className="text-sm font-medium text-neutral-600 mb-1">{label}</p>
        <p className="text-neutral-900">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block transition-transform hover:-translate-y-1"
      >
        {content}
      </a>
    );
  }

  return content;
}

export function Address() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Contact</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((item, index) => (
            <ContactCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}