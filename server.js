const app = require('./app');
const db = require('./config/db')
const UserModel = require('./models/user.model')
const {auth} =require('./auth');

// const port = 3000;

app.get('/',(req, res)=>{
    res.send("Hello World!!")
});

// app.listen(port, ()=>{
//     console.log(`server listening on port http://localhost:${port}`);
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
