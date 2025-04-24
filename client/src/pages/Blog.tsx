import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogData } from "@/data/blogData";
import { formatDate } from "@/lib/utils";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-5xl text-white mb-4">Blog</h1>
          <p className="text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest paragliding tips, stories, and adventures from our community.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Featured <span className="text-secondary">Articles</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Explore our most popular articles about paragliding techniques, destinations, 
                safety tips, and inspiring stories from our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {blogData.featured.map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex items-center text-sm text-neutral mb-3">
                        <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {formatDate(post.date)}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center"><User className="h-4 w-4 mr-1" /> {post.author}</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-dark mb-3">{post.title}</h3>
                      <p className="text-neutral mb-4">{post.excerpt}</p>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="link" className="text-primary font-accent font-medium hover:text-primary/80 transition p-0 flex items-center">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Recent Posts */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Recent <span className="text-secondary">Articles</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Check out our latest blog posts to stay up-to-date with the paragliding world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogData.recent.map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition service-card">
                  <div className="h-60 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-neutral mb-3">
                      <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center"><User className="h-4 w-4 mr-1" /> {post.author}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{post.title}</h3>
                    <p className="text-neutral mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="link" className="text-primary font-accent font-medium hover:text-primary/80 transition p-0 flex items-center">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Categories */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl text-dark mb-4">
                Blog <span className="text-secondary">Categories</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-neutral">
                Browse articles by category to find topics that interest you most.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {blogData.categories.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
                  <div className="text-4xl mb-4 text-primary">{category.icon}</div>
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">{category.name}</h3>
                  <p className="text-neutral text-sm mb-4">{category.description}</p>
                  <Link href={`/blog/category/${category.slug}`}>
                    <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5">
                      Browse Articles
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Subscribe Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient bg-cover bg-center bg-fixed text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">Subscribe to Our Newsletter</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90">
              Get the latest paragliding articles, tips, and updates delivered directly to your inbox.
              We promise not to spam you – only valuable content related to paragliding.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                  required
                />
                <Button className="px-6 py-3 bg-secondary text-white font-accent font-medium rounded-full hover:bg-secondary/90 transition">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </motion.div>
  );
};

export default Blog;
