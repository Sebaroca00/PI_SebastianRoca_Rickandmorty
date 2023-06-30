let myfavorites = []

const postFav = (req, res) => {
    myfavorites.push(req.body)
    return res.json(myfavorites)
}
const deleteFav = (req, res) => {
    const { id } = req.params
    const filtered = myfavorites.filter((fav) => 
    Number(fav.id) !== Number(id))
    myfavorites = filtered
    return res.json(myfavorites)
}

module.exports = {
    postFav,
    deleteFav
}