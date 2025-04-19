const express = require("express");
const router = express.Router();
const { authController } = require("../controllers/index");


//router
router.get("/signup", (req, res) => {
    const id = req.query.id;

   console.log(req.query); // { id: 1 }
   
   const name = "John Doe"; // Example variable
   res.json({ message: "Welcome to the home page!", name, id });
 });

router.get("/signin",authController.signin);

router.get("/getUser",authController.getUser);
// export routes
module.exports = router;;