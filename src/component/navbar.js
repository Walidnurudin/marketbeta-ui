import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useHistory, useLocation } from "react-router";

export default function Navbar() {
  const router = useHistory();
  const location = useLocation();
  const [state, setState] = useState({ activeItem: location.pathname });

  const handleItemClick = (e, { name }) => {
    setState({ activeItem: name });
    router.push(`${name === "home" ? "/" : `/${name}`}`);
  };

  const { activeItem } = state;

  return (
    <Menu secondary style={{ borderBottom: "1px solid gray", padding: "10px" }}>
      <Menu.Item
        name="home"
        active={activeItem === "/"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="profile"
        active={activeItem === "/profile"}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="logout"
          active={activeItem === "logout"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
}
