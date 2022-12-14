const database = require('../database/models')

const CategoryController = {
    getAllCategories: async (req, res) => {
        const categories = await database.Category.findAll()
        return res.json(categories)
    },

    getCategoryById: async (req, res) => {
        const { id } = req.params
        const category = await database.Category.findByPk(id)
        return res.json(category)
    },

    createCategory: async (req, res) => {
        const { name } = req.body
        await database.Category.create({
            Cname: name
        })
        return res.send("Category created")
    },

    updateCategory: async (req, res) => {
        const { id } = req.params
        const { name } = req.body
        await database.Category.update(
            {
                Cname: name
            },
            {
                where: {
                    id,
                },
            }
        )
        return res.send("Category updated!")
    },

    deleteCategory: async (req, res) => {
        const { id } = req.params
        await database.Category.destroy({
            where: { id }
        })
        return res.send("Category Deleted!")
    }
    
};

module.exports = CategoryController