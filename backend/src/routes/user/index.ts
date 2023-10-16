import * as express from 'express';
import userGet from './get';
import userPut from './put';
import userPost from './post';

export default async ({ app }: { app: express.Express }) => {
	await userGet({ app });
	await userPut({ app });
	await userPost({ app });
};
