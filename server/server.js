var express = require("express");
var bodyparser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");

var url = "mongodb://localhost:27017/users";

var app = express();

app.use(bodyparser.json());
app.use(cors());
var db;

// database connection
MongoClient.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log(err);
    db = client.db("users");
    app.listen(8000);
    console.log("Listening on port 8000");
  }
);

// Authentification
// SignIn
app.post("/signin", (req, res) => {
  db.collection("Admin").findOne(
    { email: req.body.email, passwd: req.body.passwd },
    (err, user) => {
      if (err) throw err;
      if (!user) {
        res.status(401).send({
          success: false,
          msg: "Authentication failed. User not found."
        });
      } else {
        res.status(200).send({
          success: true,
          user: user
        });
      }
    }
  );
});

app.get("/analyse", (req, res) => {
  db.collection("analyse")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);
      res.json(result);
    });
});

app.get("/echantillonnage", (req, res) => {
  db.collection("echantillonnage")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);
      res.json(result);
    });
});

// app.post("/search", (req, res) => {
//   console.log(req.body.text);
//   db.collection("analyse").findOne({ text: req.body.text }, (err, user) => {
//     if (err) throw err;
//     if (!user) {
//       res.status(401).send({
//         success: false,
//         msg: "Authentication failed. User not found."
//       });
//     } else {
//       res.status(200).send({
//         success: true,
//         user: user
//       });
//     }
//   });
// });

// db.collection("analyse").find(
//   { $text: { $search: "{search: req.body.search}" } },
//   (err, user) => {
//     if (err) throw err;
//     if (!user) {
//       res.status(401).send({
//         success: false,
//         msg: "pas de resultat"
//       });
//     } else {
//       res.status(200).send({
//         success: true,
//         user: user
//       });
//     }
//   }
// );

// app.get("/search", (req, res) => {
//   db.collection("analyse")
//     .find({ $text: { $search: "Validé" } })
//     .toArray((err, result) => {
//       if (err) return console.log(err);
//       res.json(result);
//     });
// });

// // For the search
// app.get("/analyse", (req, res) => {

//   var name = "idparcelle";
//   var value = "PA276163";
//   var query = {};
//   query[name] = value;

//   db.collection("analyse").findOne(query, function(err, result) {
//     console.log(typeof result);
//     res.json(result);
//   });
//   // .toArray((err, result) => {
//   //   res.json(result);
//   // });
// });

// app.post("/signin", (req, res) => {
//   db.collection(UserTy).findOne(
//     { email: req.body.email, passwd: req.body.passwd },
//     (err, user) => {
//       if (err) throw err;
//       if (!user) {
//         res.status(401).send({
//           success: false,
//           msg: "Authentication failed. User not found."
//         });
//       } else {
//         res.status(200).send({
//           success: true,
//           user: user
//         });
//       }
//     }
//   );
// });

// SignUp
// app.post("/register", (req, res) => {
//   let UserTy = req.body.usertype;
//   console.log(UserTy);
//   let user = {
//     nom: req.body.nom,
//     email: req.body.email,
//     passwd: req.body.passwd,
//     language: req.body.language
//   };
//   db.collection(UserTy).save(user, err => {
//     if (err)
//       res.status(401).send({
//         success: false,
//         msg: "User not saved"
//       });
//     res.status(200).send({
//       success: true,
//       msg: "User saved"
//     });
//   });
// });

// app.get("/showProf", (req, res) => {
//   db.collection("Professor")
//     .find()
//     .toArray((err, resultP) => {
//       res.json(resultP);
//     });
// });

// app.get("/showEtd", (req, res) => {
//   db.collection("Student")
//     .find()
//     .toArray((err, resultE) => {
//       res.json(resultE);
//     });
// });

// app.delete("/removeProf/:id", (req, res) => {
//   db.collection("Professor").remove(
//     { _id: ObjectId(req.params.id) },
//     (err, obj) => {
//       if (err)
//         res.status(400).send({
//           success: false,
//           msg: "User not removed"
//         });
//       res.status(200).send({ success: true, obj });
//     }
//   );
// });

// app.delete("/removeEtd/:id", (req, res) => {
//   db.collection("Student").remove(
//     { _id: ObjectId(req.params.id) },
//     (err, obj) => {
//       if (err)
//         res.status(400).send({
//           success: false,
//           msg: "User not removed"
//         });
//       res.status(200).send({ success: true, obj });
//     }
//   );
// });

// app.delete("/deletecourse/:id", (req, res) => {
//   db.collection("Courses").remove(
//     { _id: ObjectId(req.params.id) },
//     (err, obj) => {
//       if (err)
//         res.status(400).send({
//           success: false,
//           msg: "User not removed"
//         });
//       res.status(200).send({ success: true, obj });
//     }
//   );
// });

// Courses Operations
// Add course
// app.post("/addcours", (req, res) => {
//   let course = {
//     nameCours: req.body.cours,
//     Module: req.body.module,
//     Type: req.body.type,
//     File: req.body.file
//   };
//   db.collection("Courses").save(course, err => {
//     if (err)
//       res.status(401).send({
//         success: false,
//         msg: "Error : Could note post this document"
//       });
//     res.status(200).send({
//       success: true,
//       msg: "Post uploaded successfully"
//     });
//   });
// });

// Show courses
// app.get("/showCourses", (req, res) => {
//   db.collection("Courses")
//     .find()
//     .toArray((err, result) => {
//       res.json(result);
//     });
// });

// Delete course
