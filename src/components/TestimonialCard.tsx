import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  event_type?: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ name, event_type, testimonial, rating }: TestimonialCardProps) => {
  return (
    <div className="p-6 h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-white/80 mb-4 italic">&ldquo;{testimonial}&rdquo;</p>
      <div>
        <p className="font-semibold text-white">{name}</p>
        {event_type && <p className="text-sm text-white/60">{event_type}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;