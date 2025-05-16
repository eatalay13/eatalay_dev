import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SITE_URL: z.string().min(1),
    GOOGLE_API_KEY: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    SITE_URL: process.env.SITE_URL,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
});
