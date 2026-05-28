const { ChannelType } = require("discord.js");

module.exports = (client) => {
  client.on("interactionCreate", async (i) => {
    if (!i.isButton()) return;

    if (i.customId === "ticket") {
      const ch = await i.guild.channels.create({
        name: `ticket-${i.user.username}`,
        type: ChannelType.GuildText
      });

      ch.send(`🎫 Ticket opened by ${i.user}`);
      i.reply({ content: "Ticket created", ephemeral: true });
    }
  });
};
