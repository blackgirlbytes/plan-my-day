import { DefineFunction, Schema } from "deno-slack-sdk/mod.ts";

export const CreateTodoListFunction = DefineFunction({
  callback_id: "plan_my_day_function",
  title: "Plan My Day",
  description: "Plans your day if you struggle with time management",
  source_file: "functions/createToDoList/mod.ts",
  input_parameters: {
    properties: {
      user: {
        type: Schema.slack.types.user_id,
        description: "The user creating the to-do list",
      },
      item1: { type: Schema.types.string, description: "To-do item 1" },
      item2: { type: Schema.types.string, description: "To-do item 2" },
      item3: { type: Schema.types.string, description: "To-do item 3" },
    },
    required: ["user", "item1"],
  },
  output_parameters: {
    properties: {
      confirmation: {
        type: Schema.types.string,
      },
    },
    required: ["confirmation"],
  },
});
