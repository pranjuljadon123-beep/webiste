import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogData";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Bookmark, ArrowRight } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blogs"><Button variant="outline"><ArrowLeft className="mr-2" size={16} />Back to Blog</Button></Link>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);
  const sections = post.content.split(/(?=^# |^## |^### )/m).filter(Boolean);

  return (
    <Layout>
      <article className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"><ArrowLeft size={16} />Back to Blog</Link>
          </motion.div>

          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{post.category}</span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground"><Clock size={14} />{post.readTime} min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">{post.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{post.excerpt}</p>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">{post.author.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-muted-foreground">{post.author.role}</div>
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} />
                {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
          </motion.header>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="max-w-4xl mx-auto mb-12">
            <div className="aspect-[2/1] rounded-2xl gradient-hero relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-bold text-primary-foreground/10">{post.title.charAt(0)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {sections.map((section, index) => {
                const lines = section.trim().split('\n');
                const firstLine = lines[0];
                const isH1 = firstLine.startsWith('# ');
                const isH2 = firstLine.startsWith('## ');
                const isH3 = firstLine.startsWith('### ');
                let title = '';
                let content = section;
                if (isH1 || isH2 || isH3) { title = firstLine.replace(/^#+\s/, ''); content = lines.slice(1).join('\n'); }

                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="mb-8">
                    {isH1 && <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">{title}</h2>}
                    {isH2 && <h3 className="text-2xl font-bold mt-10 mb-4 text-foreground">{title}</h3>}
                    {isH3 && <h4 className="text-xl font-semibold mt-8 mb-3 text-foreground">{title}</h4>}
                    {content.split('\n\n').map((para, pIndex) => {
                      if (!para.trim()) return null;
                      if (para.includes('\n- ') || para.startsWith('- ')) {
                        const items = para.split('\n').filter(l => l.startsWith('- '));
                        return (<ul key={pIndex} className="list-disc list-inside space-y-2 mb-4 text-foreground/80">{items.map((item, iIndex) => (<li key={iIndex}>{item.replace(/^-\s/, '')}</li>))}</ul>);
                      }
                      if (para.match(/^\d+\./)) {
                        const items = para.split('\n').filter(l => l.match(/^\d+\./));
                        return (<ol key={pIndex} className="list-decimal list-inside space-y-2 mb-4 text-foreground/80">{items.map((item, iIndex) => (<li key={iIndex}>{item.replace(/^\d+\.\s/, '')}</li>))}</ol>);
                      }
                      const formattedPara = para.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
                      return (<p key={pIndex} className="text-foreground/80 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formattedPara }} />);
                    })}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag size={16} className="text-muted-foreground" />
                {post.tags.map((tag) => (<span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">{tag}</span>))}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm"><Share2 size={14} className="mr-2" />Share</Button>
                <Button variant="outline" size="sm"><Bookmark size={14} className="mr-2" />Save</Button>
              </div>
            </div>
          </motion.div>

          {relatedPosts.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mt-16">
              <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link key={related.id} to={`/blogs/${related.slug}`} className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent text-accent-foreground mb-3 inline-block">{related.category}</span>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{related.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{related.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">Read more<ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl gradient-hero text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Ready to transform your operations?</h3>
            <p className="text-primary-foreground/80 mb-6">See how For Axis can help you implement these insights.</p>
            <Link to="/demo"><Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">Request a Demo<ArrowRight className="ml-2" size={16} /></Button></Link>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
