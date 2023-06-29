let myfavorites = []

const postFav = (req, res) => {
    favorites.push(req.body)
    return res.json(myfavorites)
}
const deleteFav = (req, res) => {
    const { id } = req.params
    const filtered = myfavorites.filter((fav) => 
    Number(fav.id) !== id)
    myfavorites = filtered
    return res.json(myfavorites)
}

module.exports = {
    postFav,
    deleteFav
}