import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>JOIN THE BRAND</h1>
      <h5>
        Sign up to our newsletter to get the best Marshall advice, latest news,
        artist insights and more every two weeks.
      </h5>
      <form>
        <input id="email" type="email" placeholder="Email" />
        <span>
          <input type="checkbox" id="policy" />
          <label for="policy">
            I have read and agree to the <a>Terms and Conditions</a> and{" "}
            <a>Privacy Policy</a>.
          </label>
        </span>
      </form>
    </div>
  );
};

export default Newsletter;
