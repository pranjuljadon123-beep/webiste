import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 gradient-hero" />
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/2 w-full h-full opacity-10"
            >
              <div className="w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
            </motion.div>
            <motion.div
              animate={{ scale: [1.3, 1, 1.3], rotate: [0, -45, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/2 -left-1/2 w-full h-full opacity-10"
            >
              <div className="w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-20">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground mb-6"
              >
                <Sparkles size={16} />
                <span className="text-sm font-medium">Start Your Transformation</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                See how For Axis can become the execution backbone for your enterprise. 
                Schedule a personalized demo with our team and discover the possibilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demo">
                  <Button
                    size="xl"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl group w-full sm:w-auto"
                  >
                    Request a Demo
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                    Talk to Sales
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-8 border-t border-primary-foreground/20"
              >
                <p className="text-primary-foreground/60 text-sm mb-4">Enterprise-ready features</p>
                <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80 text-sm">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    SOC 2 Certified
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    99.9% Uptime SLA
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    24/7 Support
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    GDPR Compliant
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
