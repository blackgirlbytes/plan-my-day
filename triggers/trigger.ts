import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerTypes } from "deno-slack-api/mod.ts";

const trigger: Trigger = {
  type: TriggerTypes.Shortcut,
  name: "Plan my day",
  description: "Triggers plan my day workflow",
  workflow: "#/workflows/plan_my_day",
  inputs: {
    interactivity: {
      value: TriggerContextData.Shortcut.interactivity,
    },
  },
};

export default trigger;
