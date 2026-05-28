require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
});

// SYSTEMS
require("./systems/antiRaid")(client);
require("./systems/antiSpam")(client);
require("./systems/ticket")(client);
require("./systems/voiceTemp")(client);
require("./systems/economy")(client);
require("./systems/aiMod")(client);

client.once("ready", () => {
  console.log("👑 RTG LEGEND MODE ONLINE");
});

client.login(process.env.TOKEN);
