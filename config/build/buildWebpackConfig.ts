import path from 'path';

import { BuildOptions } from "./types/config";
import { buildLoaders, buildReslovers, buildPlugins, buildDevServer } from '.'
import webpack from 'webpack';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  const devOptions = isDev ? {
    devtool: 'inline-source-map',
    devServer: buildDevServer(options),
  } : {};

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js', // optimization for browser (browser checks cashe, now he will know if file is new)
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildReslovers(options),
    plugins: buildPlugins(options),
    ...devOptions,
  }
}