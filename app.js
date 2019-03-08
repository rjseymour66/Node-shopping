require('dotenv').config();

const path = require('path');
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  User.findById('5c81d6785c59b05cf8994483')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err))
})

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

mongoose.connect(`mongodb+srv://shopper1:${process.env.MONGODB_PASS}@cluster0-egia9.mongodb.net/shop?retryWrites=true1`)

  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Ryan',
          email: 'ryan@test.com',
          cart: {
            items: []
          }
        })
        user.save()
      }
    })

    app.listen(4000)
  })
  .catch(err => {
    console.log(err);
  })