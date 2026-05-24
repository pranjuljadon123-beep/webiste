import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Globe, Award, Rocket, Heart, Lightbulb, Shield } from "lucide-react";
import shippingContainers from "@/assets/shipping-containers.jpg";

const About = () => {
  const values = [
    { icon: Target, title: "Execution-First", description: "We believe visibility without action is noise. Everything we build enables execution, not just observation." },
    { icon: Heart, title: "Innovation-Driven", description: "We push boundaries in logistics technology, constantly seeking better solutions for complex operations." },
    { icon: Shield, title: "Enterprise-Ready", description: "We build for scale, security, and reliability from day one. No shortcuts, no compromises." },
    { icon: Lightbulb, title: "Transparency", description: "Our AI explains its reasoning. Our pricing is clear. Our roadmap is shared openly." },
  ];

  const milestones = [
    { year: "Early 2026", event: "Three friends in Bangalore come together with a shared vision to fix broken enterprise operations" },
    { year: "Mid 2026", event: "Daistrix is born — platform development begins with a focus on execution-first design" },
    { year: "2026", event: "Full platform launch with 6 integrated modules, headquartered in Bangalore, India" },
  ];

  const stats = [
    { value: "6", label: "Platform Modules" },
    { value: "500+", label: "Carrier Integrations" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-subtle overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">About Daistrix</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Operations</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're on a mission to transform how enterprises execute their operations—
              from reactive to proactive, from manual to intelligent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Operations Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Daistrix was founded in 2026 by three friends in Bangalore, India, who saw
                firsthand how broken enterprise operations were — scattered across spreadsheets,
                emails, and disconnected tools. They knew there had to be a better way.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a shared frustration became Daistrix — a platform where every order,
                document, shipment, and invoice is connected. Where AI doesn't just predict — it
                recommends and executes. Built from Bangalore for the world.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img src={shippingContainers} alt="Shipping containers at port" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 gradient-hero opacity-20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 gradient-hero opacity-20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold">The Daistrix Story</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              {milestones.map((milestone, index) => (
                <motion.div key={milestone.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative pl-20 pb-12 last:pb-0">
                  <div className="absolute left-4 w-8 h-8 rounded-full gradient-hero flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  </div>
                  <div className="font-bold text-primary mb-1">{milestone.year}</div>
                  <div className="text-foreground">{milestone.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we build.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-accent mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Roots</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Born in Bangalore</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Three friends, one shared frustration, and a relentless drive to fix enterprise operations.
              Daistrix is proudly headquartered in Bangalore, India — building world-class technology
              for global enterprises.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Bangalore, India · Founded 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden gradient-hero p-12 lg:p-20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Join Our Team</h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                We're hiring across engineering, product, and go-to-market. Help us build the future of enterprise operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/careers">
                  <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group">
                    View Open Roles
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero-outline" size="xl">Contact Us</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
