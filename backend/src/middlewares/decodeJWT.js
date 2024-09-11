const jwt = require("jsonwebtoken");

const payloadUser = (req, _res, next) => {
    const { authorization } = req.headers;

    const decode = jwt.decode(authorization, { complete: true });

    decode ? decode.payload : null;
    next();
};

module.exports = payloadUser;
