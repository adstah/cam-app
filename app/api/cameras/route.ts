export const GET = (): Response => {
  return Response.json([{ uuid: "uuid1", location: "Some place" }]);
};
