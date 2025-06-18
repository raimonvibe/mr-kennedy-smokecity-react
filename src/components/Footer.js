import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="smoke">s<span className="span">M</span>c</h2>
      <div className="socials">
        <img src="https://www.bandlab.com/web-app/images/home/instagram-2588ed888e.svg" alt="Instagram" />
        <img src="https://www.bandlab.com/web-app/images/home/facebook-fde6a28a72.svg" alt="Facebook" />
        <img src="https://www.bandlab.com/web-app/images/home/x-ee63e02ecd.svg" alt="X" />
        <img src="https://www.bandlab.com/web-app/images/home/tiktok-6c8adc9dac.svg" alt="TikTok" />
        <img src="https://www.bandlab.com/web-app/images/home/discord-c15562bb61.svg" alt="Discord" />
        <img src="https://www.bandlab.com/web-app/images/home/reddit-156593e406.svg" alt="Reddit" />
        <img src="https://www.bandlab.com/web-app/images/home/youtube-c787203ce1.svg" alt="YouTube" />
      </div>
      <div className="about">
        <h4>ABOUT</h4>
        <h4>HELP</h4>
        <h4>BUSINESS INQURIES</h4>
        <h4>CREATOR APP</h4>
      </div>
      <button className="Account">Create an Account</button>
      <button className="Account">Download App</button>
    </div>
  );
};

export default Footer;
