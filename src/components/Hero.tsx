import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Star } from "lucide-react";

const Hero = () => {

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#051627] to-[#0f172a] text-white">
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

      {/* Light noise overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-soft-light" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              <Sparkles className="h-4 w-4 text-accent" />
              Smart Events · Since 2015
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight text-balance">
                Turning celebrations into{" "}
                <span className="text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text">
                  signature experiences
                </span>
                .
              </h1>
              <p className="text-lg sm:text-xl text-white/80 max-w-xl">
                From intimate birthdays to luxury destination weddings, we design, plan, and execute
                unforgettable events with seamless precision in Islamabad, Rawalpindi, and surrounding areas.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Events Delivered", value: "350+", detail: "Islamabad & Rawalpindi" },
                { label: "Client Satisfaction", value: "4.9/5", detail: "Based on 180+ reviews" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-sm uppercase tracking-wide text-white/60">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-white/70">{stat.detail}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-accent px-8 text-base font-semibold shadow-lg shadow-accent/40 hover:bg-accent/90"
              >
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border-white/40 px-8 text-base font-semibold text-white bg-white/10"
              >
                <Link to="/services">Discover Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -right-8 bottom-16 h-28 w-28 rounded-full bg-pink-400/30 blur-3xl" />

            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="overflow-hidden rounded-[28px] border border-white/10">
                <div
                  className="relative h-[360px] w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, rgba(2,6,23,0.15), rgba(15,23,42,0.6)), url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 backdrop-blur px-4 py-2 text-sm font-semibold text-white">
                    Signature Wedding
                  </div>
                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-white/8 backdrop-blur p-5 text-white">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">Showcase</p>
                    <h3 className="text-2xl font-semibold text-white">Luxury Mehndi Collective</h3>
                    <p className="text-sm text-white/70">
                      Bespoke florals, kinetic lighting, immersive walk-in experience.
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-sm font-semibold">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-white">
                        <Star className="h-4 w-4 text-amber-400" />
                        4.9 Client Rating
                      </span>
                      <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-white">Islamabad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;