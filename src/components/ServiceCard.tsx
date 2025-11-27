import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="p-6 h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300 hover:border-white/20">
        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;