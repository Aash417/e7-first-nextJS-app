import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export function GET() {
	// db logic

	return Response.json({
		name: 'aashish',
		email: 'a@mail.com',
	});
}

export async function POST(req: NextRequest) {
	const body = await req.json();
	await prisma.user.create({
		data: {
			username: body.username,
			password: body.password,
		},
	});

	console.log(body);
	return Response.json({
		msg: 'working',
		body,
	});
}
