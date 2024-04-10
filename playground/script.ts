import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const main = async () => {
    // const user = await prisma.user.create({data:{name:"Sally"}});
    // const user = await prisma.user.deleteMany()
    // console.log(user)

    // await prisma.user.create({
    //     data: {
    //         name: "Alice",
    //         email: "",
    //         blog: {},
    //         isAdmin: false,
    //         largeNumber: 0,
    //         preferences: [],
    //         id: 0,
    //     }
    // });
}

main()
    .catch(error => {
        console.log(error.message)
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

// create
// findUnique
// findFirst
// also for many to many, we can add two columns
// where + distinct
// take
// skip
// orderBy

// where:{
//     name:{equals:"Sally"}
// }

// where: {name: {in: ["Sally", "Alice"]}}