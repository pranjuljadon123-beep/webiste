import { motion } from "framer-motion";
import { CheckCircle2, TrendingDown, Zap, Shield, Target, Clock } from "lucide-react";
import containerPort from "@/assets/container-port.jpg";
import DashboardAnimation from "@/components/ui/DashboardAnimation";

const benefits = [
  { icon: Zap, title: "Faster Execution", stat: "40%", description: "reduction in order-to-delivery cycle time" },
  { icon: TrendingDown, title: "Lower Costs", stat: "25%", description: "savings through intelligent procurement" },
  { icon: Shield, title: "Better Compliance", stat: "99%", description: "audit-ready documentation accuracy" },
  { icon: CheckCircle2, title: "Smarter Decisions", stat: "3x", description: "faster insights with AI recommendations" },
];

const features = [
  { icon: Target, title: "Unified data layer across all operational touchpoints" },
  { icon: Zap, title: "AI agents that automate routine decisions" },
  { icon: CheckCircle2, title: "Explainable insights you can trust and act on" },
  { icon: Shield, title: "Enterprise-grade security and compliance built-in" },
  { icon: Clock, title: "Real-time visibility into every operation" },
];

const ValueProposition = () => {
  return (
    <section className="py-20 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why For Axis
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Systems of Record.{" "}
              <span className="gradient-text">Systems of Intelligence.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Traditional operations tools give you visibility. For Axis gives you control. 
              We don't just track your operations — we power them with AI that understands 
              context, predicts outcomes, and recommends actions.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground pt-1">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Shipping Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <DashboardAnimation
                src={containerPort}
                alt="Container port operations"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-8 bg-card rounded-xl p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">-40%</div>
                  <div className="text-xs text-muted-foreground">Processing Time</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-8 -right-8 bg-card rounded-xl p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{benefit.stat}</div>
              <h3 className="font-semibold mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
