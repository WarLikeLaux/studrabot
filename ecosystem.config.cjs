module.exports = {
	apps: [
		{
			name: "studrabot-dev",
			script: "./scripts/start-dev.sh",
			cwd: "./",
			interpreter: "bash",
			watch: false,
			autorestart: false,
			max_memory_restart: "512M",
			env: {
				NODE_ENV: "development",
			},
		},
	],
};
