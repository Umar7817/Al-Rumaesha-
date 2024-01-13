import React from "react";
import "./Global.css";

function Footer() {
  return (
    <div>
      <footer>
        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>
            Have questions or ready to book your Hajj tour? Reach out to us:
          </p>
          <address>
            Email: alrumaesahajjtoursamd@gmail.com
            <br />
            Mohamed Faishel - 8140311997
            <br />
            Mohamed Furkan - 7990710370
            <br />
            Address : 526 5th floor Sheetal Varsha Mahavir business park opp Bukhari bawa dargah behrampura Ahmedabad 380022
          </address>
        </section>
        <p>
          &copy; {new Date().getFullYear()} Al-Rumaesa. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
