const headers = require('./headers');
function errorHandle(res) {
  res.writeHead(400, headers(200));
  res.write(
    JSON.stringify({
      status: 'error',
      message: '錯誤格式',
    }),
  );
  res.end();
}

module.exports = errorHandle;
