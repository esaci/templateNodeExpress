import { NextFunction, Request, Response } from 'express';

const config = { apiKey: 'not defined' };

export default (req: Request, res: Response, next: NextFunction) => {
	next();
};
