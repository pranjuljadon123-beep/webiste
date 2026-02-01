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
import { CheckCircle2, Shield, Users, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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

  return (
    <Layout>
      <section className="py-20 lg:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="lg:sticky lg:top-32">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                See NexusOps <span className="gradient-text">in Action</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Get a personalized demo tailored to your industry and use case. 
                Our team will show you exactly how NexusOps can transform your operations.
              </p>

              <div className="space-y-6 mb-12">
                <h3 className="font-semibold text-lg">What you'll see:</h3>
                {[
                  "Complete platform walkthrough",
                  "Industry-specific use cases",
                  "AI capabilities and automation",
                  "Integration possibilities",
                  "ROI calculator and pricing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Trust Signals */}
              <div className="space-y-4">
                {trustSignals.map((signal) => (
                  <div key={signal.title} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                      <signal.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{signal.title}</h4>
                      <p className="text-sm text-muted-foreground">{signal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Request Your Demo</h2>
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
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role *</Label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                  >
                    <SelectTrigger>
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
                    <SelectTrigger>
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

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Request Demo
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Demo;
