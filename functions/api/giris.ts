import { login, type AuthEnv } from "../../server/auth";

export const onRequestPost: PagesFunction<AuthEnv> = ({ request, env }) => login(request, env);
