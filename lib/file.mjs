import fs from 'fs';
import zlib from 'zlib';

import { pipe } from './fp.mjs';

export const pipeFile = (pipeline) => pipe([fs.readFileSync, ...pipeline]);

export const unzip = zlib.unzipSync;
