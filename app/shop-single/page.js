"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from '@/context/CartContext';
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { Tab, Tabs } from "react-bootstrap";

const Page = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (productId) {
      fetchProduct();
      fetchRelatedProducts();
    }
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

      if (!url || !consumerKey || !consumerSecret) {
        throw new Error('Missing WooCommerce API credentials');
      }

      const credentials = btoa(`${consumerKey}:${consumerSecret}`);
      
      const response = await fetch(`${url}/wp-json/wc/v3/products/${productId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch product: ${response.status}`);
      }

      const data = await response.json();
      setProduct(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching product:', err);
      setError(err.message || 'Failed to load product');
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async () => {
    try {
      const url = process.env.NEXT_PUBLIC_WC_SITE_URL;
      const consumerKey = process.env.NEXT_PUBLIC_WC_CONSUMER_KEY;
      const consumerSecret = process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET;

      const credentials = btoa(`${consumerKey}:${consumerSecret}`);
      
      const response = await fetch(`${url}/wp-json/wc/v3/products?category=26&per_page=4`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });

      if (response.ok) {
        const data = await response.json();
        setRelatedProducts(data.filter(p => p.id !== parseInt(productId)));
      }
    } catch (err) {
      console.error('Error fetching related products:', err);
    }
  };

  const calculateDiscount = (regularPrice, salePrice) => {
    if (!salePrice || salePrice === regularPrice) return null;
    const regular = parseFloat(regularPrice);
    const sale = parseFloat(salePrice);
    const discount = Math.round(((regular - sale) / regular) * 100);
    return discount > 0 ? discount : null;
  };

  const renderStars = (rating) => {
    const ratingNum = parseFloat(rating) || 0;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={`fas fa-star ${i > ratingNum ? 'color-bg' : ''}`}
        />
      );
    }
    return stars;
  };

  if (loading) {
    return (
      <FoodKingLayout>
        <PageBanner pageName={"Product Details"} />
        <section className="product-details-section section-padding">
          <div className="container">
            <div className="text-center py-5">
              <h3>Loading product...</h3>
            </div>
          </div>
        </section>
      </FoodKingLayout>
    );
  }

  if (error || !product) {
    return (
      <FoodKingLayout>
        <PageBanner pageName={"Product Details"} />
        <section className="product-details-section section-padding">
          <div className="container">
            <div className="alert alert-danger text-center">
              <h4>Error Loading Product</h4>
              <p>{error || 'Product not found'}</p>
              <Link href="/shop" className="theme-btn mt-3">
                Back to Shop
              </Link>
            </div>
          </div>
        </section>
      </FoodKingLayout>
    );
  }

  const discount = calculateDiscount(product.regular_price, product.sale_price);
  const hasDiscount = discount && discount > 0;
  const mainImage = product.images && product.images.length > 0 ? product.images[selectedImage].src : '/assets/img/food/placeholder.png';

  return (
    <FoodKingLayout>
      <PageBanner pageName={product.name} />
      <section className="product-details-section section-padding">
        <div className="container">
          <div className="product-details-wrapper">
            <div className="row">
              <div className="col-lg-5">
                <div className="product-image-items">
                  <div className="product-image mb-4">
                    <img src={mainImage} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
                  </div>
                  
                  {product.images && product.images.length > 1 && (
                    <div className="d-flex gap-2">
                      {product.images.map((image, index) => (
                        <div 
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          style={{ 
                            cursor: 'pointer', 
                            border: selectedImage === index ? '2px solid #ff6b6b' : '2px solid transparent',
                            borderRadius: '8px',
                            padding: '5px'
                          }}
                        >
                          <img 
                            src={image.src} 
                            alt={`${product.name} ${index + 1}`}
                            style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="col-lg-7 mt-5 mt-lg-0">
                <div className="product-details-content">
                  <div className="star pb-3">
                    {hasDiscount && <span>-{discount}%</span>}
                    {renderStars(product.average_rating)}
                    <a href="#" className="text-color">
                      ( {product.rating_count} Reviews )
                    </a>
                  </div>
                  
                  <h3 className="pb-3">{product.name}</h3>
                  
                  <div 
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: product.short_description || product.description }}
                  />
                  
                  <div className="price-list d-flex align-items-center">
                    <span>${parseFloat(product.price).toFixed(2)}</span>
                    {hasDiscount && <del>${parseFloat(product.regular_price).toFixed(2)}</del>}
                  </div>
                  
                  <div className="cart-wrp">
                    <div className="cart-quantity">
                      <h5>QUANTITY:</h5>
                      <div className="quantity align-items-center d-flex">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="qtyminus minus"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value >= 1) {
                              setQuantity(value);
                            }
                          }}
                          className="qty"
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="qtyplus plus"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="shop-button d-flex align-items-center">
                      <button 
                        onClick={() => {
                          addToCart(product, quantity);
                          alert(`Added ${quantity} item(s) to cart!`);
                        }}
                        className="theme-btn"
                        style={{ border: 'none', cursor: 'pointer' }}
                      >
                        <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                          <span className="button-icon">
                            <i className="flaticon-shopping-cart" />
                          </span>
                          <span className="button-text">Add To Cart</span>
                        </span>
                      </button>
                      <Link href="#" className="star-icon">
                        <i className="fal fa-star" />
                      </Link>
                    </div>
                  </div>
                  
                  {product.sku && (
                    <h6 className="details-info">
                      <span>SKU:</span> {product.sku}
                    </h6>
                  )}
                  
                  {product.categories && product.categories.length > 0 && (
                    <h6 className="details-info">
                      <span style={{ marginRight: '5px' }}>Categories:</span>
                      {product.categories.map(cat => cat.name).join(', ')}
                    </h6>
                  )}
                  
                  {product.tags && product.tags.length > 0 && (
                    <h6 className="details-info">
                      <span style={{ marginRight: '5px' }}>Tags:</span>
                      {product.tags.map(tag => tag.name).join(', ')}
                    </h6>
                  )}
                </div>
              </div>
            </div>
            
            <div className="single-tab mt-5">
              <Tabs defaultActiveKey="description" id="product-tabs" className="mb-4">
                <Tab eventKey="description" title="Description">
                  <div className="description-items">
                    <div className="row">
                      <div className="col-lg-12">
                        <div 
                          className="description-content"
                          dangerouslySetInnerHTML={{ __html: product.description }}
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
                
                {product.attributes && product.attributes.length > 0 && (
                  <Tab eventKey="additional" title="Additional Information">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <tbody>
                          {product.attributes.map((attr, index) => (
                            <tr key={index}>
                              <td>{attr.name}</td>
                              <td>{attr.options.join(', ')}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Tab>
                )}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {relatedProducts.length > 0 && (
        <section className="food-category-section fix section-padding section-bg">
          <div className="container">
            <div className="section-title text-center">
              <span className="wow fadeInUp">crispy, every bite taste</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                RELATED PRODUCTS
              </h2>
            </div>
            <div className="row">
              {relatedProducts.slice(0, 4).map((relatedProduct, index) => {
                const relatedDiscount = calculateDiscount(relatedProduct.regular_price, relatedProduct.sale_price);
                const hasRelatedDiscount = relatedDiscount && relatedDiscount > 0;
                
                return (
                  <div
                    key={relatedProduct.id}
                    className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`.${index * 2 + 3}s`}
                  >
                    <div className="catagory-product-card-2 text-center">
                      <div className="icon">
                        <Link href="/shop-cart">
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                      <div className="catagory-product-image">
                        <img 
                          src={relatedProduct.images && relatedProduct.images.length > 0 
                            ? relatedProduct.images[0].src 
                            : '/assets/img/food/placeholder.png'
                          } 
                          alt={relatedProduct.name}
                          style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                        />
                      </div>
                      <div className="catagory-product-content">
                        <div className="catagory-button">
                          <Link href="/shop-cart" className="theme-btn-2">
                            <i className="far fa-shopping-basket" />
                            Add To Cart
                          </Link>
                        </div>
                        <div className="info-price d-flex align-items-center justify-content-center">
                          {hasRelatedDiscount && <p>-{relatedDiscount}%</p>}
                          {hasRelatedDiscount && (
                            <h6>${parseFloat(relatedProduct.regular_price).toFixed(2)}</h6>
                          )}
                          <span>${parseFloat(relatedProduct.price).toFixed(2)}</span>
                        </div>
                        <h4>
                          <Link href={`/shop-single?id=${relatedProduct.id}`}>
                            {relatedProduct.name}
                          </Link>
                        </h4>
                        <div className="star">
                          {renderStars(relatedProduct.average_rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      
      <Cta />
    </FoodKingLayout>
  );
};

export default Page;