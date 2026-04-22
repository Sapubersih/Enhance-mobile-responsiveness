import { useResponsive } from "../hooks/useResponsive";

const ResponsiveLayout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useResponsive();

  return (
    <div
      style={{
        padding: isMobile ? "10px" : "40px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};

export default ResponsiveLayout;
