const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt")
var bodyParser = require('body-parser');
const User = require('../model/userModel');
const saltround = 12
const { findOne } = require('../model/userModel')



const expresss = require('express');
const app = expresss();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


function isValidPassword(password) {
    var pass = "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    let re = new RegExp(pass);
    return re.test(password);
};

// function checkPassword(password) {
//     const user = User.findOne({ req.body.email });
//     if(password === user.password){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

app.post("/login", async(req, res) => {
    
    console.log("inside loginnn")
    // res.send({
    //   token: 'test123'
    // });
    console.log(req.body.name);
    const email = req.body.email;
    const password = req.body.password;
    const hash = bcrypt.hashSync(password,saltround);
   console.log("data "+ email , password);

    const user = await User.findOne({ email });
    console.log("USER "+ user.password);
    console.log(password);
    console.log(hash);
    let isMatch = false;
    
    if (user == null) {
    
     res.json("Email address not found");
      return;
    } else {
      bcrypt.compare(password, user.password, function(err, result) {
        if (err) {
          console.log(error)
        } else if (result) {
          
          console.log("correct")
          res.send({
            token: "success",
          });
        } else {
          console.log("password not matching")
          res.send({ token: "fail" });
        }
      });
    }

  });
  
app.listen(9000, () => console.log('API is running on http://localhost:9000/login'));
  

//GETTING ALL USERS
app.get('/getAll', async (req, res) => {
    try {
        const user = await User.find()
        res.json(user)
        console.log("getting request")
    } catch (err) {
        res.send('Error ' + err)
    }
})
//FIND BY ID
router.get('/:id', async (req, res) => {
    console.log("find by ID");
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.send('Error' + err)
    }
})

//CREATING USER
// router.post('/create', async (req, res) => {
//     console.log("inside post try")

//     // var userName = req.body.name;
//     // var userEmail = req.body.email;
//     // var userPassword = req.body.password;
//     // const isPasswordStrong = isPasswordStrongEnough(userPassword);
//     // var isEmailValid = validateEmail(userEmail);
//     // var isNameValid = validateName(userName);

//     const regUserName = /[a-zA-Z]+/;
//     if (!req.body.name.match(regUserName)){
//         return res.send({
//             message: "Please enter alphabets only for name",
//           });
//     }
//     if (!req.body.email || !req.body.password || !req.body.name) {
//         return res.send({
//             message: "Please enter all the fields",
//         });
//     }
//     if (req.body.password.length < 5) {
//         return res.send({
//             message: "Password must have atleast of 5 characters",
//         });
//     }
//     const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!req.body.email.match(regEmail)) {
//         return res.send({
//             message: "Please enter a proper email id containing @, .com or .org",
//         });
//     }
    
//     bcrypt.hash(req.body.password, saltround, function (err, hash) {
//         if (err) {
//             return res.send({
//               message: "internal server error",
//             });
//         }
//         console.log(hash);


//         const newUser=new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: hash
//         })
//         newUser.save().then(()=>{
//             res.send({
//                 status: 200,
//                 message: "User created successfully",
                
//             })
//         })
//     })


//     })


// //Deleting user based on email address
// router.delete('/delete',async(request,response) => {
//     const deleteUser = await User.findOne({email: request.body.email});
//     if(!deleteUser) {
//         return response.send({
//             message: "User did not found",
//         });
//     }

//     const a1 = await deleteUser.remove();
//     if(deleteUser) {
//         return response.send({
//             message: "User Deleted!",
//         });
//     }
//     response.json(a1);

// })
// //DELETING ALL
// router.delete('/deleteAll/', async (req, res) => {
// })

// router.put('/edit', async (request, res) => {
//     console.log("inside put")
//     if (!request.body.email || !request.body.password || !request.body.name) {
//         return res.send({
//             message:"Enter name, email and password",
//         });
//     }
//     const searchUser = await User.findOne({ email: request.body.email });
//     if (!searchUser) {
//         return res.send({
//             message: "User not found",
//         });
//     }
//     const matches = await bcrypt.compare(request.body.password, searchUser.password);
//     if (!matches) {
//         return res.send({ message: "new password should be different to old password" });
//     }
//     if (request.body.newpassword.length < 6) {
//         return res.send({ message: "Password must be atleast of 6 characters" });
//     }
//     const regExName = /[a-zA-Z]+/;
//     if (!request.body.newname.match(regExName)) {
//         return res.send({
//             message: "Please enter alphabets only for name",
//         });
//     }


//     bcrypt.hash(request.body.newpassword, saltround, async function (error, hash) {
//         if (error) {
//             return res.send({
//                 message: "Internal server error",
//             });
//         }
//         console.log(hash);
//         const updatedUser = await User.updateMany(
//             { email: request.body.email },
//             { password: request.body.newpassword },
//             { name: request.body.newname }
//         );
//         if (updatedUser) {
//             res.send({ message: "Password  and name have been updated" });
//         }
//     });

//     const updatedUser1 = await User.updateOne(
//         { email: request.body.email },
        
//         { name: request.body.newname}
//       );
// })



module.exports = app