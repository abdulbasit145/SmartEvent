import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cake,
  Heart,
  Palette,
  Lightbulb,
  Camera,
  Utensils,
  Sparkles,
  CalendarCheck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cake,
      title: "Birthday Parties",
      description:
        "Make birthdays unforgettable with our complete party planning, themed decorations, entertainment, and catering services.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800",
    },
    {
      icon: Heart,
      title: "Wedding Planning",
      description:
        "From intimate ceremonies to grand celebrations, we handle every detail of your special day with elegance and precision.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    },
    {
      icon: Palette,
      title: "Event Decoration",
      description:
        "Transform any venue with our creative decoration services, custom themes, and stunning visual designs.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
    },
    {
      icon: Lightbulb,
      title: "Lighting Services",
      description:
        "Professional lighting solutions for homes and venues including ambient, accent, and decorative lighting.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description:
        "Capture every precious moment with our professional photography and videography services.",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800",
    },
    {
      icon: Utensils,
      title: "Crockery & Setup",
      description:
        "Complete event setup with quality crockery, elegant tables, comfortable chairs, and all essentials.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800",
    },
    {
      icon: Sparkles,
      title: "Custom Themes",
      description:
        "Bring your vision to life with our bespoke themed events tailored to your preferences and style.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800",
    },
    {
      icon: CalendarCheck,
      title: "Full Event Management",
      description:
        "End-to-end event planning and execution, ensuring a seamless and stress-free experience.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#051627] to-[#0f172a] text-white">
      <Navigation />
      <WhatsAppButton />

      {/* Unified Background Section */}
      <div className="relative overflow-hidden">
        {/* Decorative gradient orbs - span both hero and services sections */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        {/* Noise overlay - continuous across both sections */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-24 pb-12">
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <span className="text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Comprehensive event management solutions tailored to make your special occasions
                memorable
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="relative py-16">
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <service.icon className="w-8 h-8 mb-2" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="border-white/40 text-white bg-white/10 rounded-full">
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light pointer-events-none" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Plan Your Event?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Let's create something amazing together. Contact us today for a free consultation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 shadow-lg shadow-accent/40"
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;