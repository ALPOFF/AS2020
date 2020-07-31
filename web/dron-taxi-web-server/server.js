const sql = require('mssql')
const express = require('express');
const http = require('http');
const PORT = 5000;
const cors = require('cors');
const path = require('path');
let app = express();
let bodyParser = require('body-parser')
const fs = require('fs');

app.use(cors());

app.use(bodyParser.json({
    limit: '50mb',
    extended: true
}))

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}))

app.use('/uploads/images', express.static(`${__dirname}/uploads/images`))
app.use('/uploads/profile_images', express.static(`${__dirname}/uploads/profile_images`))

const config = {
    user: 'AdminTest',
    password: '123123',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'drontaxi',
}


const server = http.createServer(app);


app.post('/auth', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    sql.query(`SELECT 
      *
  FROM [dbo].[users] WHERE [login] LIKE '${email}' AND [psswd] LIKE '${password}'`).then(result => {
        if (result.rowsAffected[0] == 0) {
            console.log('gg')
            console.log(data)
            return res.send({
                "status": true
            });
            //return res.send(data);
            console.log(data)
        } else {
            console.log('x')
            return res.send({
                "id": result.recordsets[0][0].id,
                "status": false
            });
        }

    }).catch(error => console.error(error));
})

app.post('/user', (req, res) => {
    let us_id = req.body.currentUserId;
    console.log(us_id)

    sql.query(`

    	SELECT *
FROM (([dbo].[users]
INNER JOIN [dbo].[relation_us_role] ON [dbo].[relation_us_role].user_id = [dbo].[users].id)
INNER JOIN [dbo].[role] ON [dbo].[role].id = [dbo].[relation_us_role].role_id) WHERE [dbo].[users].id = ${us_id}

`).then(result => {
	console.log('oo:', result.recordsets[0])
        if (result.recordsets[0] != undefined) {
            return res.send(result.recordsets[0]);
        } else {
            console.log('error')
        }

    }).catch(error => console.error(error));
})

app.post('/role', (req, res) => {
    let us_id = req.body.currentUserId;
    console.log(us_id)

    sql.query(`

SELECT *
FROM ((([dbo].[relation_role_sys]
INNER JOIN [dbo].[relation_us_role] ON [dbo].[relation_role_sys].role_id = [dbo].[relation_us_role].role_id)
INNER JOIN [dbo].[syst_func] ON [dbo].[syst_func].id = [dbo].[relation_role_sys].sys_id)  
INNER JOIN [dbo].[role] ON [dbo].[role].id = [dbo].[relation_role_sys].role_id) WHERE [dbo].[relation_us_role].user_id = ${us_id}
 

`).then(result => {
	console.log('jj:', result.recordsets[0])
        if (result.recordsets[0] != undefined) {
            return res.send(result.recordsets[0]);
        } else {
            console.log('error')
        }

    }).catch(error => console.error(error));
})

app.post('/orders', (req, res) => {
    let us_id = req.body.currentUserId;
    console.log(us_id)

    sql.query(`

SELECT [place_from]
      ,[place_to]
      ,[order_time]
      ,[price]
      ,[transport]
      ,[user_id]
  FROM [dbo].[order] WHERE [user_id] = ${us_id}
 

`).then(result => {
	console.log('jj:', result.recordsets[0])
        if (result.recordsets[0] != undefined) {
            return res.send(result.recordsets[0]);
        } else {
            console.log('error')
        }

    }).catch(error => console.error(error));
})

// app.post('/updatepic', (req, res) => {
//     let email = req.body.email;
//     let password = req.body.password;


//     fs.mkdir(`./uploads/images/${results.rows[0].id}`, function() {

//             let picName = i.path.split('/')[img[0].path.split('/').length - 1]
//             let pic= `"http://185.12.95.84:3000/uploads/images/${results.rows[0].id}/${picName}"`

//             fs.writeFile(`./uploads/images/${results.rows[0].id}/${picName}`, i.data, {
//                 encoding: 'base64'
//             }, function(err) {
//                 console.log('File not created: ', err);
//             });


//         sql.query(`


// IF NOT EXISTS(SELECT 1 FROM [dbo].users WHERE id = '${user_id}')
//     INSERT INTO [dbo].users(profile_img)
//     VALUES('${pic}')
// ELSE
//     UPDATE [dbo].users
//     SET profile_img = '${pic}'
//     WHERE id = '${user_id}'


//     	`).then(data => {
//             // if (data.rowsAffected[0] == 0) {
//             //     console.log('gg')
//             //     return res.send(true);
//             //     console.log(data)
//             // } else {
//             //     return res.send(false);
//             // }

//         }).catch(error => console.error(error));


//     });

// })

app.post('/registr', (req, res) => {
    let firstName = req.body.firstName;
    let secondName = req.body.secondName;
    let lastName = req.body.lastName;
    console.log(lastName.length)
    let emailData = req.body.emailData;
    console.log(emailData.length)
    let password = req.body.password;
    console.log('pss:', password.length)
    console.log('password:', password)



    sql.query(`

IF NOT EXISTS(SELECT * FROM [dbo].[users] WHERE [login] LIKE '${emailData}' AND [psswd] LIKE '${password}')
BEGIN
PRINT 'est'
   INSERT INTO [dbo].[users]
           ([login],[psswd],[first_name],[second_name],[last_name])
     VALUES
           ('${emailData}','${password}','${firstName}','${secondName}','${lastName}')
END

    	`).then(data => {

        if (data.rowsAffected[0] == 1) {
            console.log('gg')
            return res.send(false);
            //return res.send(data);
            console.log(data)
        } else {
            return res.send(true);
        }


    }).catch(error => console.error(error));
})

sql.connect(config).then(() => {
    return sql.query `select * from Users`
}).then(result => {
    console.dir(result.recordsets)
}).catch(err => {
    console.log(err)
        // ... error checks
})

sql.on('error', err => {
    console.log(err)
        // ... error handler
})

server.listen(PORT, () => console.log(`Listening on ${PORT}`))