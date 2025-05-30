import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as render from './render.js';

const posts = [
    {
        id: 0,
        title: '週末小旅行',
        body: '這個週末去了陽明山，櫻花開得真美！推薦大家可以去走走～ #旅遊 #陽明山 #櫻花',
        created_at: new Date('2024-01-01T10:00:00')
    },
    {
        id: 1,
        title: '科技新知分享',
        body: 'Deno 1.40 發布了！新增了許多有趣的功能，特別是WebSocket的改進很實用。 #程式設計 #Deno #JavaScript', 
        created_at: new Date('2024-01-02T14:30:00')
    }
];

const handlers = {
    list: async (ctx) => {
        const sortedPosts = [...posts].sort((a, b) => b.created_at - a.created_at);
        ctx.response.body = await render.list(sortedPosts);
    },
    
    add: async (ctx) => {
        ctx.response.body = await render.newPost();
    },
    
    show: async (ctx) => {
        const id = parseInt(ctx.params.id);
        const post = posts.find(p => p.id === id);
        if (!post) ctx.throw(404, '貼文不存在');
        ctx.response.body = await render.show(post);
    },
    
    create: async (ctx) => {
        const body = ctx.request.body();
        if (body.type === "form") {
            const formData = await body.value;
            const post = {
                id: posts.length,
                title: formData.get("title"),
                body: formData.get("body"),
                created_at: new Date()
            };
            
            // 简单验证
            if (!post.title || !post.body) {
                ctx.response.status = 400;
                ctx.response.body = "標題和内容不能為空";
                return;
            }
            
            posts.push(post);
            ctx.response.redirect('/');
        }
    },
    
    remove: async (ctx) => {
        const id = parseInt(ctx.params.id);
        const index = posts.findIndex(post => post.id === id);
        
        if (index !== -1) {
            posts.splice(index, 1);
            ctx.response.redirect('/');
        } else {
            ctx.throw(404, '貼文不存在');
        }
    }
};

const router = new Router();
router
    .get('/', handlers.list)
    .get('/post/new', handlers.add)
    .get('/post/:id', handlers.show)
    .post('/post', handlers.create)
    .post('/post/:id/delete', handlers.remove);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log('Server run at http://127.0.0.1:8000')
await app.listen({ port: 8000 });
