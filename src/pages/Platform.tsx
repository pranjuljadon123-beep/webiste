import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, FileText, ShoppingCart, Truck, Receipt, Brain, Layers, Lock, Zap, Play, CheckCircle2 } from "lucide-react";
import dashboardOrders from "@/assets/dashboard-orders.png";
import dashboardDocs from "@/assets/dashboard-docs.png";
import dashboardAi from "@/assets/dashboard-ai.png";
import dashboardTracking from "@/assets/dashboard-tracking.png";
import dashboardProcurement from "@/assets/dashboard-procurement.png";
import dashboardInvoices from "@/assets/dashboard-invoices.png";

const modules = [
  { icon: ClipboardList, title: "Order Management", subtitle: "The Execution Spine", description: "Every operation starts with an order. Our order management module serves as the central system of record, linking every downstream workflow to its source of truth.", features: ["Unified order creation and lifecycle management", "Complete audit trails and version history", "Real-time status tracking and notifications", "Seamless integration with ERP systems"], href: "/solutions/order-management", image: dashboardOrders },
  { icon: FileText, title: "Document Intelligence", subtitle: "Auto-Generate. Auto-Manage.", description: "Documents are auto-generated from order and execution data, ensuring consistency and compliance. Version control, approvals, and collaboration built-in.", features: ["Template-based document generation", "Intelligent extraction and parsing", "Approval workflows and e-signatures", "Compliance-ready audit trails"], href: "/solutions/document-management", image: dashboardDocs },
  { icon: ShoppingCart, title: "Procurement & Auctions", subtitle: "Fair. Competitive. Transparent.", description: "Run spot and contract RFQs with blind reverse auctions. Vendors see only their rank, not competitor quotes — ensuring fair competition and best pricing.", features: ["Blind reverse auction mechanism", "Vendor onboarding and qualification", "Contract management and compliance", "Spend analytics and reporting"], href: "/solutions/procurement", image: dashboardProcurement },
  { icon: Truck, title: "Shipment Tracking", subtitle: "Multi-Modal Visibility", description: "Track shipments across all modes with predictive ETAs and proactive exception alerts. Every shipment links back to its originating order.", features: ["Real-time multi-modal tracking", "Predictive ETA calculations", "Exception detection and alerts", "Carrier performance analytics"], href: "/solutions/tracking", image: dashboardTracking },
  { icon: Receipt, title: "Invoice Reconciliation", subtitle: "Match. Verify. Pay.", description: "Automatically match invoices with contracts, orders, and delivery documents. Highlight discrepancies before they become problems.", features: ["Three-way matching automation", "Discrepancy detection and resolution", "Payment scheduling and tracking", "Financial reporting and analytics"], href: "/solutions/invoices", image: dashboardDocs },
  { icon: Brain, title: "AI Decision Engine", subtitle: "Intelligence You Can Trust", description: "Predictive insights and recommendations powered by AI that explains its reasoning. No black boxes — just actionable intelligence.", features: ["Explainable AI recommendations", "Predictive analytics and forecasting", "Automated decision workflows", "Continuous learning and improvement"], href: "/solutions/ai-engine", image: dashboardAi },
];

const capabilities = [
  { icon: Layers, title: "Modular Architecture", description: "Deploy what you need. Each module works standalone or together as a unified platform." },
  { icon: Lock, title: "Enterprise Security", description: "SOC 2 certified. End-to-end encryption. Your data is protected at every layer." },
  { icon: Zap, title: "Rapid Deployment", description: "Go live in weeks with our implementation team by your side. No lengthy projects." },
];

const Platform = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-subtle overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Complete Platform</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">The Complete <span className="gradient-text">Operations Platform</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">From orders to invoices, documents to decisions — six powerful modules that form a unified execution spine for your enterprise operations.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo"><Button variant="hero" size="xl" className="group">Request a Demo<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
              <Button variant="outline" size="xl" className="group"><Play size={18} className="mr-2" />Watch Overview</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Flow */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {modules.map((module, index) => (
              <div key={module.title} className="flex items-center gap-4">
                <Link to={module.href} className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border hover:border-primary/50 transition-colors group">
                  <module.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium group-hover:text-primary transition-colors">{module.title.split(" ")[0]}</span>
                </Link>
                {index < modules.length - 1 && <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {modules.map((module, index) => (
              <motion.div key={module.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center"><module.icon className="w-6 h-6 text-primary-foreground" /></div>
                    <span className="text-sm font-medium text-primary">{module.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{module.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{module.description}</p>
                  <ul className="space-y-3 mb-8">
                    {module.features.map((feature) => (
                      <motion.li key={feature} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" /><span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link to={module.href}><Button variant="outline" className="group">Learn More<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <img src={module.image} alt={module.title} className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/30 via-transparent to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Enterprise Ready</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Enterprise</h2>
            <p className="text-lg text-muted-foreground">Every aspect of ForAxis is designed for scale, security, and reliability.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="text-center p-8 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-accent mx-auto mb-6 flex items-center justify-center"><cap.icon className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
                <p className="text-muted-foreground">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden gradient-hero p-12 lg:p-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Ready to see the platform in action?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">Schedule a personalized demo and discover how ForAxis can transform your operations.</p>
              <Link to="/demo"><Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group">Schedule Your Demo<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
