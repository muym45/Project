const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./db/connection');
const response = require('./helpers/response');
const TodoRoute = require('./routes/TodoRoute')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const PORT = 6000;

app.listen(PORT, ()=>{
    console.log(`Server berjalan di port: ${PORT}`)
})
app.use('/api/todos', TodoRoute)
//get data todos = localhost:6000/api/todos/localhost:6000/todos

//req = request, res = respon
// app.get('/api/todos', (req, res, next)=>{
// database.query('SELECT * FROM todo', (err,result)=>{
//     if (err) throw err;
//     res.json({
//         message : 'success',
//         data : [result]
//     },200)
// })
// })

// //{post} menambahkan data baru todo = localhost:6000/api/todos/localhost:6000/todos
// app.post('/api/todos',(req,res)=>{
//     const {title,description} = req.body;
//     database.query('insert into todo(title,description) values(?,?)',[title,description],(err,result)=>{
//         if(err) throw err;
//         res.json({
//             message:'success created todo',
//         },201)
//     })

// })



// app.put('/api/todos/:id',(req,res) => {
//     const id = req.params.id;
//     const {title,description} = req.body;

//     database.query('UPDATE todo SET title = ?, description = ? WHERE id = ?', [title,description,id], (err,result)=>{
//         if(err){
//             throw err;
//         }else{
//             if(result.affectedRows === 0){
//                 res.json({
//                     message : `Todo dengan id: ${id} tidak ditemukan`
//                 },404)
//             }else{
//                 res.json({
//                     message : 'Data berhasil di perbarui'
//                 },201)
//             }
//         }
//     })
// })

// app.delete('/api/todos/:id',(req,res)=>{
//     const id = req.params.id;
//     database.query('DELETE from todo where id = ?',[id],(err,result)=>{

//         if(err){
//             throw err;
//         }else{
//             if(result.affectedRows === 0){
//                 res.json({
//                     message : `Todo dengan id: ${id} tidak ditemukan`
//                 },404)
//             }else{
//                 res.json({
//                     message : 'Success delete todo'
//                 },200)
//             }
//         }
//     })
// })

// app.get('/api/todos/:id',(req,res)=>{
//     const id = req.params.id;
//     database.query('select * from todo where id = ?',[id],(err,result)=>{

//         if(err){
//             throw err;
//         }else{
//             if(result.affectedRows === 0){
//                 res.json({
//                     message : `Todo dengan id: ${id} tidak ditemukan`
//                 },404)
//             }else{
//                 res.json({
//                     message : `Success get todo ${id}`,
//                     data : result [0]
//                 },200)
//             }
//         }
//     })
// })