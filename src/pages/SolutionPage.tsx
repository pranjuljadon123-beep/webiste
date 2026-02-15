import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight, ArrowLeft, CheckCircle2, ClipboardList, FileText, ShoppingCart, Truck, Receipt, Brain, Play,
} from "lucide-react";
import dashboardOrders from "@/assets/dashboard-orders.png";
import dashboardDocs from "@/assets/dashboard-docs.png";
import dashboardAi from "@/assets/dashboard-ai.png";
import dashboardTracking from "@/assets/dashboard-tracking.png";

const solutionsData = {
  "order-management": {
    icon: ClipboardList,
    title: "Order Management",
    subtitle: "The Execution Spine",
    heroDescription: "Every operation starts with an order. Our order management module serves as the central system of record, linking every downstream workflow to its source of truth.",
    problem: "Orders are scattered across ERPs, spreadsheets, and emails. When something goes wrong, finding the source of truth takes hours. Downstream teams work with outdated information. Manual processes lead to errors, delays, and frustrated teams.",
    solution: "ForAxis Order Management creates a unified, real-time view of every order. From creation to completion, every change is tracked, every stakeholder is notified, and every related process stays synchronized. It's the foundation everything else builds on.",
    image: dashboardOrders,
    stats: [
      { value: "60%", label: "Faster Processing" },
      { value: "99.5%", label: "Order Accuracy" },
      { value: "45%", label: "Cost Reduction" },
    ],
    benefits: [
      "Single source of truth for all operational orders",
      "Complete audit trail with version history",
      "Real-time status updates and notifications",
      "Seamless integration with ERP and downstream systems",
      "Automated workflow triggers based on order events",
      "Custom fields and workflows for your industry",
    ],
    features: [
      { title: "Unified Order Creation", description: "Create orders from any source—API, portal, email, EDI—into a single standardized format." },
      { title: "Lifecycle Management", description: "Track every stage from draft to completion with configurable statuses and workflows." },
      { title: "Relationship Mapping", description: "Link orders to documents, shipments, invoices, and any related entities automatically." },
      { title: "Smart Notifications", description: "Alert the right people at the right time based on order events and exceptions." },
    ],
    faqs: [
      { question: "How does this integrate with our existing ERP?", answer: "ForAxis integrates with all major ERPs via API or file-based integration. Orders can sync bidirectionally, with ForAxis serving as the operational layer on top." },
      { question: "Can we customize the order fields and workflows?", answer: "Yes. Every field, status, and workflow can be customized to match your industry and processes. No coding required for most configurations." },
      { question: "How do we handle orders from multiple channels?", answer: "Orders from any channel—web portals, API, EDI, email—are normalized into a single format while preserving source information for traceability." },
    ],
  },
  "document-management": {
    icon: FileText,
    title: "Document Intelligence",
    subtitle: "Auto-Generate. Auto-Manage.",
    heroDescription: "Documents are auto-generated from order and execution data, ensuring consistency and compliance. Version control, approvals, and collaboration built-in.",
    problem: "Documents are created manually, leading to errors and inconsistencies. Version control via email causes confusion. Finding the right document at audit time is a nightmare. Compliance teams spend hours chasing paperwork.",
    solution: "ForAxis Document Intelligence auto-generates documents from operational data, manages versions intelligently, and links every document to its related transactions. Say goodbye to document chaos.",
    image: dashboardDocs,
    stats: [
      { value: "80%", label: "Time Saved" },
      { value: "99%", label: "Compliance Rate" },
      { value: "Zero", label: "Lost Documents" },
    ],
    benefits: [
      "Template-based auto-generation from order data",
      "Intelligent extraction from incoming documents",
      "Version control with change tracking",
      "Approval workflows with e-signatures",
      "Full audit trail for compliance",
      "AI-powered search and classification",
    ],
    features: [
      { title: "Auto-Generation", description: "Generate POs, BOLs, invoices, and custom documents automatically from order and execution data." },
      { title: "Intelligent Extraction", description: "AI reads incoming documents and extracts structured data back into your operational systems." },
      { title: "Version Control", description: "Track every change, who made it, and why. Roll back or compare versions instantly." },
      { title: "Approval Workflows", description: "Configure multi-stage approvals with e-signatures and automated routing." },
    ],
    faqs: [
      { question: "What document types are supported?", answer: "We support all common operational documents including purchase orders, bills of lading, commercial invoices, packing lists, certificates, and custom document types." },
      { question: "How accurate is the AI extraction?", answer: "Our AI achieves 95%+ accuracy on structured documents. For complex or handwritten documents, human review workflows ensure quality." },
      { question: "Can we use our existing templates?", answer: "Yes. Existing templates can be imported and configured for auto-generation. Our team helps with template optimization during implementation." },
    ],
  },
  procurement: {
    icon: ShoppingCart,
    title: "Procurement & Reverse Auctions",
    subtitle: "Fair. Competitive. Transparent.",
    heroDescription: "Run spot and contract RFQs with blind reverse auctions. Vendors see only their rank, not competitor quotes—ensuring fair competition and best pricing.",
    problem: "Traditional auctions damage vendor relationships. Procurement cycles are slow and manual. Price negotiations happen in silos without market context. You're leaving money on the table.",
    solution: "For Axis Procurement enables blind reverse auctions where vendors compete fairly, plus streamlined RFQ management for spot and contract purchasing. Better prices, better relationships.",
    image: dashboardOrders,
    stats: [
      { value: "22%", label: "Cost Savings" },
      { value: "3x", label: "Faster Cycles" },
      { value: "100%", label: "Fair Competition" },
    ],
    benefits: [
      "15-25% cost savings through competitive bidding",
      "Preserved vendor relationships with blind bidding",
      "Streamlined RFQ creation and management",
      "Vendor qualification and performance tracking",
      "Contract compliance monitoring",
      "Spend analytics and reporting",
    ],
    features: [
      { title: "Blind Reverse Auctions", description: "Vendors see only their rank, not competitor prices. Fair competition without relationship damage." },
      { title: "RFQ Management", description: "Create, distribute, and evaluate RFQs for spot purchases and long-term contracts." },
      { title: "Vendor Management", description: "Onboard, qualify, and track vendor performance across all transactions." },
      { title: "Spend Analytics", description: "Visualize spending patterns, vendor concentration, and savings opportunities." },
    ],
    faqs: [
      { question: "How do blind auctions work?", answer: "Vendors submit bids and see only their rank (e.g., '3rd of 5'). They can revise bids to improve rank without knowing competitor prices. This ensures fair competition." },
      { question: "What about quality, not just price?", answer: "Auction scoring can weight quality, delivery, and other factors alongside price. Only qualified vendors can participate." },
      { question: "How do vendors react to auctions?", answer: "Vendors prefer blind auctions to visible ones. The fairness and reduced gaming creates better long-term relationships." },
    ],
  },
  tracking: {
    icon: Truck,
    title: "Shipment Tracking & Visibility",
    subtitle: "Multi-Modal Visibility",
    heroDescription: "Track shipments across all modes with predictive ETAs and proactive exception alerts. Every shipment links back to its originating order.",
    problem: "Visibility is fragmented across carriers and modes. ETAs are unreliable. Exceptions are discovered too late to respond effectively. Teams are frustrated with lack of updates.",
    solution: "ForAxis Tracking provides unified visibility across all carriers and modes, with predictive ETAs and proactive exception management. Know what's happening before it becomes a problem.",
    image: dashboardTracking,
    stats: [
      { value: "30%", label: "Better ETAs" },
      { value: "500+", label: "Carriers" },
      { value: "24/7", label: "Visibility" },
    ],
    benefits: [
      "Unified tracking across all carriers and modes",
      "Predictive ETAs based on real-time conditions",
      "Proactive exception detection and alerts",
      "Order-linked shipment visibility",
      "Carrier performance analytics",
      "Branded tracking portals",
    ],
    features: [
      { title: "Multi-Modal Tracking", description: "Track ocean, air, road, and rail shipments from a single interface." },
      { title: "Predictive ETAs", description: "AI-powered predictions that account for weather, congestion, and historical patterns." },
      { title: "Exception Management", description: "Detect delays and disruptions before they impact your operations." },
      { title: "Carrier Analytics", description: "Compare carrier performance on time, cost, and service quality." },
    ],
    faqs: [
      { question: "Which carriers are supported?", answer: "We integrate with 500+ carriers globally, covering ocean, air, road, and rail. New carriers can be added within days." },
      { question: "How accurate are predictive ETAs?", answer: "Our ETAs are 30% more accurate than carrier-provided estimates, continuously improving with machine learning." },
      { question: "Can we provide tracking to stakeholders?", answer: "Yes. You can provide branded tracking portals or embed tracking widgets in your own applications." },
    ],
  },
  invoices: {
    icon: Receipt,
    title: "Invoice Reconciliation",
    subtitle: "Match. Verify. Pay.",
    heroDescription: "Automatically match invoices with contracts, orders, and delivery documents. Highlight discrepancies before they become problems.",
    problem: "Manual invoice matching is slow and error-prone. Discrepancies are caught late, causing disputes and delayed payments. Finance teams are overwhelmed with exception handling.",
    solution: "ForAxis Invoice Reconciliation automates three-way matching, highlights discrepancies instantly, and streamlines the resolution process. Your finance team will thank you.",
    image: dashboardDocs,
    stats: [
      { value: "90%", label: "Auto-Matched" },
      { value: "60%", label: "Faster Processing" },
      { value: "95%", label: "First-Pass Accuracy" },
    ],
    benefits: [
      "Automated three-way matching",
      "Real-time discrepancy detection",
      "Streamlined dispute resolution",
      "Reduced processing time by 60%+",
      "Improved vendor relationships",
      "Complete audit trail for compliance",
    ],
    features: [
      { title: "Automated Matching", description: "Match invoices against POs, contracts, and delivery documents automatically." },
      { title: "Discrepancy Detection", description: "Identify price, quantity, and term discrepancies before payment." },
      { title: "Resolution Workflows", description: "Route discrepancies to the right teams with context for fast resolution." },
      { title: "Payment Scheduling", description: "Optimize payment timing for cash flow while maintaining vendor terms." },
    ],
    faqs: [
      { question: "What types of discrepancies are detected?", answer: "We detect price differences, quantity mismatches, unauthorized charges, duplicate invoices, and contract term violations." },
      { question: "How do invoices get into the system?", answer: "Invoices can be uploaded, emailed, or integrated via EDI or API. AI extraction handles various formats automatically." },
      { question: "What about complex pricing agreements?", answer: "We support tiered pricing, volume discounts, rebates, and custom pricing rules. The matching engine learns your specific agreements." },
    ],
  },
  "ai-engine": {
    icon: Brain,
    title: "AI Decision Engine",
    subtitle: "Intelligence You Can Trust",
    heroDescription: "Predictive insights and recommendations powered by AI that explains its reasoning. No black boxes—just actionable intelligence.",
    problem: "AI tools are either too simple or too opaque. Predictions without explanations don't drive action. Automation without guardrails creates risk. Your team doesn't trust the recommendations.",
    solution: "ForAxis AI Engine combines predictive analytics with explainable recommendations and controlled automation—AI you can trust and act on. Every recommendation shows its reasoning.",
    image: dashboardAi,
    stats: [
      { value: "3x", label: "Faster Decisions" },
      { value: "85%", label: "Recommendation Accuracy" },
      { value: "100%", label: "Explainable" },
    ],
    benefits: [
      "Explainable AI recommendations",
      "Predictive analytics for proactive decisions",
      "Automated workflows within defined guardrails",
      "Continuous learning from outcomes",
      "Cross-module intelligence",
      "Human-in-the-loop controls",
    ],
    features: [
      { title: "Explainable Recommendations", description: "Every AI recommendation comes with clear reasoning—what, why, and confidence level." },
      { title: "Predictive Analytics", description: "Forecast demand, predict delays, and identify risks before they materialize." },
      { title: "Automated Workflows", description: "Define parameters for autonomous actions, with escalation for exceptions." },
      { title: "Outcome Learning", description: "AI improves continuously based on which recommendations were accepted and their outcomes." },
    ],
    faqs: [
      { question: "What makes AI 'explainable'?", answer: "Every recommendation shows the data it used, the patterns it recognized, and the reasoning chain. You understand why before you decide whether to act." },
      { question: "Can AI make decisions automatically?", answer: "Within guardrails you define. Low-risk, high-confidence decisions can be automated. Others require human approval." },
      { question: "How does the AI learn?", answer: "The AI learns from your data, your decisions, and your outcomes. It gets smarter the more you use it, specific to your operations." },
    ],
  },
};

type SolutionKey = keyof typeof solutionsData;

const SolutionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? solutionsData[slug as SolutionKey] : null;

  if (!solution) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Solution Not Found</h1>
          <Link to="/platform">
            <Button variant="outline">
              <ArrowLeft className="mr-2" size={16} />
              View All Solutions
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = solution.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-subtle overflow-hidden">
        <div className="container mx-auto px-4">
          <Link to="/platform" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={16} />
            All Solutions
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-primary">{solution.subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{solution.title}</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">{solution.heroDescription}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo">
                  <Button variant="hero" size="xl" className="group">
                    Request a Demo
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl" className="group">
                  <Play size={18} className="mr-2" />
                  Watch Video
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                {solution.stats.map((stat, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }} className="text-center sm:text-left">
                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img src={solution.image} alt={solution.title} className="w-full h-auto" />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 gradient-hero opacity-20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 gradient-hero opacity-20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 bg-destructive/5 rounded-2xl border border-destructive/20">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4"><span className="text-2xl">😤</span></div>
              <h3 className="text-xl font-bold mb-4 text-destructive">The Problem</h3>
              <p className="text-foreground/80 leading-relaxed">{solution.problem}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 bg-primary/5 rounded-2xl border border-primary/20">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"><span className="text-2xl">✨</span></div>
              <h3 className="text-xl font-bold mb-4 text-primary">The Solution</h3>
              <p className="text-foreground/80 leading-relaxed">{solution.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold">Key Benefits</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {solution.benefits.map((benefit, index) => (
              <motion.div key={benefit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Capabilities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {solution.features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center mb-4"><span className="text-primary-foreground font-bold">{index + 1}</span></div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {solution.faqs.map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <AccordionItem value={`faq-${index}`} className="bg-background rounded-xl border border-border px-6 data-[state=open]:border-primary/30">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden gradient-hero p-12 lg:p-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Ready to see {solution.title} in action?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">Schedule a personalized demo and discover how we can transform your operations.</p>
              <Link to="/demo">
                <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group">
                  Schedule Your Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionPage;
