const Todo = require('../models/totoModel.js');
const getTodos = async (req, res) => {
    try{
        const todo = await Todo.find();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSingleTodo = async (req, res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTodo =  async (req,res)=>{
    try{
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTodo = async (req,res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        if (!todo) {
            return res.status(404).json({ message: error.message });
        }
        res.status(200).json(todo);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTodo = async (req,res)=>{
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if (!todo) {
            return res.status(404).json({ message: error.message });
        }
        
        res.status(200).json(todo);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTodos,
    getSingleTodo,
    createTodo,
    updateTodo,
    deleteTodo
}