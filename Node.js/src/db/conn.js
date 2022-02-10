const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Registration_Form")
.then(() =>{
    console.log(`connection sucessfull`);
}).catch((e) => {
    console.log("Error");
});

