function headers(statusCode) {
  let type = 'application/json';
  if (statusCode === 404) {
    // 須加上 charset=UTF-8，否則會亂碼
    type = 'text/html;charset=UTF-8';
  }
  return {
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': type,
  };
};

module.exports = headers;
