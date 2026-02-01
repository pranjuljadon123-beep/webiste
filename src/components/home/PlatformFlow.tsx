import {
  ClipboardList,
  FileText,
  ShoppingCart,
  Truck,
  Receipt,
  Brain,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    icon: ClipboardList,
    title: "Order Management",
    description: "Central system of record for operational execution with complete audit trails.",
    color: "from-teal to-teal-light",
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Auto-generate documents from order and execution data with version control.",
    color: "from-teal-light to-ocean",
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Auctions",
    description: "Spot and contract RFQs with blind reverse auctioning for best pricing.",
    color: "from-ocean to-ocean-light",
  },
  {
    icon: Truck,
    title: "Shipment Tracking",
    description: "Multi-modal visibility with predictive ETAs and exception alerts.",
    color: "from-ocean-light to-secondary",
  },
  {
    icon: Receipt,
    title: "Invoice Reconciliation",
    description: "Match invoices with contracts, orders, and documents automatically.",
    color: "from-secondary to-teal",
  },
  {
    icon: Brain,
    title: "AI Decision Engine",
    description: "Predictive insights with explainable recommendations, not black boxes.",
    color: "from-teal to-ocean",
  },
];

const PlatformFlow = () => {
  return (
    <section className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            One Platform.{" "}
            <span className="gradient-text">End-to-End Intelligence.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every module connects to form a unified execution spine — from the first order 
            to the final invoice, with AI powering every decision along the way.
          </p>
        </div>

        {/* Flow Visualization */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal via-ocean to-secondary opacity-20 -translate-y-1/2" />

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {modules.map((module, index) => (
              <div
                key={module.title}
                className="group relative bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <module.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{module.description}</p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight size={16} />
                </div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            See how all modules work together →{" "}
            <a href="/platform" className="text-primary font-medium hover:underline">
              Platform Overview
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformFlow;
