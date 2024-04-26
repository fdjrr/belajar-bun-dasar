import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
    data: {
        name: "Fadjrir Herlambang",
        email: "fadjrir.co.id@gmail.com",
        phone: "6285266584334",
    },
});

console.info(contact);
