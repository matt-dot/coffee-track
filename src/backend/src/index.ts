import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
    await prisma.post.create({
        data: {
            title: 'A test',
            content: 'Some more test vibes'
        }
    })
    const posts = await prisma.post.findMany()
    console.log(posts);
    

}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })