import { Container } from 'inversify';
import { serverConfigSchema } from './config/servier.config';
import { TYPES } from './constants/types.contant';

const container = new Container();

container.bind(TYPES.ServerConfig).toDynamicValue(() => {
  return serverConfigSchema.parse({
    applicationTitle: 'Remix with Inversify',
  });
});

export { container };
