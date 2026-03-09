const bcrypt = require('bcrypt');


const users = [
  {
    id: "1",
    name: "Nir Channes",
    email: "nirch@example.com",
    password: "$2a$10$tKOttoMyrfHMQBzV.QeW3Ou0g19AWaJgWMzbFa5RFIagWw36IzLH.",
  },
  {
    id: "2",
    name: "John Doe",
    email: "johnd@example.com",
    password: "$2a$10$5WGIBt.b8k10AArJ.mxZDOqqU8tQJcmYjeopPb4xxrNDWkO7kEpa2",
  },
];


async function login(email, password) {
  const user = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase());

  if (user && await bcrypt.compare(password, user.password)) {
    const { password: _, ...userNoPassword } = user;
    return userNoPassword;
  }
}

module.exports = { login }