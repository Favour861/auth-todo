const jwt = require('jsonwebtoken');
const secret = process.env.HASH_SECRET;

const withAuth = (req, res, next) => {
    // console.log(req)
    // const token = req.cookies['token'];
    const bearer = req.headers.authorization;
    const token = bearer.split(' ')[1];
    // console.log(req.cookies)
    if (!token) {
      res.status(401).send('Unauthorized: No token provided');
    } else {
      console.log(token);
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          console.log(err, "AUTH ERR")
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.username = decoded.username;
          next();
        }
      });
    }
}

module.exports = withAuth;