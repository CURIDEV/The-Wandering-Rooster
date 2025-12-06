import Link from "next/link";
import NiceSelect from "./NiceSelect";

const ProductTopBar = ({ mb0 = false }) => {
  return (
    <div className={`woocommerce-notices-wrapper ${mb0 ? "mb-0" : ""}`}>
      <div className="product-showing">
        <h5>
          <Link href="/shop">
            <span>
              <img src="assets/img/filter.png" alt="img" />
            </span>{" "}
            Filtering
          </Link>
        </h5>
        <h5>
          Showing <span>1–12</span> of 27 results
        </h5>
      </div>
      <div className="form-clt">
        <h6>
          Sort by:{" "}
          <Link href="/shop">
            <i className="fal fa-sort-alt" />
          </Link>
        </h6>
        <NiceSelect />
        <div className="icon">
          <Link href="/shop-right-sidebar">
            <i className="fas fa-th" />
          </Link>
        </div>
        <div className="icon-2">
          <Link href="/shop-list">
            <i className="fas fa-list" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductTopBar;
