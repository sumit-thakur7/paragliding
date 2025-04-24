import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, User } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  author,
  date,
  image,
  index = 0,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="h-60 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3 text-sm text-neutral">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" /> 
            {date}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <User className="w-4 h-4 mr-1" /> 
            {author}
          </span>
        </div>
        <h3 className="font-heading font-bold text-xl text-dark mb-3">
          {title}
        </h3>
        <p className="text-neutral mb-4">{excerpt}</p>
        <Link href={`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <a className="text-primary font-accent font-medium hover:text-primary/80 transition flex items-center">
            Read More 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
