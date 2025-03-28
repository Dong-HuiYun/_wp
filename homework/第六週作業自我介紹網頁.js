import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body = `<html>
    <!DOCTYPE html>
    <html lang="zh">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>我的自我介紹</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; margin: 50px; }
            h1 { color: #333; }
            ol { list-style: none; padding: 0; }
            li { margin: 10px 0; }
            a { text-decoration: none; color: #007BFF; font-weight: bold; }
            a:hover { color: #0056b3; }
        </style>
    </head>
    <body>
        <h1>我的自我介紹</h1>
        <ol>
            <li><a href="/name">姓名</a></li>
            <li><a href="/age">年齡</a></li>
            <li><a href="/gender">性別</a></li>
            <li><a href="/hobbies">興趣愛好</a></li>
            <li><a href="/university">就讀大學</a></li>
        </ol>
    </body>
    </html>
`
  } else if (pathname == '/name') {
    ctx.response.body = '董惠筠'
  } else if(pathname == '/age'){
    ctx.response.body = '18歲'
  }else if(pathname == '/gender'){
    ctx.response.body = '女'
  }
  else if(pathname == '/hobbies'){
    ctx.response.body = '看課外讀物，聽歌，看電影'
  }
  else if(pathname == '/university'){
    ctx.response.body = '金門大學資工系一年級'
  }
    
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
