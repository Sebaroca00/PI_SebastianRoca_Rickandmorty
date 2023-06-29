const axios = require("axios");
const URL = require();

const getCharById = (res, id) => { 
    //res -->
        axios(`${URL}/:${id}`)
            .then((data)=>{ 
             const {name, 
                    gender, 
                    species, 
                    origin = origin.name, 
                    image, 
                    status
                    } = data
             const character = {
                id,
                name, 
                gender, 
                species, 
                origin, 
                image,
                status
             };
             res.writeHead(200, {"Conten-Type": "application/json"})
             res.end(JSON.stringify(character));
            
            })
            .catch((reason)=>{
                res.writeHead(500, {"Conten-Type": "text/plain"})
                res.end(reason.message)
            });
            
        //ruta -->
};

module.exports = getCharById

