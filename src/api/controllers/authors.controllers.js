const {AuthorModel} = require("../../db/models")

/** author create */
const create_author = async (req, res, next) => {
    try {
        const new_author = await AuthorModel.create(req.body)

        res.status(201).json(new_author)
    } catch (error) {
        console.log(error);
        next(error)
    }
}

/** authors get all */
const getAll = async (req, res, next) => {
    try {
        const author = AuthorModel.find()

        res.status(200).json(author)
    } catch (error) {
        console.log(error);
        next(error)
    }
}


module.exports = {
    create_author,
    getAll,
}