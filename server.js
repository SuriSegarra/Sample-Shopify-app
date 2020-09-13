// koa is similar to express

const koa = require("koa");

const server = new koa();

// ctx obj that contains all of the context for our app. before you had de call everything separately now its just a single obj and we can access it like an obj

server.use(async (ctx) => (ctx.body = "Hello Koa App"));

server.listen(3000, () => console.log("Server running in localhost 3000"));
