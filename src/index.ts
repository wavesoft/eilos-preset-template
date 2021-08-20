import { DefinePreset, PresetUserConfig } from "eilos";
import { Config } from "./config";

// import someAction from "./actions/some";

/**
 * Eilos preset configuration
 */
const Preset = DefinePreset({
  engineVersion: "",
  config: Config,
  actions: {
    // some: someAction,
  },
});


// Export preset and options (the options allow chaining)
export { Config } from "./config";
export type UserConfig = PresetUserConfig<typeof Config>
export default Preset;
