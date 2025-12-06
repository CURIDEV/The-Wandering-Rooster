import Link from "next/link";

const PageBanner = ({ pageName }) => {
  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: 'url("assets/img/banner/banner.svg")' }}
    >
      <div className="container">
        <div className="page-heading center">
          <h1>{pageName}</h1>
          <ul className="breadcrumb-items">
            <li>
             <a href="/">Home</a>
            </li>
            <li>
              <i className="far fa-chevron-right" />
            </li>
            <li>{pageName}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
