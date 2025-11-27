import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
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
  ArrowRight,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_active", true)
        .order("display_order", { ascending: true })
        .limit(3);

      if (error) throw error;
      if (data) setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const services = [
    {
      icon: Cake,
      title: "Birthday Parties",
      description:
        "Complete birthday party planning with themed decorations and entertainment.",
    },
    {
      icon: Heart,
      title: "Wedding Planning",
      description: "Elegant wedding ceremonies and receptions tailored to your vision.",
    },
    {
      icon: Palette,
      title: "Event Decoration",
      description: "Creative decoration services with custom themes and stunning designs.",
    },
    {
      icon: Lightbulb,
      title: "Lighting Services",
      description: "Professional lighting solutions for homes and venues.",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Capture every precious moment with professional photography.",
    },
    {
      icon: Utensils,
      title: "Complete Setup",
      description: "Crockery, tables, chairs, and all event essentials.",
    },
  ];

  const galleryPreview = [
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#051627] to-[#0f172a] text-white">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light pointer-events-none" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Welcome to <span className="text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text">Smart Events</span>
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We are Pakistan's premier event management service, specializing in creating
              unforgettable experiences for every occasion. From intimate birthday celebrations to
              grand wedding ceremonies, we handle every detail with professionalism and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light pointer-events-none" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Comprehensive event management solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 shadow-lg shadow-accent/40">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light pointer-events-none" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Work</h2>
            <p className="text-lg text-white/80">
              A glimpse into the beautiful events we've created
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {galleryPreview.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-lg border-2 border-white/20 shadow-lg shadow-black/50"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  style={{ filter: 'brightness(1.35) contrast(1.4) saturate(1.2)' }}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-white/40 text-white bg-white/10 rounded-full px-8">
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Noise overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light pointer-events-none" />
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
              <p className="text-lg text-white/80">
                Real experiences from real people
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Plan Your Perfect Event?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/80">
              Let us handle the details while you enjoy your special day. Contact us today for a
              free consultation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 shadow-lg shadow-accent/40"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
