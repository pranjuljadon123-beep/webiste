import { CheckCircle2, TrendingDown, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Faster Execution",
    stat: "40%",
    description: "reduction in order-to-delivery cycle time",
  },
  {
    icon: TrendingDown,
    title: "Lower Costs",
    stat: "25%",
    description: "savings through intelligent procurement",
  },
  {
    icon: Shield,
    title: "Better Compliance",
    stat: "99%",
    description: "audit-ready documentation accuracy",
  },
  {
    icon: CheckCircle2,
    title: "Smarter Decisions",
    stat: "3x",
    description: "faster insights with AI recommendations",
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Systems of Record.{" "}
              <span className="gradient-text">Systems of Intelligence.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Traditional operations tools give you visibility. NexusOps gives you control. 
              We don't just track your operations — we power them with AI that understands 
              context, predicts outcomes, and recommends actions.
            </p>

            <div className="space-y-4">
              {[
                "Unified data layer across all operational touchpoints",
                "AI agents that automate routine decisions",
                "Explainable insights you can trust and act on",
                "Enterprise-grade security and compliance built-in",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{benefit.stat}</div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
