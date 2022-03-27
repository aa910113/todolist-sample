const headers = require('../headers');
const err = require('../error');

const router = function (res, todos) {
  todos.length = 0;
  res.writeHead(200, headers);
  res.write(
    JSON.stringify({
      status: 'success',
      data: todos,
    }),
  );
  res.end();
};

module.exports = router;
