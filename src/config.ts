import {
  DefinePresetConfig,
  PresetRuntimeContext as TPresetRuntimeContext,
} from "eilos";
import { Options } from "./options";

// import someConfig from "./files/some.config";

/**
 * Complete preset configuration that is used by the actions
 * or by other implementations.
 */
export const Config = DefinePresetConfig({
  options: Options,
  files: {
    // "some-config.json": someConfig,
  },
});

/**
 * Extract the preset's runtime context
 */
export type PresetRuntimeContext = TPresetRuntimeContext<typeof Config>;
