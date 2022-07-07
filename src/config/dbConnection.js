import mongoose from 'mongoose';

var senhaDB = "root";
mongoose.connect("mongodb+srv://root:"+senhaDB+"@cluster0.bwxqr.mongodb.net/apinode");


let db = mongoose.connection;


export default db ;