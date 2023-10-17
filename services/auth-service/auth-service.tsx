import { HTTP } from "../config/conf";
import { ENDPOINTS } from "../config/urls";
import { AuthTO } from "./types";

const { GET, POST } = HTTP;
const { LOGIN } = ENDPOINTS.USER.AUTH;

const authenticate = (body: AuthTO) =>
  POST(LOGIN, body).then((res) => res.json());

export { authenticate };
