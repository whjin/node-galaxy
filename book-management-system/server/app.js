const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./route/userRoute');
const bookRoute = require('./route/bookRoute');
const borrowRoute = require('./route/borrowRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const { mongoUrl } = require('./config/config');

const app = express();

mongoose.connect(mongoUrl)
  .then(() => console.log('数据库连接成功！'))
  .catch(err => console.log('数据库连接失败：', err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRoute);
app.use('/api/book', bookRoute);
app.use('/api/borrow', borrowRoute);

app.use(errorMiddleware);

const POST = 3000
app.listen(POST, () => console.log(`服务器启动成功，端口号：${POST}`));