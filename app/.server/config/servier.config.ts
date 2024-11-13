import { z } from 'zod';

export const serverConfigSchema = z.object({
  applicationTitle: z.string().min(1).default('Remix with Inversify'),
});

export type ServerConfig = z.infer<typeof serverConfigSchema>;
