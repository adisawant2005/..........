import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-auto py-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link
                to="http://localhost:5174/"
                className="nav-link px-2 text-secondary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-white">
                Features
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button
              onClick={() =>
                (window.location.href = "http://localhost:5174/Login")
              }
              type="button"
              className="btn btn-outline-light me-2"
            >
              Login
            </button>
            <button
              onClick={() =>
                (window.location.href = "http://localhost:5174/Signup")
              }
              type="button"
              className="btn btn-warning"
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
