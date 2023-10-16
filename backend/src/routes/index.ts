import * as express from 'express';
import user from './user';

export default async ({ app }: { app: express.Express }) => {
	await user({ app });
	console.log('Express routes Init');
};
