import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js'

const posts = [
    { 
        id: 0, 
        title: '週末小旅行', 
        body: '這個週末去了陽明山，櫻花開得真美！推薦大家可以去走走～ #旅遊 #陽明山 #櫻花', 
        created_at: new Date() 
    },
    { 
        id: 1, 
        title: '科技新知分享', 
        body: 'Deno 1.40 發布了！新增了許多有趣的功能，特別是WebSocket的改進很實用。 #程式設計 #Deno #JavaScript', 
        created_at: new Date() 
    }
];

const router = new Router();

router.get('/', list)
    .get('/post/new', add)
    .get('/post/:id', show)
    .post('/post', create);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

async function list(ctx) {
    ctx.response.body = await render.list(posts);
}

async function add(ctx) {
    ctx.response.body = await render.newPost();
}

async function show(ctx) {
    const id = ctx.params.id;
    const post = posts[id];
    if (!post) ctx.throw(404, 'invalid post id');
    ctx.response.body = await render.show(post);
}

async function create(ctx) {
    const body = ctx.request.body
    if (body.type() === "form") {
        const pairs = await body.form()
        const post = {}
        for (const [key, value] of pairs) {
            post[key] = value
        }
        console.log('post=', post)
        const id = posts.push(post) - 1;
        post.created_at = new Date(); // 設定建立時間
        post.id = id;
        ctx.response.redirect('/');
    }
}

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });
