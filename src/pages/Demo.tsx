import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Shield, Users, Clock, Sparkles, ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import dashboardAi from "@/assets/dashboard-ai.png";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    region: "",
    useCase: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demo request submitted! Our team will contact you within 24 hours.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      role: "",
      region: "",
      useCase: "",
    });
  };

  const trustSignals = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Implementation team and 24/7 technical support",
    },
    {
      icon: Clock,
      title: "Fast Deployment",
      description: "Go live in weeks, not months",
    },
  ];

  const demoFeatures = [
    "Complete platform walkthrough tailored to your industry",
    "Live demonstration of AI recommendations",
    "Custom ROI calculator for your use case",
    "Integration possibilities with your existing systems",
    "Pricing and implementation timeline",
  ];

  return (
    <Layout>
      <section className="py-20 lg:py-32 gradient-subtle overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:sticky lg:top-32"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Get Started
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                See NexusOps <span className="gradient-text">in Action</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get a personalized demo tailored to your industry and use case. 
                Our team will show you exactly how NexusOps can transform your operations.
              </p>

              {/* Video Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden mb-8 group cursor-pointer"
              >
                <img
                  src={dashboardAi}
                  alt="Platform Preview"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-primary ml-1" />
                  </div>
                </div>
              </motion.div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-lg">What you'll see:</h3>
                {demoFeatures.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Trust Signals */}
              <div className="space-y-4">
                {trustSignals.map((signal, index) => (
                  <motion.div
                    key={signal.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <signal.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{signal.title}</h4>
                      <p className="text-sm text-muted-foreground">{signal.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold">Request Your Demo</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Fill out the form and our team will reach out within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Inc."
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role *</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cxo">C-Level Executive</SelectItem>
                      <SelectItem value="vp">VP / Director</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="analyst">Analyst / Specialist</SelectItem>
                      <SelectItem value="it">IT / Technical</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="region">Region *</Label>
                  <Select
                    value={formData.region}
                    onValueChange={(value) => setFormData({ ...formData, region: value })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select your region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="na">North America</SelectItem>
                      <SelectItem value="eu">Europe</SelectItem>
                      <SelectItem value="apac">Asia Pacific</SelectItem>
                      <SelectItem value="latam">Latin America</SelectItem>
                      <SelectItem value="mea">Middle East & Africa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="useCase">Tell us about your use case</Label>
                  <Textarea
                    id="useCase"
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    placeholder="What challenges are you looking to solve?"
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full group">
                  Request Demo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                  We'll never share your information with third parties.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Join 500+ enterprise teams already using NexusOps
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["Fortune 500", "Global Logistics", "Manufacturing", "Retail", "Pharma"].map((logo) => (
                <div
                  key={logo}
                  className="px-6 py-3 rounded-lg bg-muted/50 text-muted-foreground font-semibold"
                >
                  {logo}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
