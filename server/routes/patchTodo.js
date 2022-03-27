const headers = require('../headers');
const err = require('../error');

const router = function (res, todos, body, url) {
  try {
    const todo = JSON.parse(body).title;
    const id = url.split('/').pop();
    const index = todos.findIndex((el) => el.id === id);

    if (todo !== undefined && index !== -1) {
      todos[index].title = todo;
      res.writeHead(200, headers());
      res.write(
        JSON.stringify({
          status: 'success',
          data: todos,
        }),
      );
      res.end();
    } else {
      err(res);
    }
  } catch (error) {
    err(res);
  }
};

module.exports = router;
