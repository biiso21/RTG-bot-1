module.exports = (client) => {
  client.on("messageCreate", (m) => {
    if (m.author.bot) return;

    if (m.content.includes("http")) {
      m.delete().catch(() => {});
      m.channel.send(`🚫 Links are not allowed ${m.author}`);
    }
  });
};
