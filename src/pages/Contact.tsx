import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, title: "Email", details: "contact@foraxis.com", href: "mailto:contact@foraxis.com" },
    { icon: Phone, title: "Phone", details: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, title: "Office", details: "San Francisco, CA", href: "#" },
  ];

  return (
    <Layout>
      <section className="py-20 lg:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in <span className="gradient-text">Touch</span></h1>
              <p className="text-lg text-muted-foreground mb-12">
                Have a question about ForAxis? Want to learn more about how we can help your operations? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a key={item.title} href={item.href} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0"><item.icon className="w-5 h-5 text-primary" /></div>
                    <div><h3 className="font-semibold">{item.title}</h3><p className="text-muted-foreground">{item.details}</p></div>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2"><Label htmlFor="name">Name *</Label><Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" /></div>
                <div className="space-y-2"><Label htmlFor="email">Email *</Label><Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@company.com" /></div>
                <div className="space-y-2"><Label htmlFor="subject">Subject *</Label><Input id="subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="How can we help?" /></div>
                <div className="space-y-2"><Label htmlFor="message">Message *</Label><Textarea id="message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us more..." rows={5} /></div>
                <Button type="submit" variant="hero" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
