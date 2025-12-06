'use client';

import { useState, useEffect } from 'react';
import BlogSidebar from "@/components/BlogSidebar";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const NewsDetailPage = ({ params }) => {
  const { slug } = params;
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      fetchBlogPost(slug);
    }
  }, [slug]);

  const fetchBlogPost = async (postSlug) => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

      if (!url || !consumerKey || !consumerSecret) {
        throw new Error('Missing WordPress API credentials');
      }

      const credentials = btoa(`${consumerKey}:${consumerSecret}`);
      
      const response = await fetch(`${url}/wp-json/wp/v2/posts?slug=${postSlug}&_embed`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch blog post: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.length === 0) {
        throw new Error('Blog post not found');
      }

      setPost(data[0]);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blog post:', err);
      setError(err.message || 'Failed to load blog post');
      setLoading(false);
    }
  };

  const decodeHTMLEntities = (text) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  };

  const getFeaturedImage = (post) => {
    // Try multiple possible locations for featured image
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      const media = post._embedded['wp:featuredmedia'][0];
      
      // Try source_url first (most common)
      if (media.source_url) {
        return media.source_url;
      }
      
      // Try media_details as backup
      if (media.media_details && media.media_details.sizes) {
        if (media.media_details.sizes.full) {
          return media.media_details.sizes.full.source_url;
        }
        if (media.media_details.sizes.large) {
          return media.media_details.sizes.large.source_url;
        }
      }
      
      // Try guid as last resort
      if (media.guid && media.guid.rendered) {
        return media.guid.rendered;
      }
    }
    
    return null;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    
    const ordinal = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
    
    return `${ordinal(day)} ${month} ${year}`;
  };

  const getAuthorName = (post) => {
    if (post._embedded && post._embedded.author && post._embedded.author[0]) {
      return post._embedded.author[0].name;
    }
    return 'Admin';
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={post ? decodeHTMLEntities(post.title.rendered) : "Blog Post"} />
      
      <section className="blog-wrapper news-wrapper section-padding section-bg">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                {loading && (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <h3 className="mt-3">Loading post...</h3>
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger text-center" role="alert">
                    <h4>Error Loading Post</h4>
                    <p>{error}</p>
                    <Link href="/news" className="theme-btn mt-3">
                      <span className="button-content-wrapper d-flex align-items-center">
                        <span className="button-text">Back to Blog</span>
                      </span>
                    </Link>
                  </div>
                )}

                {!loading && !error && post && (
                  <div className="blog-single-wrapper">
                    <div className="blog-single-content">
                      {/* Featured Image */}
                      {getFeaturedImage(post) && (
                        <div
                          className="post-featured-thumb bg-cover mb-4"
                          style={{
                            backgroundImage: `url("${getFeaturedImage(post)}")`,
                            height: '400px',
                            borderRadius: '8px'
                          }}
                        />
                      )}

                      {/* Post Meta */}
                      <div className="post-meta mb-3">
                        <span>
                          <i className="fal fa-user" />
                          {getAuthorName(post)}
                        </span>
                        <span>
                          <i className="fal fa-calendar-alt" />
                          {formatDate(post.date)}
                        </span>
                      </div>

                      {/* Post Title */}
                      <h2 className="mb-4">{decodeHTMLEntities(post.title.rendered)}</h2>

                      {/* Post Content */}
                      <div 
                        className="post-content"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        style={{
                          lineHeight: '1.8',
                          fontSize: '17px',
                          color: '#333',
                          fontFamily: 'inherit'
                        }}
                      />
                      <style jsx>{`
                        .post-content {
                          font-size: 17px;
                          line-height: 1.8;
                          color: #333;
                        }
                        .post-content p {
                          font-size: 17px;
                          line-height: 1.8;
                          margin-bottom: 20px;
                        }
                        .post-content h1 {
                          font-size: 32px;
                          font-weight: 700;
                          margin-top: 30px;
                          margin-bottom: 15px;
                        }
                        .post-content h2 {
                          font-size: 28px;
                          font-weight: 700;
                          margin-top: 25px;
                          margin-bottom: 15px;
                        }
                        .post-content h3 {
                          font-size: 24px;
                          font-weight: 600;
                          margin-top: 20px;
                          margin-bottom: 12px;
                        }
                        .post-content h4 {
                          font-size: 20px;
                          font-weight: 600;
                          margin-top: 18px;
                          margin-bottom: 10px;
                        }
                        .post-content ul,
                        .post-content ol {
                          font-size: 17px;
                          line-height: 1.8;
                          margin-bottom: 20px;
                          padding-left: 30px;
                        }
                        .post-content li {
                          margin-bottom: 10px;
                        }
                        .post-content strong,
                        .post-content b {
                          font-weight: 700;
                        }
                        .post-content em,
                        .post-content i {
                          font-style: italic;
                        }
                        .post-content a {
                          color: #ff6b35;
                          text-decoration: underline;
                        }
                        .post-content a:hover {
                          color: #e85a28;
                        }
                        .post-content img {
                          max-width: 100%;
                          height: auto;
                          border-radius: 8px;
                          margin: 20px 0;
                        }
                        .post-content blockquote {
                          border-left: 4px solid #ff6b35;
                          padding-left: 20px;
                          margin: 25px 0;
                          font-style: italic;
                          color: #666;
                        }
                      `}</style>

                      {/* Categories */}
                      {post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0] && post._embedded['wp:term'][0].length > 0 && (
                        <div className="post-categories mt-5 mb-4">
                          <h5>Categories:</h5>
                          <div className="d-flex flex-wrap gap-2">
                            {post._embedded['wp:term'][0].map((category) => (
                              <span 
                                key={category.id}
                                className="badge bg-primary"
                                style={{ fontSize: '14px', padding: '8px 15px' }}
                              >
                                {category.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      {post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][1] && post._embedded['wp:term'][1].length > 0 && (
                        <div className="post-tags mb-5">
                          <h5>Tags:</h5>
                          <div className="d-flex flex-wrap gap-2">
                            {post._embedded['wp:term'][1].map((tag) => (
                              <span 
                                key={tag.id}
                                style={{
                                  display: 'inline-block',
                                  padding: '6px 12px',
                                  background: '#f5f5f5',
                                  borderRadius: '4px',
                                  fontSize: '14px',
                                  color: '#666'
                                }}
                              >
                                #{tag.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Back to Blog Button */}
                      <div className="mt-5">
                        <Link href="/news" className="theme-btn">
                          <span className="button-content-wrapper d-flex align-items-center">
                            <span className="button-icon">
                              <i className="far fa-arrow-left" />
                            </span>
                            <span className="button-text">Back to Blog</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};

export default NewsDetailPage;
