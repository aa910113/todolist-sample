const { v4: uuidv4 } = require('uuid');
const headers = require('../headers');
const err = require('../error');

const router = function (res, todos, body) {
  try {
    const title = JSON.parse(body).title;
    if (title !== undefined) {
      const todo = {
        title: title,
        id: uuidv4(),
      };
      todos.push(todo);
      res.writeHead(200, headers);
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
