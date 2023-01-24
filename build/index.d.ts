import { defaultOptions } from './options';
export declare function regexSamples(regex: RegExp): Generator<string, void, unknown>;
export declare function regexSamples(regex: RegExp, optionsOverride: Partial<typeof defaultOptions>): Generator<string, void, unknown>;
