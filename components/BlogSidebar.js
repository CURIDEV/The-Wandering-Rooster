'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

const BlogSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSidebarData();
  }, []);

  const fetchSidebarData = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

      if (!url || !consumerKey || !consumerSecret) {
        setLoading(false);
        return;
      }

      const credentials = btoa(`${consumerKey}:${consumerSecret}`);
      
      // Fetch categories and recent posts in parallel
      // REMOVED hide_empty parameter to show categories even with 0 posts
      const [categoriesResponse, postsResponse] = await Promise.all([
        fetch(`${url}/wp-json/wp/v2/categories?per_page=100`, {
          headers: { 
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        }),
        fetch(`${url}/wp-json/wp/v2/posts?per_page=3&_embed`, {
          headers: { 
            'Authorization': `Basic ${credentials}`,
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        })
      ]);

      if (categoriesResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        
        // Filter out ONLY "Uncategorized" - keep everything else including empty categories
        const filteredCategories = categoriesData.filter(cat => 
          cat.slug !== 'uncategorized'
        );
        
        setCategories(filteredCategories);
      }

      if (postsResponse.ok) {
        const postsData = await postsResponse.json();
        setRecentPosts(postsData);
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching sidebar data:', err);
      setLoading(false);
    }
  };

  // Helper to decode HTML entities
  const decodeHTMLEntities = (text) => {
    if (typeof window === 'undefined') return text;
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  };

  // Helper to get featured image
  const getFeaturedImage = (post) => {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return 'assets/img/news/default-post.jpg';
  };

  // Helper to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric',
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Get appropriate Font Awesome icon based on category name/slug
  const getCategoryIcon = (category) => {
    const slug = category.slug.toLowerCase();
    const name = category.name.toLowerCase();
    
    // Match your specific Key West categories
    if (slug.includes('thing') || name.includes('things to do')) return 'fas fa-map-marked-alt';
    if (slug.includes('event') || name.includes('event') || name.includes('local event')) return 'fas fa-calendar-alt';
    if (slug.includes('food') || name.includes('food')) return 'fas fa-utensils';
    if (slug.includes('beach') || name.includes('beach')) return 'fas fa-umbrella-beach';
    if (slug.includes('gem') || slug.includes('hidden')) return 'fas fa-gem';
    if (slug.includes('guide')) return 'fas fa-book-open';
    if (slug.includes('restaurant')) return 'fas fa-utensils';
    if (slug.includes('local')) return 'fas fa-map-marker-alt';
    if (slug.includes('news')) return 'fas fa-newspaper';
    if (slug.includes('tip')) return 'fas fa-lightbulb';
    
    // Default icon
    return 'fas fa-folder';
  };

  return (
    <div className="col-12 col-lg-4">
      <div className="main-sidebar">
        
        {/* Recent Posts */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Recent Posts</h4>
          </div>
          <div className="popular-posts">
            {loading ? (
              <p style={{ textAlign: 'center', color: '#999' }}>Loading...</p>
            ) : recentPosts.length > 0 ? (
              recentPosts.map(post => (
                <div key={post.id} className="single-post-item">
                  <div
                    className="thumb bg-cover"
                    style={{
                      backgroundImage: `url("${getFeaturedImage(post)}")`,
                      minHeight: '80px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="post-content">
                    <h5>
                      <Link href={`/news/${post.slug}`}>
                        {decodeHTMLEntities(post.title.rendered)}
                      </Link>
                    </h5>
                    <div className="post-date">
                      <i className="far fa-calendar-alt" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#999' }}>No recent posts</p>
            )}
          </div>
        </div>

        {/* Categories - Shows ALL categories including empty ones */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Categories</h4>
          </div>
          <div className="widget_categories">
            <ul>
              {loading ? (
                <li style={{ textAlign: 'center', color: '#999', padding: '10px' }}>Loading categories...</li>
              ) : categories.length > 0 ? (
                categories.map(category => (
                  <li key={category.id}>
                    <Link href={`/news?category=${category.slug}`}>
                      <i className={getCategoryIcon(category)} />
                      {category.name} <span>({category.count})</span>
                    </Link>
                  </li>
                ))
              ) : (
                <li style={{ textAlign: 'center', color: '#999', padding: '10px' }}>
                  No categories found
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Follow Us</h4>
          </div>
          <div className="social-link">
            <a href="https://www.facebook.com/thewanderingrooster" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com/wanderingrooster" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.instagram.com/thewanderingrooster" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.google.com/search?q=The+Wandering+Rooster+Key+West" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google" />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Newsletter</h4>
          </div>
          <div className="newsletter-widget">
            <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.6' }}>
              Get the latest Key West tips and updates from The Wandering Rooster
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  fontSize: '14px'
                }}
                required
              />
              <button 
                type="submit"
                className="theme-btn"
                style={{
                  width: '100%',
                  padding: '12px'
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogSidebar;
