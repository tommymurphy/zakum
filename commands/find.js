var fs = require("fs");

module.exports = {
  findCommand: function (message, roster) {
    const personToFind = message.content.split(" ")[1]
		if (!personToFind) {
			message.channel.send(`No input, please use like this: !find <IGN>`)
			return;
		}
		const foundMember = roster.find(member => member.name.toLowerCase() === personToFind.toLowerCase())
		foundMember ? message.channel.send(JSON.stringify(foundMember)) : message.channel.send(`Zakum can't find ${personToFind} on the guild roster.`)
  }
};