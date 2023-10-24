import { Manifest } from "deno-slack-sdk/mod.ts";
import { CreateTodoListWorkflow } from "./workflows/CreateTodoListWorkflow.ts";
import { CreateTodoListFunction } from "./functions/createToDoList/definition.ts";
/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "plan-my-day",
  description: "A blank template for building Slack apps with Deno",
  icon: "assets/plan_my_day.png",
  functions: [CreateTodoListFunction],
  workflows: [CreateTodoListWorkflow],
  outgoingDomains: ["api.openai.com"],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
