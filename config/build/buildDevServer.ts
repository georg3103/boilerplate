import { BuildOptions } from '.';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, // automatically open in browser
    // avoid 404 error when refreshing not root route (/about)
    // Tells the webpack dev server to use the index.html file as the fallback for all unmatched requests.
    // Any request that cannot be resolved to an existing file or route will be served the index.html
    historyApiFallback: true, 
    hot: true, // update modules in your application without requiring a full page reload
  }
}