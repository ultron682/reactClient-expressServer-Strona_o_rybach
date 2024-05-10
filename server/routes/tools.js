const router = require("express").Router();
const { Tool, validate } = require("../models/tool");


router.get("/", async (req, res) => {
  //pobranie wszystkich narzedzi z bd:
  Tool.find()
    .exec()
    .then(async () => {
      const users = await Tool.find();
      //konfiguracja odpowiedzi res z przekazaniem listy narzedzi:
      res.status(200).send({ data: users, message: "Lista narzedzi" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

// router.get("/delete", async (req, res) => {
//   //usuniecie aktualnego użytkownika z bd na podstawie tokena:
//   User.findByIdAndDelete(req.user._id)
//     .exec()
//     .then(() => {
//       //konfiguracja odpowiedzi res z przekazaniem informacji o usunięciu:
//       res.status(200).send({ message: "Użytkownik usunięty" });
//       console.log("Użytkownik usunięty" );
//     })
//     .catch((error) => {
//       res.status(500).send({ message: error.message });
//     });
// });

module.exports = router;
