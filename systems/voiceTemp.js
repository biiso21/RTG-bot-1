const { ChannelType } = require("discord.js");

module.exports = (client) => {
  client.on("voiceStateUpdate", async (oldS, newS) => {
    if (newS.channel?.name === "➕ Create Voice") {

      const c = await newS.guild.channels.create({
        name: `🔊 ${newS.member.user.username}`,
        type: ChannelType.GuildVoice
      });

      await newS.member.voice.setChannel(c);
    }
  });
};
