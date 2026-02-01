import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ClipboardList,
  FileText,
  ShoppingCart,
  Truck,
  Receipt,
  Brain,
  ArrowRight,
} from "lucide-react";
import dashboardOrders from "@/assets/dashboard-orders.png";
import dashboardDocs from "@/assets/dashboard-docs.png";
import dashboardAi from "@/assets/dashboard-ai.png";
import dashboardTracking from "@/assets/dashboard-tracking.png";

const modules = [
  {
    icon: ClipboardList,
    title: "Order Management",
    description: "Central system of record for operational execution with complete audit trails and real-time status updates.",
    color: "from-teal to-teal-light",
    slug: "order-management",
    image: dashboardOrders,
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Auto-generate documents from order and execution data with version control and approval workflows.",
    color: "from-teal-light to-ocean",
    slug: "document-management",
    image: dashboardDocs,
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Auctions",
    description: "Spot and contract RFQs with blind reverse auctioning for best pricing and fair competition.",
    color: "from-ocean to-ocean-light",
    slug: "procurement",
    image: dashboardOrders,
  },
  {
    icon: Truck,
    title: "Shipment Tracking",
    description: "Multi-modal visibility with predictive ETAs, exception alerts, and carrier analytics.",
    color: "from-ocean-light to-secondary",
    slug: "tracking",
    image: dashboardTracking,
  },
  {
    icon: Receipt,
    title: "Invoice Reconciliation",
    description: "Match invoices with contracts, orders, and documents automatically with discrepancy detection.",
    color: "from-secondary to-teal",
    slug: "invoices",
    image: dashboardDocs,
  },
  {
    icon: Brain,
    title: "AI Decision Engine",
    description: "Predictive insights with explainable recommendations, automated workflows, and continuous learning.",
    color: "from-teal to-ocean",
    slug: "ai-engine",
    image: dashboardAi,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const PlatformFlow = () => {
  return (
    <section className="py-20 lg:py-32 gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Complete Platform
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            One Platform.{" "}
            <span className="gradient-text">End-to-End Intelligence.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every module connects to form a unified execution spine — from the first order 
            to the final invoice, with AI powering every decision along the way.
          </p>
        </motion.div>

        {/* Flow Visualization */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal via-ocean to-secondary opacity-20 -translate-y-1/2" />

          {/* Modules Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {modules.map((module, index) => (
              <motion.div key={module.title} variants={itemVariants}>
                <Link
                  to={`/solutions/${module.slug}`}
                  className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block h-full"
                >
                  {/* Image Preview */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <module.icon className="w-7 h-7 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{module.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{module.description}</p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            to="/platform" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all group"
          >
            See how all modules work together
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformFlow;
