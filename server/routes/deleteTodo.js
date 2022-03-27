const headers = require('../headers');
const err = require('../error');

const router = function (res, todos, url) {
  const id = url.split('/').pop();
  const index = todos.findIndex((el) => el.id == id);
  if (index !== -1) {
    todos.splice(index, 1);
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
};

module.exports = router;
