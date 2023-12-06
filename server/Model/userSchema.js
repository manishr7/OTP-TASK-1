import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
 
  PhoneNumber: {
    type: Number,
    required: true,
  },
  JoinedOn: { type: Date, default: Date.now },
});
 export default mongoose.model('USER',userSchema)
 