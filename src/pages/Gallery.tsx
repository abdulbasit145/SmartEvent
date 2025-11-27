import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Image as ImageIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<{ url: string; type: "image" | "video" } | null>(null);
  const [images, setImages] = useState<any[]>([]);
  const { toast } = useToast();

  // Enhanced gallery media with varied sizes and better event images
  const sampleMedia = [
    { 
      id: 1, 
      image_url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200", 
      title: "Luxury Wedding Reception",
      type: "image",
      size: "large" // 2x2
    },
    { 
      id: 2, 
      image_url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200", 
      title: "Elegant Mehndi Ceremony",
      type: "image",
      size: "medium" // 1x1
    },
    { 
      id: 3, 
      image_url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200", 
      title: "Birthday Celebration",
      type: "image",
      size: "medium" // 1x1
    },
    { 
      id: 4, 
      image_url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200", 
      title: "Floral Decoration Setup",
      type: "image",
      size: "tall" // 1x2
    },
    { 
      id: 5, 
      image_url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200", 
      title: "Corporate Event",
      type: "image",
      size: "wide" // 2x1
    },
    { 
      id: 6, 
      image_url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200", 
      title: "Wedding Stage Design",
      type: "image",
      size: "medium" // 1x1
    },
    { 
      id: 7, 
      image_url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200", 
      title: "Garden Party Setup",
      type: "image",
      size: "medium" // 1x1
    },
    { 
      id: 8, 
      image_url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1200", 
      title: "Lighting Installation",
      type: "image",
      size: "tall" // 1x2
    },
    { 
      id: 9, 
      image_url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200", 
      title: "Event Venue Decoration",
      type: "image",
      size: "wide" // 2x1
    },
    { 
      id: 10, 
      image_url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200", 
      title: "Bridal Stage",
      type: "image",
      size: "medium" // 1x1
    },
    { 
      id: 11, 
      image_url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200", 
      title: "Outdoor Celebration",
      type: "image",
      size: "medium" // 1x1
    },
    { 
      id: 12, 
      image_url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200", 
      title: "Table Setting",
      type: "image",
      size: "large" // 2x2
    },
  ];

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .order("display_order", { ascending: true });

      if (error) throw error;

      if (data && data.length > 0) {
        // Add size property if not present
        const mediaWithSizes = data.map((item, index) => ({
          ...item,
          type: item.type || "image",
          size: item.size || ["medium", "tall", "wide", "large"][index % 4]
        }));
        setImages(mediaWithSizes);
      } else {
        // Use sample media if no images in database
        setImages(sampleMedia);
      }
    } catch (error) {
      console.error("Error fetching gallery:", error);
      setImages(sampleMedia);
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 min-h-[400px]";
      case "tall":
        return "col-span-1 row-span-2 min-h-[400px]";
      case "wide":
        return "col-span-2 row-span-1 min-h-[200px]";
      default:
        return "col-span-1 row-span-1 min-h-[200px]";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#051627] to-[#0f172a] text-white">
      <Navigation />
      <WhatsAppButton />

      {/* Unified Background Section */}
      <div className="relative overflow-hidden">
        {/* Decorative gradient orbs - span both hero and gallery sections */}
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
                Our <span className="text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text">Gallery</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80">
                Explore our portfolio of stunning events and celebrations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid - Masonry Layout */}
        <section className="relative py-16">
          <div className="relative container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((item, index) => {
                const size = item.size || "medium";
                const isVideo = item.type === "video";
                
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-xl border border-white/10 cursor-pointer group hover:border-white/30 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 ${getSizeClasses(size)}`}
                    onClick={() => setSelectedMedia({ url: item.image_url, type: item.type || "image" })}
                  >
                    {isVideo ? (
                      <div className="absolute inset-0 w-full h-full">
                        <video
                          src={item.image_url}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all">
                            <Play className="w-8 h-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.image_url}
                        alt={item.title || "Gallery image"}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    
                    {/* Overlay with title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {isVideo ? (
                            <Play className="w-4 h-4 text-accent" fill="currentColor" />
                          ) : (
                            <ImageIcon className="w-4 h-4 text-accent" />
                          )}
                          <span className="text-xs uppercase tracking-wider text-white/60">
                            {isVideo ? "Video" : "Image"}
                          </span>
                        </div>
                        <h3 className="text-white font-semibold text-sm sm:text-base">
                          {item.title || "Event Showcase"}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 backdrop-blur-md border border-white/20"
              onClick={() => setSelectedMedia(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            {selectedMedia.type === "video" ? (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={selectedMedia.url}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            ) : (
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedMedia.url}
                alt="Gallery image"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;