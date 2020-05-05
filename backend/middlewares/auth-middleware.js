const jwt = require('jsonwebtoken');
const secret = process.env.HASH_SECRET;

const withAuth = (req, res, next) => {
    // console.log(req)
    const token = req.cookies['token'];
    // console.log(req.cookies)
    if (!token) {
      res.status(401).send('Unauthorized: No token provided');
    } else {
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