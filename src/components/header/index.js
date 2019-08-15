import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import profile from "../../assets/profile.png";
import { Container, PageTitle, ProfilePicture } from "./styles";
import { getPathNameWithOutSlash } from "../../helpers";

const Header = props => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const { pathname } = props.location;
    setTitle(pathname);
  }, [props.location]);

  return (
    <Container>
      <PageTitle>{getPathNameWithOutSlash(title)}</PageTitle>
      <ProfilePicture src={profile} />
    </Container>
  );
};

export default withRouter(Header);
