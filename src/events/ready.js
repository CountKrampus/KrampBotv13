module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		console.log('Ready!');

		client.user.setPresence({ activities: [{ name: `with Discord.js`, type: `PLAYING` }], status: 'dnd' });
	},
};