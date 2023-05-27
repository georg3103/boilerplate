import webpack from 'webpack';
import { BuildOptions } from './types/config';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'; // creates alias from tsconfig

export function buildReslovers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    plugins: [new TsconfigPathsPlugin()]
  }
};