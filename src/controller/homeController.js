// import connection from '../configs/connectDB';
import pool from '../configs/connectDB';
let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users` ');
    // let check = await pool.execute('SELECT * FROM `users` ');
    // console.log(check[0])
    // return res.render('index.ejs', { dataUser: check[0], test: "abc string test" })
    return res.render('index.ejs', { dataUser: rows, test: "abc string test" })
    console.log('>>> check rows: ', rows)
}

let getDetailPage = async (req,res) => {
    let userId = req.params.id
    let [user] = await pool.execute('Select * from `users` where id=?',[userId])
    // console.log('check req params: ',req.params)
    console.log('check req user: ',user)
    return res.send(JSON.stringify(user))
}
module.exports = {
    getHomepage,getDetailPage
}