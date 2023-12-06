import Users from "../Model/userSchema.js";
export const login=async (req,res)=>
{ 
    const {PhoneNumber}=req.body;
    console.log(PhoneNumber);
   try {
    const user=new Users(req.body);
    const userRegistered= await user.save();
    if(userRegistered)
    {
        res.status(201).send({message:"user saved successfully"})
    }
    
   } catch (error) {
    console.log(error)
   }
   
    
}