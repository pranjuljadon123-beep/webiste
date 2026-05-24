import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Globe, Shield, Zap } from "lucide-react";
import heroShipping from "@/assets/hero-shipping.jpg";
import daistrixLogo from "@/assets/daistrix-logo.png";

const floatingCards = [
  { icon: Globe, label: "Global Visibility", delay: 0 },
  { icon: Shield, label: "Enterprise Security", delay: 0.2 },
  { icon: Zap, label: "AI-Powered", delay: 0.4 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroShipping}
          alt="Container ship at sea"
          className="w-full h-full object-cover"
          loading="eager"
          animate={{ scale: [1, 1.05, 1], x: [0, -15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-ocean/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6"
            >
              <Sparkles size={16} className="animate-pulse" />
              <span className="text-sm font-medium">AI-First Operations Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance"
            >
              Future-Ready Your{" "}
              <span className="gradient-text">Supply Chain</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl"
            >
              Combine an AI-powered operations platform with intelligent automation — 
              and watch the magic happen. Resilience, efficiency, and visibility go up. 
              Costs and complaints go down.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/demo">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Request a Demo
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/platform">
                <Button variant="hero-outline" size="xl" className="group w-full sm:w-auto">
                  <Play size={18} className="mr-1" />
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "6", label: "Integrated Modules" },
                { value: "40%", label: "Cost Reduction" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="hidden lg:block relative">
            <div className="relative h-[500px]">
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 50, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + card.delay }}
                  className="absolute"
                  style={{
                    top: `${15 + index * 30}%`,
                    right: `${10 + (index % 2) * 20}%`,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                    className="bg-card/90 backdrop-blur-lg rounded-2xl p-5 shadow-xl border border-border/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                        <card.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{card.label}</div>
                        <div className="text-sm text-muted-foreground">Built-in</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
