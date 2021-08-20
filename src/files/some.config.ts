import { DefinePresetFile } from "eilos";

import { Options } from "../options";

const file = DefinePresetFile(Options, {
  /**
   * The generated file MIME type
   */
  mimeType: "application/json",

  /**
   * The generator to use
   * @param ctx the run-time context
   * @returns the contents of the file
   */
  generator: (ctx) => {
    const { merge } = ctx.util;
    const userConfig = ctx.getOption("someOption");

    // Base 'eslint.config.json' contents
    const BaseConfig = {};

    return merge(BaseConfig, {user: userConfig});
  },
});

export default file;
