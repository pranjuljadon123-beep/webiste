import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogPosts, categories } from "@/data/blogData";
import { Search, Clock, ArrowRight } from "lucide-react";

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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & <span className="gradient-text">Perspectives</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert insights on enterprise operations, AI, and the future of execution systems.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "All" && searchQuery === "" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blogs/${post.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-xl"
                >
                  <div className="aspect-video gradient-hero" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-medium text-primary">{post.category}</span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock size={14} />
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blogs/${post.slug}`}
                className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="aspect-[16/10] bg-accent" />
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
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
