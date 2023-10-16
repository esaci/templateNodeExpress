import express from 'express';
import config from '../config.json';
import loaders from './loaders';

async function startServer() {
	const env = config.state || 'development';
	const PORT = 8100;
	const app = express();

	await loaders({ expressApp: app });
	app.listen(PORT, () =>
		console.log(`
	🚀 Server ready at: 8288 with env: ${env}`),
	);
}

startServer();
