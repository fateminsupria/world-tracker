import React from 'react';

const footerStyle={
    margin: '0px', 
    padding:'0px', 
    overflowX:'hidden',
}

function Footer() {
  return (
    <div style={footerStyle}>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              Team 51
            </span>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external countries data API
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;