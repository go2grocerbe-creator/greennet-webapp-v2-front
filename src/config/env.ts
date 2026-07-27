export type DataSource = "mock" | "api";

function parseDataSource(value: string | undefined): DataSource {
  return value === "api" ? "api" : "mock";
}

export const env = {
  dataSource: parseDataSource(process.env.NEXT_PUBLIC_DATA_SOURCE),
  apiBaseUrl: process.env.NEXT_PUBLIC_GREENNET_API_BASE_URL?.replace(/\/$/, ""),
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
};
