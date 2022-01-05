const bcrypt = require('bcrypt')
const User = require('./../Models/User')
const authenticationHelper = require('./../helpers/authenticationHelper')

exports.registerUser = async(req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10)

        const user = new User()
           
           user.firstname = req.body.firstname;
           user.lastname = req.body.lastname;
           user.username = req.body.username;
           user.email = req.body.email;
           user.password = hashedPassword;
             //ADMIN,ACCOUNTANT
    // const roles = req.body.roles.split(",");

    // roles.forEach((role) => {
    //   user.roles.push(role);
    // });
             
            await user.save()
            return res.status(200).json({message: 'User was successfully created'})

    } catch (error){
        return res
        .status(400).json({message: "Something wrong", error})
    }
}


exports.login = async(req,res) =>{
      //check if the user exists with that email
  const user = await User.findOne({ email: req.body.email });

  if(user ===null){
      return res
      .status(404).json({message: 'Email is not found'})
  }

    try{
        const checkPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if(checkPassword){
            // password is matching
            // Generating JWT Token here
            const token = await authenticationHelper.generateToken(user)

             //send httponly cookies

             return res
             .status(200)
             .cookie('jwt', token,{
                 httpOnly:true,
                 secure:false,
                 sameSite:'lax',
             })
             .json({message: 'Login successful',user: {username: user.username},})
             

        } else {
            return res.status(400).json({message: 'Incorrect password'})
        }
    } catch (error){
        return res.status(400).json({message: 'Sign In Error'})
    }

}

exports.logout = async(req,res)=>{
    //Remove the httpOnly cookie
    res.clearCookie('jwt', {
        httpOnly:true,
        secure: false,
        sameSite:'lax',
    }).json({message: 'You are logged out now.'})
}