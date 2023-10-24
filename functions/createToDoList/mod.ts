import { CreateTodoListFunction } from "./definition.ts";
import { SlackFunction } from "deno-slack-sdk/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { OpenAI } from "https://deno.land/x/openai/mod.ts";

const env = config();
const openAI = new OpenAI(env.YOUR_API_KEY);

export default SlackFunction(
  CreateTodoListFunction,
  async ({ inputs, client }) => {
    const itemsList = [inputs.item1, inputs.item2, inputs.item3].filter(
      (item) => item
    );

    let responseText = "Your To-Do List:\n";

    for (const item of itemsList) {
      const chatCompletion = await openAI.createChatCompletion({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful planning assistant." },
          {
            role: "user",
            content: `Please help me break down the following task on my to-do list with an estimated time that it could take: ${item}`,
          },
        ],
      });

      const breakdown = chatCompletion.choices?.[0]?.message?.content || item;
      responseText += `\n**${item}**\n${breakdown}\n`;
    }

    const response = await client.chat.postMessage({
      channel: inputs.user,
      text: responseText,
    });

    if (!response.ok) {
      console.log("Error sending to-do list!", response.error);
    }

    return {
      outputs: {
        confirmation: "To-Do List items sent successfully!",
      },
    };
  }
);
