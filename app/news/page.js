'use client';

import { useState, useEffect } from 'react';
import BlogSidebar from "@/components/BlogSidebar";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

      if (!url || !consumerKey || !consumerSecret) {
        throw new Error('Missing WordPress API credentials');
      }

      const credentials = btoa(`${consumerKey}:${consumerSecret}`);
      
      // Fetch posts with embedded media (featured images)
      const response = await fetch(`${url}/wp-json/wp/v2/posts?per_page=100&_embed`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch blog posts: ${response.status}`);
      }

      const data = await response.json();
      console.log('Fetched posts:', data.length);
      console.log('First post _embedded:', data[0]?._embedded);
      console.log('First post featured_media ID:', data[0]?.featured_media);
      
      // If posts don't have featured media in _embedded, fetch them separately
      if (data.length > 0 && data[0].featured_media && (!data[0]._embedded || !data[0]._embedded['wp:featuredmedia'])) {
        console.log('Featured media not in _embedded, fetching separately...');
        
        // Fetch featured images for all posts that have them
        const postsWithImages = await Promise.all(
          data.map(async (post) => {
            if (post.featured_media && post.featured_media !== 0) {
              try {
                const mediaResponse = await fetch(`${url}/wp-json/wp/v2/media/${post.featured_media}`, {
                  headers: {
                    'Authorization': `Basic ${credentials}`,
                  },
                });
                const mediaData = await mediaResponse.json();
                
                // Add the media to _embedded
                if (!post._embedded) post._embedded = {};
                post._embedded['wp:featuredmedia'] = [mediaData];
                console.log('Fetched image for post:', post.id, mediaData.source_url);
              } catch (err) {
                console.error('Error fetching media for post', post.id, err);
              }
            }
            return post;
          })
        );
        setPosts(postsWithImages);
      } else {
        setPosts(data);
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError(err.message || 'Failed to load blog posts');
      setLoading(false);
    }
  };

  // Helper function to decode HTML entities (fixes &#8217; issues)
  const decodeHTMLEntities = (text) => {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  };

  // Helper function to get featured image
  const getFeaturedImage = (post) => {
    console.log('=== Getting Featured Image ===');
    console.log('Post ID:', post.id);
    console.log('Post has _embedded?', !!post._embedded);
    
    if (post._embedded) {
      console.log('_embedded keys:', Object.keys(post._embedded));
      console.log('Has wp:featuredmedia?', !!post._embedded['wp:featuredmedia']);
      
      if (post._embedded['wp:featuredmedia']) {
        console.log('featuredmedia array length:', post._embedded['wp:featuredmedia'].length);
        console.log('featuredmedia[0]:', post._embedded['wp:featuredmedia'][0]);
      }
    }
    
    // Try multiple possible locations for featured image
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      const media = post._embedded['wp:featuredmedia'][0];
      
      // Try source_url first (most common)
      if (media.source_url) {
        console.log('✅ Found source_url:', media.source_url);
        return media.source_url;
      }
      
      // Try media_details as backup
      if (media.media_details && media.media_details.sizes) {
        if (media.media_details.sizes.full) {
          console.log('✅ Found full size:', media.media_details.sizes.full.source_url);
          return media.media_details.sizes.full.source_url;
        }
        if (media.media_details.sizes.large) {
          console.log('✅ Found large size:', media.media_details.sizes.large.source_url);
          return media.media_details.sizes.large.source_url;
        }
      }
      
      // Try guid as last resort
      if (media.guid && media.guid.rendered) {
        console.log('✅ Found guid:', media.guid.rendered);
        return media.guid.rendered;
      }
    }
    
    console.log('❌ No featured image found, using fallback');
    
    // Use different placeholder for each post instead of same image
    const placeholders = [
      'assets/img/news/01.png',
      'assets/img/news/02.png',
      'assets/img/news/03.png'
    ];
    
    // Rotate through placeholders based on post ID
    const index = post.id % placeholders.length;
    return placeholders[index];
  };

  // Helper function to extract clean excerpt
  const getExcerpt = (post) => {
    if (post.excerpt && post.excerpt.rendered) {
      const temp = document.createElement('div');
      temp.innerHTML = post.excerpt.rendered;
      const text = temp.textContent || temp.innerText || '';
      return decodeHTMLEntities(text.trim());
    }
    return '';
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.getFullYear();
    
    // Add ordinal suffix (st, nd, rd, th)
    const ordinal = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
    
    return `${ordinal(day)} ${month} ${year}`;
  };

  // Helper function to get author name
  const getAuthorName = (post) => {
    if (post._embedded && post._embedded.author && post._embedded.author[0]) {
      return post._embedded.author[0].name;
    }
    return 'Admin';
  };

  // Helper function to get comment count (WordPress doesn't provide this by default in REST API)
  const getCommentCount = (post) => {
    // You can enable this in WordPress by installing a plugin or custom code
    // For now, we'll hide it or show 0
    return 0;
  };

  return (
    <FoodKingLayout>
      <PageBanner pageName={"blog page"} />
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
                    <h3 className="mt-3">Loading posts...</h3>
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger text-center" role="alert">
                    <h4>Error Loading Posts</h4>
                    <p>{error}</p>
                  </div>
                )}

                {!loading && !error && posts.length === 0 && (
                  <div className="text-center py-5">
                    <h3>No blog posts available</h3>
                    <p>Check back soon for updates!</p>
                  </div>
                )}

                {!loading && !error && posts.length > 0 && (
                  <div className="blog-posts">
                    {posts.map((post, index) => (
                      <div key={post.id} className="single-blog-post">
                        <div className="post-featured-thumb">
                          {getFeaturedImage(post) && (
                            <img 
                              src={getFeaturedImage(post)} 
                              alt={decodeHTMLEntities(post.title.rendered)}
                              style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover',
                                display: 'block'
                              }}
                              loading="eager"
                            />
                          )}
                        </div>
                        <div className="post-content">
                          <div className="post-meta">
                            <span>
                              <i className="fal fa-user" />
                              {getAuthorName(post)}
                            </span>
                            {getCommentCount(post) > 0 && (
                              <span>
                                <i className="fal fa-comments" />
                                {getCommentCount(post)} Comments
                              </span>
                            )}
                            <span>
                              <i className="fal fa-calendar-alt" />
                              {formatDate(post.date)}
                            </span>
                          </div>
                          <h2>
                            <Link href={`/news/${post.slug}`}>
                              {decodeHTMLEntities(post.title.rendered)}
                            </Link>
                          </h2>
                          <p>
                            {getExcerpt(post)}
                          </p>
                          <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="post-link">
                              <Link href={`/news/${post.slug}`}>
                                <i className="fas fa-arrow-right" /> Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {!loading && !error && posts.length > 12 && (
                  <div className="page-nav-wrap mt-5 text-center">
                    <ul>
                      <li>
                        <Link href="#" className="page-numbers">
                          <i className="fal fa-long-arrow-left" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="page-numbers">
                          01
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="page-numbers">
                          02
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="page-numbers">
                          ..
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="page-numbers">
                          <i className="fal fa-long-arrow-right" />
                        </Link>
                      </li>
                    </ul>
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

export default NewsPage;
