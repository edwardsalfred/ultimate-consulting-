import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogPosts';
import { loadMarkdownPosts, MarkdownPost } from '../lib/blogLoader';

const ShareBar = ({ title }: { title: string }) => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-3 mt-12 pt-8 border-t border-gray-100">
      <span className="text-sm font-semibold text-gray-500 mr-1">Share the Post:</span>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
      >
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </a>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center hover:bg-sky-600 transition-colors"
      >
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-800 transition-colors"
      >
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    </div>
  );
};

export default function BlogPostPage() {
  const { slug } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Check markdown posts first (they take priority)
  const markdownPosts = loadMarkdownPosts();
  const markdownPost: MarkdownPost | undefined = markdownPosts.find((p) => p.slug === slug);

  // Fall back to hardcoded posts
  const hardcodedPost = !markdownPost ? blogPosts.find((p) => p.slug === slug) : undefined;

  // Common metadata
  const postMeta = markdownPost || hardcodedPost;

  if (!postMeta) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
        <Navbar />
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-20 overflow-hidden w-full text-center shadow-lg border-b border-blue-900/50">
          <h1 className="text-3xl font-bold text-white relative z-10">Post Not Found</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-4 py-20">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">This article is unavailable</h2>
          <p className="text-gray-500 mb-8 max-w-md text-center">
            This article is not available or is still being drafted.
          </p>
          <Link to="/insights" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
            Back to Ultimate Insights
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden shadow-xl mb-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link to="/insights" className="inline-flex items-center text-sm font-semibold text-gray-300 hover:text-white mb-10 transition-colors uppercase tracking-widest drop-shadow-md">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insight Hub
          </Link>

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 block mb-6 drop-shadow-sm">
            {postMeta.category}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 shadow-black/50 drop-shadow-lg">
            {postMeta.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 font-medium">
            <span className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm">
                <User className="w-5 h-5 text-gray-100" />
              </div>
              <span className="text-white drop-shadow-md">{postMeta.author}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block"></span>
            <span className="flex items-center gap-2 drop-shadow-md">
              <Calendar className="w-4 h-4 text-white/50" />
              <span className="text-white">{postMeta.date}</span>
            </span>
          </div>
        </div>
      </div>

      <main className="pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Image */}
          {postMeta.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full h-80 md:h-[500px] rounded-3xl overflow-hidden mb-16 shadow-md border border-gray-100"
            >
              <img
                src={postMeta.image}
                alt={postMeta.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            {markdownPost ? (
              /* Markdown-sourced post: render HTML with prose styles */
              <div
                className="prose-blog"
                dangerouslySetInnerHTML={{ __html: markdownPost.htmlContent }}
              />
            ) : (
              /* Hardcoded JSX post */
              hardcodedPost?.content
            )}
            <ShareBar title={postMeta.title} />
          </div>

        </article>
      </main>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-50 border-t border-gray-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #1C82E2 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-4">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to See What's Possible?
            </h2>
            <p className="text-lg text-gray-500 mb-10">
              Let's talk about your institution's goals and how Ultimate Consulting can help you modernize.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-base"
            >
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
