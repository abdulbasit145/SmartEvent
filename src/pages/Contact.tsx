import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    event_type: "",
    event_date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("bookings").insert([formData]);

      if (error) throw error;

      toast({
        title: "Booking Submitted!",
        description: "We'll get back to you soon. Check your email for confirmation.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        event_type: "",
        event_date: "",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#051627] to-[#0f172a] text-white">
      <Navigation />
      <WhatsAppButton />

      {/* Unified Background Section */}
      <div className="relative overflow-hidden">
        {/* Decorative gradient orbs - span both hero and contact sections */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        {/* Noise overlay - continuous across both sections */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-24 pb-8 sm:pb-12">
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Contact <span className="text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text">Us</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80">
                Ready to plan your perfect event in Islamabad or Rawalpindi? Get in touch with us today. We serve all areas of the twin cities and surrounding localities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-12 sm:py-16">
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Get in Touch</h2>
              <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
                We'd love to hear from you. Fill out the form or reach us through the contact
                details below. Located in Chaksahzad, Islamabad, we serve clients throughout Islamabad, Rawalpindi, and surrounding areas including Bahria Town, DHA, Gulberg, and more.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base text-white">Email</h3>
                    <a
                      href="mailto:smartevents778@gmail.com"
                      className="text-white/70 hover:text-accent text-sm sm:text-base break-all transition-colors"
                    >
                      smartevents778@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base text-white">Phone</h3>
                    <a
                      href="tel:+923125675778"
                      className="text-white/70 hover:text-accent text-sm sm:text-base transition-colors"
                    >
                      +92 312 5675778
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base text-white">Location</h3>
                    <p className="text-white/70 text-sm sm:text-base">
                      New Mall Sharqi, Kuri Road, Chaksahzad, Islamabad, Zain Arcade Plaza First Floor
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Book Your Event</h2>
              <style>{`
                input[type="date"]::-webkit-calendar-picker-indicator {
                  filter: invert(1);
                  cursor: pointer;
                  opacity: 1;
                }
                input[type="date"]::-webkit-calendar-picker-indicator:hover {
                  opacity: 0.8;
                }
              `}</style>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-white bg-white/10 border-white/20 placeholder:text-white/50 focus-visible:ring-accent"
                    required
                  />
                </div>

                <div>
                  <Input
                    placeholder="Phone Number *"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-white bg-white/10 border-white/20 placeholder:text-white/50 focus-visible:ring-accent"
                    required
                  />
                </div>

                <div>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-white bg-white/10 border-white/20 placeholder:text-white/50 focus-visible:ring-accent"
                  />
                </div>

                <div>
                  <Select
                    value={formData.event_type}
                    onValueChange={(value) => setFormData({ ...formData, event_type: value })}
                    required
                  >
                    <SelectTrigger className="text-white bg-white/10 border-white/20 placeholder:text-white/50 focus:ring-accent">
                      <SelectValue placeholder="Select Event Type *" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0f172a] border-white/20 text-white">
                      <SelectItem value="birthday" className="text-white focus:bg-white/10">Birthday Party</SelectItem>
                      <SelectItem value="wedding" className="text-white focus:bg-white/10">Wedding</SelectItem>
                      <SelectItem value="corporate" className="text-white focus:bg-white/10">Corporate Event</SelectItem>
                      <SelectItem value="decoration" className="text-white focus:bg-white/10">Decoration Services</SelectItem>
                      <SelectItem value="other" className="text-white focus:bg-white/10">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Input
                    placeholder="Event Date *"
                    type="date"
                    value={formData.event_date}
                    onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                    className="text-white bg-white/10 border-white/20 placeholder:text-white/50 focus-visible:ring-accent [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-100"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Tell us about your event..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-white bg-white/10 border-white/20 placeholder:text-white/50 focus-visible:ring-accent"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full shadow-lg shadow-accent/40"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Booking"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;