"use client";
import Link from "next/link";
import Slider from "rc-slider";
import { useState } from "react";

const ProductSidebar = ({
  className = "col-xl-3 col-lg-4 order-2 order-md-1 mt-5",
  style = "style-1",
}) => {
  const [value, setValue] = useState([10, 30]);
  return (
    <div className={className}>
      <div className={`main-sidebar ${style}`}>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>catagories</h4>
          </div>
          <div className="widget-categories">
            <ul>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-burger" />
                  burger
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-chicken" />
                  Fried Chiken
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-french-fries" />
                  French Fries
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-pizza" />
                  Hot Pizzas
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-sandwich" />
                  Sandwich
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-bread" />
                  Bread
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-rice" />
                  fried rice
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-hotdog" />
                  hot dog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>price filter</h4>
          </div>
          <div className="range__barcustom">
            <Slider
              value={value}
              range
              onChange={(e) => setValue(e)}
              trackStyle={{ backgroundColor: "#00813D" }}
              handleStyle={{
                borderColor: "#00813D",
                backgroundColor: "#00813D",
              }}
              railStyle={{ backgroundColor: "#212121" }}
            />
            <div className="range-items">
              <div className="price-input d-flex">
                <div className="field">
                  <span>Price:</span>
                </div>
                <div className="field">
                  <span>${value[0]}</span>
                </div>
                <div className="separators">-</div>
                <div className="field">
                  <span>${value[1]}</span>
                </div>
                <Link
                  href="/shop-left-sidebar"
                  className="theme-btn border-radius-none"
                >
                  Filter
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>filter by size</h4>
          </div>
          <div className="filter-size">
            {["Small", "Medium", "Large", "Extra Large"].map((size) => (
              <div key={size} className="input-save d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="size"
                  id={`size-${size.toLowerCase()}`}
                  value={size.toLowerCase()}
                />
                <label htmlFor={`size-${size.toLowerCase()}`}>{size}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>new arrival</h4>
          </div>
          <div className="popular-food-posts">
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/shop-food/food-1.png")',
                }}
              />
              <div className="post-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-bg" />
                </div>
                <h4>
                  <Link href="/shop-single">ruti with chiken</Link>
                </h4>
                <div className="post-price">
                  <span className="theme-color-2">$30.52</span>
                  <span>$28.52</span>
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/shop-food/food-2.png")',
                }}
              />
              <div className="post-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-bg" />
                </div>
                <h4>
                  <Link href="/shop-single">ruti with chiken</Link>
                </h4>
                <div className="post-price">
                  <span className="theme-color-2">$30.52</span>
                  <span>$28.52</span>
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/shop-food/food-3.png")',
                }}
              />
              <div className="post-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-bg" />
                </div>
                <h4>
                  <Link href="/shop-single">ruti with chiken</Link>
                </h4>
                <div className="post-price">
                  <span className="theme-color-2">$30.52</span>
                  <span>$28.52</span>
                </div>
              </div>
            </div>
            <div className="single-post-item">
              <div
                className="thumb bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/shop-food/food-4.png")',
                }}
              />
              <div className="post-content">
                <div className="star">
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star" />
                  <span className="fas fa-star color-bg" />
                </div>
                <h4>
                  <Link href="/shop-single">ruti with chiken</Link>
                </h4>
                <div className="post-price">
                  <span className="theme-color-2">$30.52</span>
                  <span>$28.52</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSidebar;
