module.exports = (client) => {
  const map = new Map();

  client.on("guildMemberAdd", (m) => {
    const now = Date.now();

    if (!map.has(m.guild.id)) map.set(m.guild.id, []);

    const arr = map.get(m.guild.id);
    arr.push(now);

    const recent = arr.filter(t => now - t < 10000);

    if (recent.length > 6) {
      console.log("🚨 RAID DETECTED");
    }

    map.set(m.guild.id, recent);
  });
};
