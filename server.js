const app = require('./app');
const db = require('./config/db')
const UserModel = require('./models/user.model')
const {auth} =require('./auth');

const port = 3000;

app.get('/',(req, res)=>{
    res.send("Hello World!!")
});

app.listen(port, ()=>{
    console.log(`server listening on port http://localhost:${port}`);
})

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
