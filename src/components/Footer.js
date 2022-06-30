import React from "react";

const Footer = () => {
    let year = new Date().getFullYear();
  
    return (
      <footer role="contentinfo" className="footer ">
        <div>
          <p className="p-8">Copyright &copy; {year}</p>
          </div>
      </footer>
    );
};

export default Footer;
