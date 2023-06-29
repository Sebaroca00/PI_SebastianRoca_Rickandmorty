const users = require("../utils/user")

const login = (req, res) => {
    const {email, password} = req.query

users.forEach((user)=>{
    if(user.email === email && user.password === password) {
        return res.status(200).json({ acces : true });
    }
})
return res.json({ access : false})
}

module.exports = login;