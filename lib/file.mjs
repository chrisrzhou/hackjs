import fs from 'fs';

import { pipe } from './fp.mjs';

export const pipeFile = (pipeline = []) => pipe([fs.readFileSync, ...pipeline]);
