'use server';
import prisma from '@/db';

export async function signup(username: string, password: string) {
	try {
		await prisma.user.create({
			data: {
				username,
				password,
			},
		});

		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
