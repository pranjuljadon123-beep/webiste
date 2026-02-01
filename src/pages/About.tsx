import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Globe, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Execution-First",
      description:
        "We believe visibility without action is noise. Everything we build enables execution.",
    },
    {
      icon: Users,
      title: "Customer-Obsessed",
      description:
        "Our success is measured by our customers' success. Their challenges drive our innovation.",
    },
    {
      icon: Globe,
      title: "Enterprise-Ready",
      description:
        "We build for scale, security, and reliability from day one. No shortcuts.",
    },
    {
      icon: Award,
      title: "Transparency",
      description:
        "Our AI explains its reasoning. Our pricing is clear. Our roadmap is shared.",
    },
  ];

  const team = [
    { name: "Sarah Chen", role: "CEO & Co-Founder" },
    { name: "Michael Torres", role: "CTO & Co-Founder" },
    { name: "David Park", role: "VP of Engineering" },
    { name: "Lisa Zhang", role: "VP of Product" },
    { name: "Robert Kim", role: "VP of Sales" },
    { name: "Emma Wilson", role: "VP of Customer Success" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Operations</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're on a mission to transform how enterprises execute their operations—
              from reactive to proactive, from manual to intelligent.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Enterprise operations have become increasingly complex. Global supply chains,
                regulatory requirements, and customer expectations demand systems that don't
                just track what's happening—but actually execute.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We built NexusOps to be that system. A platform where every order, document,
                shipment, and invoice is connected. Where AI doesn't just predict—it recommends
                and executes. Where operations leaders can finally focus on strategy, not firefighting.
              </p>
            </div>
            <div className="aspect-square rounded-2xl gradient-hero" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-accent mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced operators and technologists building for operations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-3" />
                <h4 className="font-semibold text-sm">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're hiring across engineering, product, and go-to-market. Help us build
            the future of enterprise operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/careers">
              <Button variant="hero" size="lg">
                View Open Roles
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
