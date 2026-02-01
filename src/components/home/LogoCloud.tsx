import { motion } from "framer-motion";

const logos = [
  "Fortune 500", "Global Logistics", "Manufacturing", "Retail Giants",
  "Pharma Leaders", "Tech Enterprises", "FMCG Brands", "Auto Industry"
];

const LogoCloud = () => {
  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Trusted by 500+ enterprise operations teams globally
        </motion.p>
        
        {/* Scrolling Logo Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-12 pr-12"
            >
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-3 rounded-lg bg-muted/50 border border-border"
                >
                  <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                    {logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
