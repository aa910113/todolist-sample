const http = require('http');
const headers = require('./headers');
const getTodos = require('./routes/getTodos');
const postTodo = require('./routes/postTodo');
const deleteTodos = require('./routes/deleteTodos');
const deleteTodo = require('./routes/deleteTodo');
const patchTodo = require('./routes/patchTodo');
const PORT = process.env.PORT || '3005';

const todos = [];

const server = http.createServer((req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  if (req.url == '/todos' && req.method == 'GET') {
    getTodos(res, todos);
  } else if (req.url == '/todos' && req.method == 'POST') {
    req.on('end', () => {
      postTodo(res, todos, body);
    });
  } else if (req.url == '/todos' && req.method == 'DELETE') {
    req.on('end', () => {
      deleteTodos(res, todos);
    });
  } else if (req.url.startsWith('/todos/') && req.method == 'DELETE') {
    req.on('end', () => {
      deleteTodo(res, todos, req.url);
    });
  } else if (req.url.startsWith('/todos/') && req.method == 'PATCH') {
    req.on('end', () => {
      patchTodo(res, todos, body, req.url);
    });
  } else if (req.method == 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else {
    res.writeHead(404, headers(404));
    res.write(
      '<div style="text-align:center;"><p style="font-size:8rem;">404</p><p style="font-size:3rem;">糟糕!您訪問的頁面不存在</p></div>',
    );
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
