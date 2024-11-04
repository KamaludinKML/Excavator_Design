import React from 'react';

const SocialMediaLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center mx-1"
    >
      {icon} {label}
    </a>
  );
};

export default SocialMediaLink;
