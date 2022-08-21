import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/abdulah-anis/" target="_blank">
      <BsLinkedin />
      </a>
    </div>
    <div>
    <a href="https://github.com/Abdullah-Official" target="_blank">
    <BsGithub />
    </a>
    </div>
    <div>
      <a href="https://www.facebook.com/smartx.abdullah/" target="_blank">
        
    <FaFacebookF />
      </a>
    </div>
  </div>
);

export default SocialMedia;
