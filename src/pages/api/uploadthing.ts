import type { APIContext } from "astro";
import { uploadRouter } from "../../lib/uploadthing"
import { createNextRouteHandler } from 'uploadthing/next'

const { GET, POST } = createNextRouteHandler({
  router: uploadRouter,
})

export const get = (context: APIContext) => GET();
export const post = (context: APIContext) => POST(context.request);
