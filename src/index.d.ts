import { WatchMethod } from 'gulp';
import { Settings } from 'gulp-typescript';
import { WebpackOptionsNormalized } from 'webpack/types';

declare namespace Fusion {
  export interface DestOptions {
    merge: boolean;
    samePosition: boolean;
    file: string,
    path: string
  }

  export type MiniOptions = string | 'none' | 'same_file' | 'separate_file';

  export type taskProcessor<T> = (source: string | Array<string>,
                                  dest?: string | Array<string>,
                                  options?: T) => Promise<NodeJS.ReadWriteStream>;

  export interface Processor<O> {
    options: O;

    new(source: string | Array<string>, options?: O);

    process(dest: string | Array<string>): Promise<NodeJS.ReadWriteStream>;
  }

  export interface CssOptions {
    autoprefixer?: boolean;
    minify?: MiniOptions;
    rebase?: true;
  }

  export interface CssPreProcessorOptions extends CssOptions {
    sourcemap?: boolean;
  }

  export interface JsOptions {
    sourcemap?: boolean;
    minify?: MiniOptions;
  }

  export interface BabelOptions extends JsOptions {
    targets?: string;
    babel?: BabelOptions;
    module?: string | 'systemjs' | 'umd' | 'amd';
  }

  export interface TsOptions extends JsOptions {
    ts: Settings
  }

  export interface WebpackOptions extends JsOptions {
    webpack?: WebpackOptionsNormalized;
    override?: WebpackOptionsNormalized | Function;
    merge?: WebpackOptionsNormalized;
  }

  export interface VueOptions extends WebpackOptions {
    root?: string;
  }

  export const watch: WatchMethod;
  export const cssTask: taskProcessor<CssOptions>;
  export const CssProcessor: Processor<CssOptions>;
  export const sassTask: taskProcessor<CssPreProcessorOptions>;
  export const SassProcessor: Processor<CssPreProcessorOptions>;
  export const jsTask: taskProcessor<JsOptions>;
  export const JsProcessor: Processor<JsOptions>;
  export const babelTask: taskProcessor<BabelOptions>;
  export const BabelProcessor: Processor<BabelOptions>;
  export const tsTask: taskProcessor<TsOptions>;
  export const TsProcessor: Processor<TsOptions>;
  export const webpackTask: taskProcessor<WebpackOptions>;
  export const WebpackProcessor: Processor<WebpackOptions>;
  export const vueTask: taskProcessor<VueOptions>;
  export const VueProcessor: Processor<VueOptions>;
}

export = Fusion;
