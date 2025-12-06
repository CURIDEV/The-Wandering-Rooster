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
      const [categoriesResponse, postsResponse] = await Promise.all([
        fetch(`${url}/wp-json/wp/v2/categories?per_page=10&hide_empty=true`, {
          headers: { 'Authorization': `Basic ${credentials}` },
        }),
        fetch(`${url}/wp-json/wp/v2/posts?per_page=3&_embed`, {
          headers: { 'Authorization': `Basic ${credentials}` },
        })
      ]);

      if (categoriesResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        // Filter out "Uncategorized" and other system categories
        const filteredCategories = categoriesData.filter(cat => 
          cat.name !== 'Uncategorized' && cat.count > 0
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
                      minHeight: '80px'
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

        {/* Categories */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Categories</h4>
          </div>
          <div className="widget_categories">
            <ul>
              {loading ? (
                <li style={{ textAlign: 'center', color: '#999' }}>Loading...</li>
              ) : categories.length > 0 ? (
                categories.map(category => (
                  <li key={category.id}>
                    <Link href={`/news?category=${category.slug}`}>
                      <i className="flaticon-fork" />
                      {category.name} <span>{category.count}</span>
                    </Link>
                  </li>
                ))
              ) : (
                <li style={{ textAlign: 'center', color: '#999' }}>No categories</li>
              )}
            </ul>
          </div>
        </div>

        {/* Key West Guide - Static Links */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Key West Guide</h4>
          </div>
          <div className="widget_categories">
            <ul>
              <li>
                <Link href="/news?category=things-to-do">
                  <i className="flaticon-location" />
                  Things to Do
                </Link>
              </li>
              <li>
                <Link href="/news?category=events">
                  <i className="flaticon-calendar" />
                  Local Events
                </Link>
              </li>
              <li>
                <Link href="/news?category=food-guide">
                  <i className="flaticon-restaurant" />
                  Food Guide
                </Link>
              </li>
              <li>
                <Link href="/news?category=beaches">
                  <i className="flaticon-beach" />
                  Beaches
                </Link>
              </li>
              <li>
                <Link href="/news?category=hidden-gems">
                  <i className="flaticon-map" />
                  Hidden Gems
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>Follow Us</h4>
          </div>
          <div className="social-link">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.google.com/search?q=your+business" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogSidebar;
