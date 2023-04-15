import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/appError';

export const handleAppError = (
	error: Error,
	req: Request,
	res: Response,
	_: NextFunction
) => {
	if (error instanceof AppError) {
		return res.status(error.statusCode).json({
			error: error.message,
		});
	}

	if (error instanceof Error) {
		return res.status(400).json({
			error: error.message,
		});
	}

	return res.status(500).json({
		error: 'Internal server error',
	});
};
