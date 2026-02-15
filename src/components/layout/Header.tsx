import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import foraxisLogo from "@/assets/foraxis-logo.png";

const platformModules = [
  {
    title: "Order Management",
    href: "/solutions/order-management",
    description: "Central system of record for operational execution",
  },
  {
    title: "Document Intelligence",
    href: "/solutions/document-management",
    description: "Auto-generate and manage compliance-ready documents",
  },
  {
    title: "Procurement & Auctions",
    href: "/solutions/procurement",
    description: "RFQs, vendor management, and blind reverse auctions",
  },
  {
    title: "Shipment Tracking",
    href: "/solutions/tracking",
    description: "Multi-modal visibility with predictive ETAs",
  },
  {
    title: "Invoice Reconciliation",
    href: "/solutions/invoices",
    description: "Match invoices with contracts and orders automatically",
  },
  {
    title: "AI Decision Engine",
    href: "/solutions/ai-engine",
    description: "Predictive insights and explainable recommendations",
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={foraxisLogo} alt="ForAxis" className="w-10 h-10 rounded-xl object-cover" />
            <span className="font-display font-bold text-xl text-foreground">ForAxis</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Platform</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-4 lg:grid-cols-2">
                      {platformModules.map((module) => (
                        <NavigationMenuLink asChild key={module.href}>
                          <Link
                            to={module.href}
                            className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-semibold leading-none">{module.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {module.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/platform">
                    <Button variant="nav">How It Works</Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/resources">
                    <Button variant="nav">Resources</Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blogs">
                    <Button variant="nav">Blog</Button>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/about">
                    <Button variant="nav">Company</Button>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/demo">
              <Button variant="hero" size="lg">
                Request a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              <div className="py-2">
                <span className="text-sm font-semibold text-muted-foreground px-3">Platform</span>
                <div className="mt-2 space-y-1">
                  {platformModules.map((module) => (
                    <Link
                      key={module.href}
                      to={module.href}
                      className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="font-medium">{module.title}</div>
                      <div className="text-sm text-muted-foreground">{module.description}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/platform"
                className="px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                to="/resources"
                className="px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                to="/blogs"
                className="px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-lg hover:bg-accent transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </Link>

              <div className="pt-4 px-3">
                <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full">
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
