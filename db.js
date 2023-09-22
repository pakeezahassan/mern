const mongoose=require("mongoose");
const MONGODBURI="mongodb://127.0.0.1:27017/aktiMernProject"
const connectToMongodb= ()=>{
mongoose
.connect(MONGODBURI)
.then(()=>{
    console.log('connect to MongoDB at ${MONGODBURI}');
})
.catch((error)=>{
    console.error(
        'Error connecting to MongoDB at $(MONGODBURI):',
        error
    );
});
};
module.exports = connectToMongodb;










