import { interfaces } from 'inversify';
import type { ServerConfig } from '../config/servier.config';

export const TYPES = {
  ServerConfig: Symbol.for(
    'ServerConfig'
  ) as unknown as interfaces.ServiceIdentifier<ServerConfig>,
} as const;
