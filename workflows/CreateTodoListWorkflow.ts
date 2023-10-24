import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { CreateTodoListFunction } from "../functions/createToDoList/definition.ts";

export const CreateTodoListWorkflow = DefineWorkflow({
  callback_id: "plan_my_day",
  title: "Plan My Day",
  description: "Plan My Day workflow",
  input_parameters: {
    properties: {
      interactivity: {
        type: Schema.slack.types.interactivity,
      },
    },
    required: ["interactivity"],
  },
});

const formData = CreateTodoListWorkflow.addStep(
  Schema.slack.functions.OpenForm,
  {
    title: "To-Do List",
    interactivity: CreateTodoListWorkflow.inputs.interactivity,
    submit_label: "Submit",
    description: "Enter up to 3 to-do items",
    fields: {
      required: ["item1"], // Only the first item is required; adjust as needed
      elements: [
        {
          name: "item1",
          title: "Item 1",
          type: Schema.types.string,
        },
        {
          name: "item2",
          title: "Item 2",
          type: Schema.types.string,
        },
        {
          name: "item3",
          title: "Item 3",
          type: Schema.types.string,
        },
      ],
    },
  }
);

CreateTodoListWorkflow.addStep(CreateTodoListFunction, {
  user: CreateTodoListWorkflow.inputs.interactivity.interactor.id,
  item1: formData.outputs.fields.item1,
  item2: formData.outputs.fields.item2,
  item3: formData.outputs.fields.item3,
});
