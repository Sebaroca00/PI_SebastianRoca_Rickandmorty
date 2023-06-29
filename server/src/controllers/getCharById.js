//CON EXPRESS
require ("dotenv").config();
const axios = require("axios");
const { URL } = process.env

const getCharById = (req, res) => { 
    const {id} = req.params
    axios(`${URL}/${id}`).then(({data}) =>{
       // console.log(data)
        const {id, name, status, species,origin = origin.name,
             image, gender, error} = data
        const character = {
                id,
                status,
                name,
                species,   
                origin,  
                image,
                gender,   
             };
             return name ?
            res.json(character): res.status(404).json({message: error});
    }).catch((reason) =>{
        return res.status(500).send({message: reason});
    });
};

module.exports = getCharById
/*

sin EXPPRESS 
require ("dotenv").config();
const axios = require("axios");
const { URL } = process.env
const getCharById = (res, id) => { 
    //res -->
        axios(`${URL}/:${id}`)
            .then((data)=>{ 
             const {name, gender, species, 
                origin = origin.name, image, status} = data
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
*/
