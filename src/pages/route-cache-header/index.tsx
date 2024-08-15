import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type PageProps = {
  search: string;
};

export const getServerSideProps = (async ({ res, query }) => {
  res.setHeader(
    "Cache-Control",
    `max-age=60, s-maxage=3600, stale-while-revalidate=1800`
  );

  res.setHeader("Netlify-Vary", "query=search");

  return { props: { search: String(query.search || "") } };
}) satisfies GetServerSideProps<PageProps>;

const Page = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        minHeight: "100svh",
      }}
    >
      <h1>Route: {props.search}</h1>
    </main>
  );
};

export default Page;
