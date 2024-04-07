import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function Home() {
	const user = await prisma.user.findFirst({});

	return (
		<div className='flex flex-col justify-center h-screen'>
			<div className='flex justify-center'>
				<div className='border p-8 rounded'>
					<div>Name: {user?.username}</div>
					Password: {user?.password}
				</div>
			</div>
		</div>
	);
}
