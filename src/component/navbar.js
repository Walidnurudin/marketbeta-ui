import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useHistory, useLocation } from "react-router";
import { ModalConfirm } from ".";
import { useSelector } from "react-redux";

export default function Navbar() {
  const router = useHistory();
  const location = useLocation();
  const user = useSelector((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({ activeItem: location.pathname });

  const handleItemClick = (e, { name }) => {
    setState({ activeItem: name });
    router.push(`${name === "home" ? "/" : `/${name}`}`);
  };

  const onLogout = () => {
    localStorage.clear();
    router.push("/login");
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
        <Menu.Item name={`Hi, ${user.data.name}`} />
        <ModalConfirm
          title="Logout"
          header="Logout?"
          desc="Are you sure want to logout?"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
          onSubmit={() => onLogout()}
        />
      </Menu.Menu>
    </Menu>
  );
}
