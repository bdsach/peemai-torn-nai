export const Nav = () => {
  return (
    <nav
      style={{
        padding: 20,
        position: "fixed",
        userSelect: "none",
      }}
    >
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        style={{ color: "#f59e0b", textDecoration: "none", fontSize: 20 }}
      >
        ปีใหม่ตอนไหน
      </a>
    </nav>
  );
};
