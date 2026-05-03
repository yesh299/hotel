import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegStar,
  FaHeart,
  FaBirthdayCake,
  FaUsers,
  FaRing,
  FaBuilding,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import heroImage from "./assets/images/wallpaper.jpeg";
import ownerImage from "./assets/images/owner img.jpeg";
import frontImage from "./assets/images/front img.jpeg";
import interiorImage from "./assets/images/img1.jpeg";
import decorationImage from "./assets/images/img 2.jpeg";
import setupImage from "./assets/images/img 3.jpeg";
import eventImage4 from "./assets/images/img 4.jpeg";
import eventImage5 from "./assets/images/img 5.jpeg";
import eventImage6 from "./assets/images/img 6.jpeg";
import eventImage7 from "./assets/images/img 7.jpeg";
import eventImage8 from "./assets/images/img 8.jpeg";
import eventImage9 from "./assets/images/img 9.jpeg";
import eventImage10 from "./assets/images/img 10.jpeg";

const whatsappLink =
  "https://wa.me/7982275330?text=Hello%20I%20want%20to%20book%20Thakur%20Baba%20Banquet%20%26%20Dharamshala%20for%20an%20event.%20Please%20share%20details.";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  { label: "Book Now", href: "#booking" },
];

const galleryItems = [
  { title: "Front Look", image: frontImage },
  { title: "Interior", image: interiorImage },
  { title: "Decoration", image: decorationImage },
  { title: "Event Setup", image: setupImage },
  { title: "Venue Moments 1", image: eventImage4 },
  { title: "Venue Moments 2", image: eventImage5 },
  { title: "Venue Moments 3", image: eventImage6 },
  { title: "Venue Moments 4", image: eventImage7 },
  { title: "Venue Moments 5", image: eventImage8 },
  { title: "Venue Moments 6", image: eventImage9 },
  { title: "Venue Moments 7", image: eventImage10 },
];

const services = [
  {
    icon: FaRing,
    title: "Wedding Functions",
    text: "Elegant celebrations with spacious halls and beautiful presentation.",
  },
  {
    icon: FaBirthdayCake,
    title: "Birthday Parties",
    text: "Memorable birthday events with warm hospitality and premium arrangements.",
  },
  {
    icon: FaHeart,
    title: "Anniversary Celebrations",
    text: "Celebrate your special milestones in a refined and festive setting.",
  },
  {
    icon: FaRegStar,
    title: "All Types of Events",
    text: "Custom spaces for family gatherings, social functions, and private events.",
  },
  {
    icon: FaBuilding,
    title: "Corporate Functions",
    text: "Professional venue support for meetings, gatherings, and company events.",
  },
  {
    icon: FaUsers,
    title: "Large Guest Capacity",
    text: "Comfortable accommodation for guests with flexible venue planning.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}) {
  const titleColor = tone === "light" ? "text-white" : "text-slate-950";
  const descColor = tone === "light" ? "text-slate-300" : "text-slate-600";

  return (
    <motion.div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 font-serif text-3xl font-bold sm:text-4xl lg:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 sm:text-lg ${descColor}`}>
        {description}
      </p>
    </motion.div>
  );
}

function App() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex flex-col">
            <span className="font-serif text-lg font-bold tracking-wide text-amber-300 sm:text-xl">
              Thakur Baba Banquet
            </span>
            <span className="text-xs uppercase tracking-[0.35em] text-slate-400 sm:text-sm">
              & Dharamshala
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 transition hover:text-amber-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(234,179,8,0.35)]"
          >
            <FaWhatsapp />
            Book Now
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-hero-radial">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-18 mix-blend-screen"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/55 to-[#0a0f1e]" />
          <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-white/8 px-4 py-2 text-sm text-amber-100 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                Premium venue for weddings and celebrations
              </div>
              <h1 className="mt-6 font-serif text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
                Welcome to Thakur Baba Banquet &amp; Dharamshala
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                Perfect Place for Weddings, Parties &amp; Celebrations
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Book Your Event <FaArrowRight />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Explore Venue
                </a>
              </div>
            </motion.div>

            <motion.div
              className="mt-14 flex justify-center lg:mt-0"
              initial={{ opacity: 0, scale: 0.9, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src={heroImage}
                    alt="Thakur Baba Banquet & Dharamshala venue"
                    className="h-[520px] w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/75 p-5 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
                    Owner
                  </p>
                  <p className="mt-2 font-serif text-2xl font-bold text-white">
                    Dhananjay Thakur
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    Elegant venue for unforgettable moments
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="about"
          className="bg-[#f7f2e8] px-4 py-24 text-slate-950 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div
              className="relative mx-auto w-full max-w-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-amber-300/30 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-slate-900/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-amber-200/80 bg-white p-4 shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
                <div className="rounded-[1.5rem] border border-amber-300/30 bg-[#fffaf0] p-2">
                  <img
                    src={ownerImage}
                    alt="Owner Dhananjay Thakur"
                    className="h-[460px] w-full rounded-[1.2rem] object-cover object-[center_12%] transition duration-500 hover:scale-[1.01]"
                  />
                </div>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
                    Owner
                  </p>
                  <p className="mt-1 font-serif text-2xl font-bold text-slate-900">
                    Dhananjay Thakur
                  </p>
                </div>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-4 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                <FaWhatsapp className="text-xl" />
                Contact Owner on WhatsApp
              </a>
            </motion.div>

            <SectionHeading
              eyebrow="About Us"
              title="A refined space for memorable celebrations"
              description="Thakur Baba Banquet & Dharamshala is a perfect venue for hosting weddings, birthday parties, anniversaries, and all types of functions. We provide spacious halls, beautiful decoration, and a comfortable environment for your special occasions."
            />
          </div>
        </section>

        <section
          id="gallery"
          className="bg-white px-4 py-24 text-slate-950 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Gallery"
              title="Spaces designed to look great in every frame"
              description="A preview of the venue atmosphere, interior styling, decoration, and event arrangements."
              align="center"
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {galleryItems.map((item, index) => (
                <motion.figure
                  key={item.title}
                  className="group relative cursor-zoom-in overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  custom={index * 0.08}
                  onClick={() => setActiveImage(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveImage(item);
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent opacity-90 transition duration-500 group-hover:from-slate-950/65" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                      Venue
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-bold">
                      {item.title}
                    </h3>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="bg-[#0a0f1e] px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Services"
              title="Everything you need for a flawless celebration"
              description="Flexible venue support with a premium feel, thoughtful details, and a layout designed for modern event hosting."
              align="center"
              tone="light"
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.title}
                    className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    custom={index * 0.08}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300 text-xl text-slate-950 shadow-glow transition group-hover:scale-105">
                      <Icon />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-8 text-slate-300">
                      {service.text}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="booking"
          className="bg-[#f7f2e8] px-4 py-24 text-slate-950 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] sm:p-12">
            <SectionHeading
              eyebrow="Booking"
              title="Reserve your date in one click"
              description="Tap the button below to message us on WhatsApp and share your event details instantly."
              align="center"
            />

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <FaWhatsapp className="text-xl text-emerald-400" />
                Book Now on WhatsApp
              </a>
              <p className="text-sm text-slate-500">
                Fast reply for weddings, birthdays, and private events.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-slate-950 px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <SectionHeading
                eyebrow="Contact"
                title="Talk to us about your event"
                description="We are ready to help with bookings, planning, and venue details."
                tone="light"
              />

              <div className="mt-10 space-y-5 text-slate-200">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-slate-950">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone Number</p>
                    <p className="text-lg font-semibold text-white">
                      7982275330
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-slate-950">
                    <FaUsers />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Owner Name</p>
                    <p className="text-lg font-semibold text-white">
                      Dhananjay Thakur
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-slate-950">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="text-lg font-semibold text-white">
                      Map placeholder for venue directions
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
                  >
                    <FaWhatsapp />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-300/20 bg-gradient-to-br from-amber-300/15 via-white/5 to-transparent p-8 text-white shadow-2xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
                Premium Experience
              </p>
              <h3 className="mt-4 font-serif text-4xl font-bold leading-tight">
                Elegant venue styling with a warm hospitality touch.
              </h3>
              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                Designed for comfort, celebration, and memorable photographs.
                This space highlights the premium feel of the venue while
                keeping the booking journey simple.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "Spacious Hall",
                  "Custom Decoration",
                  "Celebration Friendly",
                  "Easy WhatsApp Booking",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/92 px-4 py-6 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              className="relative w-full max-w-6xl"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <FaTimes />
                Close
              </button>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/60">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="max-h-[82vh] w-full object-contain"
                />
                <div className="border-t border-white/10 bg-black/35 px-5 py-4">
                  <p className="text-sm uppercase tracking-[0.26em] text-amber-300">
                    Gallery Preview
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {activeImage.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-serif text-xl font-bold text-white">
              Thakur Baba Banquet &amp; Dharamshala
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Owner: Dhananjay Thakur
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 text-xl text-amber-300">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="transition hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#contact"
              aria-label="Contact"
              className="transition hover:text-white"
            >
              <FaPhoneAlt />
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          © 2026 Thakur Baba Banquet &amp; Dharamshala. All rights reserved.
        </p>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-2xl text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.35)] transition hover:scale-110"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;
