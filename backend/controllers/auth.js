

const signup = async (req, res) => {
     res.json({ message: "Welcome to the Signup page!" });
};

const signin = async (req, res) => {
    res.json({ message: "Welcome to the Signup page!" });
};

const getUser = async (req, res) => {
    const user ="John Doe"; // Example variable
    res.json({ message: "Welcome to the getUser controller!", user });
};
  

// the below code is used to export the module
module.exports = {
    signup,
    signin,
    getUser
};
