import { createServerFn } from "@tanstack/react-start";

export const getOrigin = createServerFn({ method: "GET" }).handler(async () => {
  const { getRequestUrl } = await import("@tanstack/react-start/server");
  return getRequestUrl({ xForwardedHost: true, xForwardedProto: true }).origin;
});
