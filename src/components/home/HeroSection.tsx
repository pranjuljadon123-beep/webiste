import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Enterprise-Grade Operations Platform</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up text-balance">
            The Execution Backbone for{" "}
            <span className="gradient-text">Complex Operations</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            From orders to invoices, documents to decisions — NexusOps is the system of record 
            with intelligence layers that enterprises trust to manage workflows end-to-end.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/demo">
              <Button variant="hero" size="xl" className="group">
                Request a Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/platform">
              <Button variant="hero-outline" size="xl" className="group">
                <Play size={18} className="mr-1" />
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-primary-foreground/50 text-sm mb-4">Trusted by operations leaders at</p>
            <div className="flex flex-wrap items-center gap-8 opacity-60">
              <div className="text-primary-foreground font-semibold text-lg">Fortune 500</div>
              <div className="text-primary-foreground font-semibold text-lg">Global Logistics</div>
              <div className="text-primary-foreground font-semibold text-lg">Manufacturing</div>
              <div className="text-primary-foreground font-semibold text-lg">Retail</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
