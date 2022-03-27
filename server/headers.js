function headers(statusCode) {
  let type =
    statusCode === 404 ? 'text/html;charset=UTF-8' : 'application/json';
  return {
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': type,
  };
}
// const headers = {
//   'Access-Control-Allow-Headers':
//     'Content-Type, Authorization, Content-Length, X-Requested-With',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
//   'Content-Type': 'application/json',
// };

module.exports = headers;
