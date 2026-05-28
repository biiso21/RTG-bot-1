module.exports = (client) => {
  const xp = new Map();

  client.on("messageCreate", (m) => {
    if (m.author.bot) return;

    const id = m.author.id;
    xp.set(id, (xp.get(id) || 0) + 1);

    if (xp.get(id) % 10 === 0) {
      m.channel.send(`🏆 ${m.author} leveled up!`);
    }
  });
};
