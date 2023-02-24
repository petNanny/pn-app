import { Button } from "@chakra-ui/react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContainerTop">
        <div className="information">
          <div className="learnMore">
            <h2>Learn More</h2>
            <ul>
              <li>
                <a>How does Pawshake work?</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>The Pawshake Guarantee</a>
              </li>
              <li>
                <a>Payments and refunds</a>
              </li>
              <li>
                <a>FAQ for Pet Owners</a>
              </li>
              <li>
                <a>FAQ for Pet Sitters</a>
              </li>
              <li>
                <a>Dog boarding</a>
              </li>
              <li>
                <a>Doggy day care</a>
              </li>
              <li>
                <a>Dog walking</a>
              </li>
              <li>
                <a>Cat sitting</a>
              </li>
              <li>
                <a>Dog sitting</a>
              </li>
              <li>
                <a>Pet sitting</a>
              </li>
              <li>
                <a>House sitting</a>
              </li>
            </ul>
          </div>
          <div className="popularCities">
            <h2>Popular Cities</h2>
            <ul>
              <li>
                <a>Melbourne</a>
              </li>
              <li>
                <a>Sydney</a>
              </li>
              <li>
                <a>Brisbane</a>
              </li>
              <li>
                <a>Perth</a>
              </li>
              <li>
                <a>Adelaide</a>
              </li>
              <li>
                <a>Gold Coast</a>
              </li>
              <li>
                <a>Sunshine Coast</a>
              </li>
              <li>
                <a>Penrith</a>
              </li>
              <li>
                <a>Tweed Heads</a>
              </li>
              <li>
                <a>Mornington</a>
              </li>
            </ul>
            <div className="topCities">
              <a href="">Top doggy day care cities</a>
            </div>
          </div>
          <div className="about">
            <h2>About Us</h2>
            <ul>
              <li>
                <a>Our Story</a>
              </li>
              <li>
                <a>In the press</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Help</a>
              </li>
            </ul>
            <h2 className="payment">Payment Methods</h2>
            <div className="img">
              <div>
                <img src="	https://static1.pawshakecdn.com/payment-methods/visa.svg" alt="visa" />
              </div>
              <div>
                <img
                  src="https://static1.pawshakecdn.com/payment-methods/mastercard.svg"
                  alt="mastercard"
                />
              </div>
              <div>
                <img
                  src="https://static1.pawshakecdn.com/payment-methods/americanExpress.svg"
                  alt="americanExpress"
                />
              </div>
            </div>
          </div>
          <div className="findUsOn">
            <h2>Find us on</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerContainerBottom">
        <div className="termAndCountry">
          <div className="terms">
            <p>
              Copyright © 2023 Pet-Nany Inc. All Rights Reserved. <a>Terms and Conditions</a> and
              <a>Privacy & Cookie Policy</a>.
            </p>
          </div>
          <select className="country">
            <option value="Australia(EN)">Australia(EN)</option>
            <option value="Canada(EN)">Canada(EN)</option>
            <option value="HongKong(CN)">HongKong(CN)</option>
            <option value="Amercia(EN)">Amercia(EN)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
