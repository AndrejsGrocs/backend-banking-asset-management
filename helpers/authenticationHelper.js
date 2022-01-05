const jwt = require('jsonwebtoken')


/** 
*@param {*} user
*@returns
*/
exports.generateToken = (user) =>{
    const payload = {sub: user._id}

    return new Promise((resolve, reject)=>{
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn: '1h'},
            (err, asyncToken) =>{
                if(err){
                    reject(err)
                    return
                }
                resolve(asyncToken)
            }
        )
    })

}
