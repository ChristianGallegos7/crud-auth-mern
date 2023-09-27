import app from './app.js'
import {connectDB} from './db.js'

connectDB();
console.log(connectDB());
app.listen(3000)
console.log('server listening in port', 3000);