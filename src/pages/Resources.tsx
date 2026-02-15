import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, BookOpen, Download, ArrowRight } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    { icon: BookOpen, title: "Blog", description: "Expert insights on operations, AI, and digital transformation", href: "/blogs", cta: "Read Articles" },
    { icon: FileText, title: "Whitepapers", description: "In-depth research and analysis on industry trends", href: "#whitepapers", cta: "Coming Soon", disabled: true },
    { icon: Download, title: "Documentation", description: "Technical guides and API documentation", href: "#docs", cta: "Coming Soon", disabled: true },
  ];

  return (
    <Layout>
      <section className="py-20 lg:py-32 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & <span className="gradient-text">Learning</span></h1>
            <p className="text-lg text-muted-foreground">Everything you need to understand modern operations and get the most from ForAxis.</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {resourceCategories.map((category) => (
              <div key={category.title} className="p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6"><category.icon className="w-7 h-7 text-primary" /></div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                {category.disabled ? (
                  <Button variant="outline" disabled>{category.cta}</Button>
                ) : (
                  <Link to={category.href}><Button variant="outline" className="group">{category.cta}<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" /></Button></Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">Get the latest insights on operations and AI delivered to your inbox.</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
