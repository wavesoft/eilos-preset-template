import { DefinePresetOptions, PresetOptionsRuntimeContext } from "eilos";

/**
 * User-configurable options for this preset
 */
export const Options = DefinePresetOptions({

  someOption: {
    defaultValue: "",
    description: "Example of a string option",
    schema: {
      type: "string",
    },
  },

});

export type GlobalRuntimeContext = PresetOptionsRuntimeContext<typeof Options>;
