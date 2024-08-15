import Link from "next/link";

const Page = () => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "3rem",
        flexDirection: "column",
        minHeight: "100svh",
      }}
    >
      <div>
        <h2>Search: 123</h2>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link href="/route-cache-header?search=123">
            Route based cache header
          </Link>
          <Link href="/config-cache-header?search=123">
            Config based cache header
          </Link>
        </nav>
      </div>

      <div>
        <h2>Search: Testing</h2>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link href="/route-cache-header?search=testing">
            Route based cache header
          </Link>
          <Link href="/config-cache-header?search=testing">
            Config based cache header
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default Page;
