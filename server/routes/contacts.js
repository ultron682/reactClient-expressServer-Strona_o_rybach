const router = require("express").Router();
const { Contact, validate } = require("../models/contact");

router.get("/", async (req, res) => {
  //pobranie wszystkich narzedzi z bd:
  Contact.find()
    .exec()
    .then(async () => {
      const contacts = await Contact.find();
      //konfiguracja odpowiedzi res z przekazaniem listy narzedzi:
      res.status(200).send({ data: contacts, message: "Lista zgloszen" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

router.post("/", async (req, res) => {
  console.log('Otrzymano: ' + req.body.firstName + ' ' + req.body.lastName
   + ' ' + req.body.age + ' ' + req.body.country + ' ' + req.body.phone 
   + ' ' + req.body.email + ' ' + req.body.desc );

  //walidacja danych z formularza:
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }
  //utworzenie nowego narzedzia na podstawie danych z formularza:
  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    country: req.body.country,
    phone: req.body.phone,
    email: req.body.email,
    desc: req.body.desc,
  });
  //zapisanie narzedzia w bd:
  contact
    .save()
    .then(() => {
      //konfiguracja odpowiedzi res z przekazaniem informacji o zapisie:
      res.status(201).send({ message: "Zgłoszenie zapisane" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

router.delete("/", async (req, res) => {
  //usuniecie wszystkich narzedzi z bd:
  console.log(req.body._id);
  Contact.findByIdAndDelete(req.body._id)
    .exec()
    .then(() => {
      //konfiguracja odpowiedzi res z przekazaniem informacji o usunięciu:
      res.status(200).send({ message: "Zgłoszenie usunięte" });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
});

module.exports = router;
