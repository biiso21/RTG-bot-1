module.exports = (client) => {
  const users = new Map();

  client.on("messageCreate", (msg) => {
    if (msg.author.bot) return;

    const id = msg.author.id;
    const now = Date.now();

    if (!users.has(id)) users.set(id, []);

    const arr = users.get(id);
    arr.push(now);

    const spam = arr.filter(t => now - t < 4000);

    if (spam.length > 5) {
      msg.delete().catch(() => {});
    }

    users.set(id, spam);
  });
};
