// Homepage footer columns — Paper labels with existing/future hrefs.
// CONNECT stays "#" until real social URLs are provided.

export const footerColumns = [
  {
    title: "ABOUT",
    links: [
      { label: "Our Mission", href: "/about#mission" },
      { label: "E-Board", href: "/about#eboard" },
      { label: "Committees", href: "/about#committees" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "New Students", href: "/resources#community" },
      { label: "Mentorship", href: "/resources#mentorship" },
      { label: "FAQ", href: "/resources#faq" },
    ],
  },
  {
    title: "EVENTS",
    links: [
      { label: "Annual", href: "/events#annual-events" },
      { label: "Workshops", href: "/events#workshop-events" },
      { label: "Socials", href: "/events#internal-events" },
    ],
  },
  {
    title: "CONNECT",
    links: [
      { label: "Instagram", href: "#", external: true },
      { label: "Discord", href: "#", external: true },
      { label: "LinkedIn", href: "#", external: true },
    ],
  },
];
