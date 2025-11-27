import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create unforgettable events that exceed expectations and bring joy to every celebration.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be Islamabad and Rawalpindi's leading event management service, known for creativity, reliability, and excellence.",
    },
    {
      icon: Award,
      title: "Quality Service",
      description:
        "We are committed to delivering the highest quality in every aspect of event planning and execution.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description:
        "Your satisfaction is our priority. We work closely with you to understand and fulfill your vision.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#051627] to-[#0f172a] text-white">
      <Navigation />
      <WhatsAppButton />

      {/* Unified Background Section */}
      <div className="relative overflow-hidden">
        {/* Decorative gradient orbs - span both hero and story sections */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
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
                About <span className="text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text">Smart Events</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Creating memorable experiences, one event at a time
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="relative py-16">
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-white/80 mb-4">
                  Smart Events was founded with a passion for creating memorable celebrations. What
                  started as a small venture has grown into a comprehensive event management
                  service that serves clients throughout Islamabad, Rawalpindi, and surrounding areas including
                  Chaksahzad, Bahria Town, DHA, Gulberg, and other twin cities localities.
                </p>
                <p className="text-white/80 mb-4">
                  We understand that every event is unique and special. Whether it's an intimate
                  birthday celebration in F-7, a grand wedding ceremony in Bahria Town, or a corporate gathering
                  in Rawalpindi, we bring the same level of dedication, creativity, and professionalism to every
                  project across the twin cities.
                </p>
                <p className="text-white/80">
                  Our team of experienced professionals works tirelessly to ensure that every
                  detail is perfect, every moment is captured, and every guest leaves with lasting
                  memories. Based in Chaksahzad, Islamabad, we take pride in our ability to transform visions into reality and
                  stress into success for clients throughout the Islamabad-Rawalpindi region.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      </div>

      {/* Values Grid */}
      <section className="relative py-16 overflow-hidden">
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light pointer-events-none" />
        <div className="relative container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          >
            What We Stand For
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 overflow-hidden">
        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light pointer-events-none" />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose Smart Events?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text mb-2">500+</div>
                <p className="text-white/70 text-sm sm:text-base">Events Completed</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text mb-2">100%</div>
                <p className="text-white/70 text-sm sm:text-base">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text mb-2">50+</div>
                <p className="text-white/70 text-sm sm:text-base">Team Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;