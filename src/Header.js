import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "My app",           // Incase this components don't receive the props, it will defaultly display this. 
};

export default Header;
