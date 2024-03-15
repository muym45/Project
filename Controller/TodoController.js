const database = require('../db/connection');
const response = require('../helpers/response');
// membuat getTodo = localhost:6000/api/todos

const getAllTodo = (req, res) => {
    const querySql = 'SELECT * FROM todo';
    database.query(querySql, (err, result) => {
        if(err) throw err;
        response(res, 200, {message: 'Succes get Todo', data:result})
    })
}

const storeTodo = (req, res) => {
    const {title,description} = req.body;
    database.query('insert into todo(title,description) values(?,?)',[title,description],(err,result)=>{
        if(err) throw err;
        res.json({
            message:'success created todo',
        },201)
    })
}

const updateTodo = (req, res) =>{
    const id = req.params.id;
    const {title,description} = req.body;

    database.query('UPDATE todo SET title = ?, description = ? WHERE id = ?', [title,description,id], (err,result)=>{
        if(err){
            throw err;
        }else{
            if(result.affectedRows === 0){
                res.json({
                    message : `Todo dengan id: ${id} tidak ditemukan`
                },404)
            }else{
                res.json({
                    message : 'Data berhasil di perbarui'
                },201)
            }
        }
    })
}

const deleteTodo = (req, res) => {
    const id = req.params.id;
    database.query('DELETE from todo where id = ?',[id],(err,result)=>{

        if(err){
            throw err;
        }else{
            if(result.affectedRows === 0){
                res.json({
                    message : `Todo dengan id: ${id} tidak ditemukan`
                },404)
            }else{
                res.json({
                    message : 'Success delete todo'
                },200)
            }
        }
    })
}

const ShowTodo = (req, res) => {
    const id = req.params.id;
    database.query('select * from todo where id = ?',[id],(err,result)=>{

        if(err){
            throw err;
        }else{
            if(result.affectedRows === 0){
                res.json({
                    message : `Todo dengan id: ${id} tidak ditemukan`
                },404)
            }else{
                res.json({
                    message : `Success get todo ${id}`,
                    data : result [0]
                },200)
            }
        }
    })
}

module.exports = {getAllTodo,storeTodo,deleteTodo,updateTodo,ShowTodo};