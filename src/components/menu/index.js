import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-reduzida.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import {
  faHome,
  faUserAlt,
  faComment,
  faStream,
  faPowerOff
} from "@fortawesome/free-solid-svg-icons";

import { Container, Logo, MenuList, MenuItem } from "./styles";

const Menu = props => {
  // const [mount, setMount] = useState(true);

  useEffect(() => {
    console.log("rota", props);
  }, [props]);

  return (
    <Container>
      <Logo src={logo} />
      <MenuList>
        <MenuItem>
          <FontAwesomeIcon icon={faHome} color="#424141" />
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faComment} color="#424141" />
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faStream} color="#424141" />
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faUserAlt} color="#424141" />
        </MenuItem>
        <MenuItem>
          <FontAwesomeIcon icon={faPowerOff} color="#424141" />
        </MenuItem>
      </MenuList>
    </Container>
  );
};

export default withRouter(Menu);
