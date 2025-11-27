import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "+923125675778";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Pulsing animation rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{
          scale: [1, 1.8, 1.8],
          opacity: [0.3, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />
      
      {/* Main button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl shadow-[#25D366]/50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        whileHover={{ 
          scale: 1.15,
          boxShadow: "0 0 30px rgba(37, 211, 102, 0.6)",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366] blur-xl opacity-0"
          whileHover={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;