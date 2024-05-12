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

router.get("/:id", async (req, res) => {
  //pobranie narzedzia z bd na podstawie id:
  Tool.findById(req.params.id)
    .exec()
    .then((tool) => {
      //konfiguracja odpowiedzi res z przekazaniem narzedzia:
      res.status(200).send({ data: tool, message: "Narzedzie znalezione" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

router.patch("/:id", async (req, res) => {
  //aktualizacja narzedzia w bd na podstawie id:
  Tool.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then(() => {
      //konfiguracja odpowiedzi res z przekazaniem informacji o aktualizacji:
      res.status(200).send({ message: "Narzedzie zaktualizowane" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

router.delete("/:id", async (req, res) => {
  //usuniecie narzedzia z bd na podstawie id:
  Tool.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => {
      //konfiguracja odpowiedzi res z przekazaniem informacji o usunięciu:
      res.status(200).send({ message: "Narzedzie usuniete" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

router.put("/", async (req, res) => {
  //dodanie nowego narzedzia do bd:
  const tool = new Tool(req.body);
  tool
    .save()
    .then(() => {
      //konfiguracja odpowiedzi res z przekazaniem informacji o dodaniu:
      res.status(201).send({ message: "Narzedzie dodane" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

// router.delete("/delete", async (req, res) => {
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
