import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useMoralis } from "react-moralis";

function MenuItems() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useMoralis();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      {isAuthenticated && (
        <Menu.Item key="/upload">
          <NavLink to="/upload" style={{ textDecoration: "none" }}>
            Upload Materials 🧑‍🏫
          </NavLink>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Item key="/allCourses">
          <NavLink to="/allCourses" style={{ textDecoration: "none" }}>
            View Courses 📚
          </NavLink>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Item key="/score">
          <NavLink to="/score" style={{ textDecoration: "none" }}>
            View Score 🏅
          </NavLink>
        </Menu.Item>
      )}
    </Menu>
  );
}

export default MenuItems;
