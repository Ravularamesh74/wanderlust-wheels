import { createStartHandler,defaultRenderHandler } from "@tanstack/react-start/server";

export default createStartHandler({
  handler: defaultRenderHandler,
});
