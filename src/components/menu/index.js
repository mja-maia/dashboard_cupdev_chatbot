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
  const [menuItems, setMenuItems] = useState([
    {
      pathname: "dashboard",
      icon: faHome,
      selected: false
    },
    {
      pathname: "comments",
      icon: faComment,
      selected: false
    },
    {
      pathname: "stream",
      icon: faStream,
      selected: false
    },
    {
      pathname: "profile",
      icon: faUserAlt,
      selected: false
    },
    {
      pathname: "logout",
      icon: faPowerOff,
      selected: false
    }
  ]);

  useEffect(() => {
    const { pathname } = props.location;
    setMenuItems(menuItems => {
      return menuItems.map(menuItem => {
        if (menuItem.pathname === pathname.replace(/\//g, "")) {
          return { ...menuItem, selected: true };
        }
        return { ...menuItem, selected: false };
      });
    });
  }, [props.location]);

  const onClickMenuItem = pathname => {
    if (pathname === "logout") {
      props.history.push("/");
      return;
    }
    props.history.push(pathname);
  };

  return (
    <Container>
      <Logo src={logo} />
      <MenuList>
        {menuItems.length &&
          menuItems.map((menuItem, index) => (
            <MenuItem
              onClick={() => onClickMenuItem(menuItem.pathname)}
              selected={menuItem.selected}
              key={index}
            >
              <FontAwesomeIcon
                icon={menuItem.icon}
                color={menuItem.selected ? "#fff" : "#424141"}
              />
            </MenuItem>
          ))}
      </MenuList>
    </Container>
  );
};

export default withRouter(Menu);
