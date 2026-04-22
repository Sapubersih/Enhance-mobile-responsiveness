import { useResponsive } from "../hooks/useResponsive";

const Navbar = () => {
  const { isMobile } = useResponsive();

  return (
    <nav
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "10px",
        padding: "10px",
        background: "#333",
        color: "#fff",
      }}
    >
      <span>Logo</span>
      <span>Home</span>
      <span>About</span>
      <span>Contact</span>
    </nav>
  );
};

export default Navbar;
