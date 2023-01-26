import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SocialBarContainer } from "./SocialBar.styles";

export const Socialbar = () => {
  return (
    <SocialBarContainer>
      <Link href="https://www.linkedin.com/in/maykonsousa/">
        <FaLinkedinIn size={24} />
      </Link>
      <Link href="https://github.com/maykonsousa/">
        <FaGithub size={24} />
      </Link>
      <Link href="https://www.instagram.com/mykesousa/">
        <FaInstagram size={24} />
      </Link>
      <Link href="https://twitter.com/maykon_sousa">
        <FaTwitter size={24} />
      </Link>
      <div />
    </SocialBarContainer>
  );
};
