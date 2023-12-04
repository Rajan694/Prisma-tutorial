import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //queries goes here
  //create new user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "2hUZs@example.com",
  //   },
  // });
  // console.log(user);
  //[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
  //get all users
  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     articles: true,
  //   },
  // });
  // console.log(allUsers);
  // allUsers.forEach((user) => {
  //   console.log(user.name, user.email);
  //   console.log(user.articles.map((article) => article.title));
  // });
  //[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
  // add article associated with user
  // const article = await prisma.article.create({
  //   data: {
  //     title: "Hello World by Alice",
  //     body: "This is my first article",
  //     author: {
  //       connect: {
  //         id: 3,
  //       },
  //     },
  //   },
  // });
  // console.log(article);
  //[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
  //get all articles by user
  // const allArticles = await prisma.article.findMany({
  //   where: {
  //     author: {
  //       name: "Alice",
  //     },
  //   },
  // });
  // console.log(allArticles);
  //[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
  // get all articles
  // const allArticles = await prisma.article.findMany();
  // console.log(allArticles);
  //[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
  //create user and article and associate them
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Sarah",
  //     email: "2hUZt@example.com",
  //     articles: {
  //       create: {
  //         title: "Hello World by Sarah",
  //         body: "This is my first article",
  //       },
  //     },
  //   },
  // });
  // console.log(user);
  //[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
  //update data
  // const updateduser = await prisma.user.update({
  //   where: {
  //     id: 1,
  //   },
  //   data: {
  //     name: "Rajan",
  //   },
  // });
  // console.log(updateduser);
  //[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
  //delete data
  // const deletedarticle = await prisma.article.delete({
  //   where: {
  //     id: 3,
  //   },
  // });
  // console.log(deletedarticle);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
