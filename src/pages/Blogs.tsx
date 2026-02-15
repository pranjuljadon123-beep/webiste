import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts, categories } from "@/data/blogData";
import { Search, Clock, ArrowRight, Calendar, User } from "lucide-react";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Blog & Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & <span className="gradient-text">Perspectives</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert insights on enterprise operations, AI, and the future of execution systems.
              Learn from industry leaders and stay ahead of the curve.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "All" && searchQuery === "" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="text-2xl font-bold">Featured Articles</h2>
              <span className="text-sm text-muted-foreground">Hand-picked by our team</span>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-xl block h-full"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock size={14} />
                          {post.readTime} min read
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User size={14} />
                          {post.author.name}
                        </div>
                        <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm font-medium">Read more</span>
                          <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/blogs/${post.slug}`}
                  className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg block h-full"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent text-accent-foreground">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} />
                        {post.readTime} min
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground mb-4">No articles found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                Clear filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Newsletter
            </span>
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on operations and AI delivered to your inbox weekly.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12"
              />
              <Button variant="hero" size="lg">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
