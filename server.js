// koa is similar to express
require("isomorphic-fetch");
const dotenv = require("dotenv");
const Koa = require("koa");
// const KoaRouter = require("koa-router");
const next = require("next");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");
// const koaBody = require('koa-body')

dotenv.config();
// const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
// const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// briging the api keys
const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  server.use(session(server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: [
        "read_products",
        "write_products",
        "read_script_tags",
        "write_script_tags",
      ],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        // value will pass in as shop and we get this value from ctx.session and shop value is the shop URL
        // setting the cookies of the context to shop
        ctx.cookies.set("shopOrigin", shop, {
          // its important to put these parameters because this application is loaded inside of the frame in in teh shopify admin side of the page.
          httpOnly: false,
        });

        ctx.redirect("/");
      },
    })
  );

  server.use(verifyRequest());
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
    return;
  });

  // ctx obj that contains all of the context for our app. before you had de call everything separately now its just a single obj and we can access it like an obj

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
