import { Application } from "https://deno.land/x/oak/mod.ts";
import { organ } from "https://raw.githubusercontent.com/denjucks/organ/master/mod.ts";
import router from "./api/index.ts";
const port = 5000;

const app = new Application();

//Organ is a logging middleware for the Oak web framework. It is based on the Morgan library for Express in NodeJS.
app.use(organ());

app.use(router.routes());
app.use(router.allowedMethods());


console.log(`server running on port ${port}`);

await app.listen({ port });
