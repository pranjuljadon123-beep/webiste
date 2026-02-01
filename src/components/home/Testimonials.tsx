import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NexusOps transformed how we manage our global supply chain. The AI recommendations have reduced our exception handling time by 60%.",
    author: "Sarah Mitchell",
    role: "VP of Supply Chain",
    company: "Fortune 500 Manufacturer",
    rating: 5,
  },
  {
    quote: "The blind auction feature alone saved us 22% on procurement costs in the first quarter. The vendor relationships have actually improved.",
    author: "Michael Chen",
    role: "Chief Procurement Officer",
    company: "Global Retail Group",
    rating: 5,
  },
  {
    quote: "Finally, a platform that connects our orders to invoices seamlessly. Our finance team went from firefighting to strategic planning.",
    author: "Jennifer Adams",
    role: "CFO",
    company: "Logistics Enterprise",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Loved by Operations{" "}
            <span className="gradient-text">Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our customers say about transforming their operations with NexusOps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              <div className="relative bg-background rounded-2xl p-8 border border-border h-full flex flex-col hover:border-primary/30 transition-colors">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground/80 leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
