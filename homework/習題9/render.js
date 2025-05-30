
function formatDate(date) {
    return date.toLocaleString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).replace(/\//g, '-');
}

export function list(posts) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>貼文列表</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            .post { border: 1px solid #ddd; padding: 15px; margin-bottom: 20px; border-radius: 5px; }
            .post-title { font-size: 1.5em; margin-bottom: 5px; color: #333; }
            .post-meta { color: #666; font-size: 0.9em; margin-bottom: 10px; }
            .post-body { line-height: 1.6; }
            .actions { margin-top: 10px; }
            .btn { padding: 5px 10px; text-decoration: none; border-radius: 3px; }
            .btn-view { background: #4CAF50; color: white; }
            .btn-delete { background: #f44336; color: white; border: none; cursor: pointer; }
            .new-post-btn { display: inline-block; margin-bottom: 20px; padding: 10px 15px; background: #2196F3; color: white; text-decoration: none; border-radius: 4px; }
        </style>
    </head>
    <body>
        <h1>貼文列表</h1>
        <a href="/post/new" class="new-post-btn">新增貼文</a>
        
        ${posts.map(post => `
        <div class="post">
            <h2 class="post-title">${post.title}</h2>
            <div class="post-meta">發佈時間: ${formatDate(post.created_at)}</div>
            <div class="post-body">${post.body}</div>
            <div class="actions">
                <a href="/post/${post.id}" class="btn btn-view">查看詳情</a>
                <form action="/post/${post.id}/delete" method="post" style="display: inline;">
                    <button type="submit" class="btn btn-delete">刪除</button>
                </form>
            </div>
        </div>
        `).join('')}
    </body>
    </html>
    `;
}

export function newPost() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>新增貼文</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
            form { display: flex; flex-direction: column; }
            label { margin: 10px 0 5px; }
            input, textarea { padding: 8px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 3px; }
            button { padding: 10px 15px; background: #4CAF50; color: white; border: none; cursor: pointer; border-radius: 3px; }
            .back-link { display: inline-block; margin-top: 15px; }
        </style>
    </head>
    <body>
        <h1>新增貼文</h1>
        <form action="/post" method="post">
            <label for="title">標題:</label>
            <input type="text" id="title" name="title" required>
            
            <label for="body">内容:</label>
            <textarea id="body" name="body" rows="5" required></textarea>
            
            <button type="submit">發佈貼文</button>
        </form>
        <a href="/" class="back-link">← 返回貼文列表</a>
    </body>
    </html>
    `;
}

export function show(post) {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>${post.title}</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            .post { border: 1px solid #ddd; padding: 20px; border-radius: 5px; }
            .post-title { font-size: 2em; margin-bottom: 10px; }
            .post-meta { color: #666; margin-bottom: 20px; }
            .post-body { line-height: 1.6; font-size: 1.1em; }
            .actions { margin-top: 20px; }
            .btn { padding: 5px 10px; text-decoration: none; border-radius: 3px; }
            .btn-back { background: #2196F3; color: white; }
            .btn-delete { background: #f44336; color: white; border: none; cursor: pointer; }
        </style>
    </head>
    <body>
        <div class="post">
            <h1 class="post-title">${post.title}</h1>
            <div class="post-meta">發佈時間: ${formatDate(post.created_at)}</div>
            <div class="post-body">${post.body}</div>
            
            <div class="actions">
                <a href="/" class="btn btn-back">返回列表</a>
                <form action="/post/${post.id}/delete" method="post" style="display: inline;">
                    <button type="submit" class="btn btn-delete">刪除貼文</button>
                </form>
            </div>
        </div>
    </body>
    </html>
    `;
}