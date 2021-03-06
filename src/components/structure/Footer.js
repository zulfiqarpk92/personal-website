import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <i className="fas fa-moon"></i> by{" "}
          <a href="https://github.com/zulfiqarpk92" className="has-text-white">
            <strong>Zulfiqar Ali</strong>
          </a>
        </p>
        <p>
          <a href="https://bulma.io/">
            <img
              width="512"
              height="96"
              src="https://bulma.io/images/made-with-bulma--semiwhite.png"
              className="bulma-image"
              alt=""
            />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
