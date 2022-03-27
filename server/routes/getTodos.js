const headers = require('../headers');
const router = function (res, todos) {
  res.writeHead(200, headers());
  console.log(headers());
  res.write(
    JSON.stringify({
      status: 'success',
      data: todos,
    }),
  );
  res.end();
};

module.exports = router;
