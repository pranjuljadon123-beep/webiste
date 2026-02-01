import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  ShoppingCart,
  Truck,
  Receipt,
  Brain,
  Layers,
  Lock,
  Zap,
} from "lucide-react";

const Platform = () => {
  const modules = [
    {
      icon: ClipboardList,
      title: "Order Management",
      subtitle: "The Execution Spine",
      description:
        "Every operation starts with an order. Our order management module serves as the central system of record, linking every downstream workflow to its source of truth.",
      features: [
        "Unified order creation and lifecycle management",
        "Complete audit trails and version history",
        "Real-time status tracking and notifications",
        "Seamless integration with ERP systems",
      ],
      href: "/solutions/order-management",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      subtitle: "Auto-Generate. Auto-Manage.",
      description:
        "Documents are auto-generated from order and execution data, ensuring consistency and compliance. Version control, approvals, and collaboration built-in.",
      features: [
        "Template-based document generation",
        "Intelligent extraction and parsing",
        "Approval workflows and e-signatures",
        "Compliance-ready audit trails",
      ],
      href: "/solutions/document-management",
    },
    {
      icon: ShoppingCart,
      title: "Procurement & Auctions",
      subtitle: "Fair. Competitive. Transparent.",
      description:
        "Run spot and contract RFQs with blind reverse auctions. Vendors see only their rank, not competitor quotes — ensuring fair competition and best pricing.",
      features: [
        "Blind reverse auction mechanism",
        "Vendor onboarding and qualification",
        "Contract management and compliance",
        "Spend analytics and reporting",
      ],
      href: "/solutions/procurement",
    },
    {
      icon: Truck,
      title: "Shipment Tracking",
      subtitle: "Multi-Modal Visibility",
      description:
        "Track shipments across all modes with predictive ETAs and proactive exception alerts. Every shipment links back to its originating order.",
      features: [
        "Real-time multi-modal tracking",
        "Predictive ETA calculations",
        "Exception detection and alerts",
        "Carrier performance analytics",
      ],
      href: "/solutions/tracking",
    },
    {
      icon: Receipt,
      title: "Invoice Reconciliation",
      subtitle: "Match. Verify. Pay.",
      description:
        "Automatically match invoices with contracts, orders, and delivery documents. Highlight discrepancies before they become problems.",
      features: [
        "Three-way matching automation",
        "Discrepancy detection and resolution",
        "Payment scheduling and tracking",
        "Financial reporting and analytics",
      ],
      href: "/solutions/invoices",
    },
    {
      icon: Brain,
      title: "AI Decision Engine",
      subtitle: "Intelligence You Can Trust",
      description:
        "Predictive insights and recommendations powered by AI that explains its reasoning. No black boxes — just actionable intelligence.",
      features: [
        "Explainable AI recommendations",
        "Predictive analytics and forecasting",
        "Automated decision workflows",
        "Continuous learning and improvement",
      ],
      href: "/solutions/ai-engine",
    },
  ];

  const capabilities = [
    {
      icon: Layers,
      title: "Modular Architecture",
      description: "Deploy what you need. Each module works standalone or together.",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "SOC 2 certified. End-to-end encryption. Your data, protected.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Go live in weeks with our implementation team by your side.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Complete <span className="gradient-text">Operations Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              From orders to invoices, documents to decisions — six powerful modules 
              that form a unified execution spine for your enterprise operations.
            </p>
            <Link to="/demo">
              <Button variant="hero" size="xl">
                Request a Demo
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {modules.map((module, index) => (
              <div
                key={module.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-primary">{module.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{module.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {module.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={module.href}>
                    <Button variant="outline" className="group">
                      Learn More
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl gradient-card border border-border shadow-xl flex items-center justify-center">
                    <module.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Enterprise</h2>
            <p className="text-lg text-muted-foreground">
              Every aspect of NexusOps is designed for scale, security, and reliability.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.title} className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-accent mx-auto mb-6 flex items-center justify-center">
                  <cap.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
                <p className="text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to see the platform in action?
          </h2>
          <Link to="/demo">
            <Button variant="hero" size="xl">
              Schedule Your Demo
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
