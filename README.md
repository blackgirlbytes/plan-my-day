# Plan My Day Slack App
This Slack app helps you plan your day by breaking down tasks using OpenAI's GPT-4 model. By using the `/plan my day` slash command, you can insert up to three items for the day, and the app will provide a detailed breakdown of each task.

## Setup Instructions
### 1. Clone the Repository
```bash
https://github.com/blackgirlbytes/plan-my-day
cd https://github.com/blackgirlbytes/plan-my-day
```
### 2. OpenAI API Key
- Generate your API key here: https://platform.openai.com/account/api-keys
- Open the .env file and add your OpenAI API key to YOUR_API_KEY
```bash
YOUR_API_KEY=YOUR_OPENAI_API_KEY
```
### 3. Give Deno access to your env variables
```bash
deno run --allow-read --allow-net functions/createToDoList/mod.ts
```
### 4. Run the application
```bash
slack run
```
### 5. Use the Slash Command in Slack
In your Slack workspace:

- Open any channel or direct message.
- Type /plan my day and press enter.
- A modal will appear prompting you to insert up to three items for the day.
- After submitting, the app will provide a detailed breakdown of each task. **PLEASE NOTE: YOU WILL HAVE TO WAIT A FEW MINUTES FOR THE RESULTS TO GENERATE**
