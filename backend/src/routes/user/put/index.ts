import * as express from 'express';

export default async ({ app }: { app: express.Application }) => {
	app.put('/', async (_: express.Request, res: express.Response) => {
		return res.status(200).json({ message: 'Welcome to the Back End' });
	});
};
