const authModel = require("../models/authModel.js");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      next({ status: 400, message: "email or password missing" });
    }

    const user = await authModel.login(email, password);
    if (user) {
      res.status(200).json(user);

    } else {
      next({ status: 401, message: "Invalid email or password" });
    }

  } catch (err) {
    console.error(err);
    next({ status: 401, message: err })
  }

}

module.exports = { login }