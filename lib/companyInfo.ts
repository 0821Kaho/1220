export interface InfoItem {
  label: string;
  value: string;
  japaneseValue?: string;
  href?: string;
  items?: string[];
}

export const infoItems = [
  {
    label: "Business Domains",
    value: "",
    items: [
      "EduTech Platform Development",
      "Microfinance",
      "Marketing and Development Outsourcing"
    ]
  },
  {
    label: "Address",
    value: "2-29-10, Kita-machi, Nerima, Tokyo, JAPAN",
    japaneseValue: "〒176-0081\n東京都練馬区北町2-29-10",
  },
  {
    label: "Phone",
    value: "+81 3 6750 7041",
    japaneseValue: "03-6750-7041",
    href: "tel:+81367507041",
  },
  {
    label: "Email",
    value: "kaho.satoyoshi@gouni.io",
    href: "mailto:kaho.satoyoshi@gouni.io",
  },
  {
    label: "Company Capital",
    value: "4,000,000 Yen",
    japaneseValue: "4,000,000円",
  },
];