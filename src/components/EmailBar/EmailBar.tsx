import Link from "next/link";
import React from "react";
import { EmailBarContainer } from "./EmailBar.styles";

export const EmailBar = () => {
  return (
    <EmailBarContainer>
      <div />
      <Link href={"mailto:maykon.sousa@hotmail.com"}>
        maykon.sousa@hotmail.com
      </Link>
    </EmailBarContainer>
  );
};
