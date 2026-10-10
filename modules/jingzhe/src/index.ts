import manifest from '../module.manifest.json';
import content from '../content/zh-CN.json';
import { defineProduction } from '@solar24/module-runtime';

export default defineProduction(manifest, content);
