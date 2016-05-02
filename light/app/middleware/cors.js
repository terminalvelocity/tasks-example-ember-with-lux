export default async function cors(req, res) {
  const methods = [
    'GET',
    'POST',
    'PATCH',
    'PUT',
    'DELETE',
    'HEAD',
    'OPTIONS'
  ];

  const headers = [
    'Content-Type',
    'X-Requested-With'
  ]
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', methods.join(', '));
  res.setHeader('Access-Control-Allow-Headers', headers.join(', '));
  res.setHeader('Access-Control-Allow-Credentials', 'true');
}
