const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')
const db = require('./db')
const resolve = file=>path.resolve(__dirname, file)
const app = express()

app.set('port', (process.env.port || 9999))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')))

app.post('/api/setup', function (req, res) {
 var md5 = crypto.createHash('md5'); 
 var password = md5.update(req.body.password).digest('base64');   
  new db.User(req.body)
    .save()
    .then(()=> {
      res.send("123")
      res.status(200).end()
    })
    .catch(()=>res.status(500).end())
})
app.post('/api/login', (req, res) => {
  const {name, pwd} = req.body
  db.User.findOne({name}, (err, doc) => {
    switch (true) {
      case !!err:
        console.log(err)
        break
      case !doc:
        res.send({state: 0, msg: '账号不存在'})
        break
      case doc.pwd === pwd:
        res.send({state: 1, msg: '登陆成功'})
        break
      case doc.pwd !== pwd:
        res.send({state: 2, msg: '密码错误'})
        break
      default :
        res.send({state: 3, msg: '未知错误'})
    }
  })
})
app.get('*', function (req, res) {
  const fileName = 'index.html'
  const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
  res.send(html)
})

app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})
