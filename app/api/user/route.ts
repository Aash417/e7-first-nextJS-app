import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
	// db logic
	const user = await prisma.user.findFirst({});
	return Response.json({
		username: user?.username,
		password: user?.password,
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
	return NextResponse.json({
		msg: 'working',
		body,
	});
}
