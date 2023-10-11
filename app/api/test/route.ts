export const GET = (req: Request) => {
  return Response.json({ x: "x" });
};

export const POST = (req: Request) => {
  return new Response(null, { status: 200 });
};
