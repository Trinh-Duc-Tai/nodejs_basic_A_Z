import connection from '../configs/connectDB';
let getHomepage = (req, res) => {
    // return  res.render('test/index.ejs')
    //logic
    let data = []
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            console.log(results)        //nhớ bật xampp lên
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })

            });

            return res.render('index.ejs', { dataUser: JSON.stringify(data) })

        })
}
module.exports = {
    getHomepage
}