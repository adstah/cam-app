const BASE: RequestInit = {
  cache: "no-store",
  credentials:
    process.env.NODE_ENV === "production" ? "same-origin" : "include",
};

const POST = <T>(url: string, body: T) =>
  fetch(url, { ...BASE, method: "POST" });
const GET = (url: string) => fetch(url);

export const HTTP = { POST, GET };
