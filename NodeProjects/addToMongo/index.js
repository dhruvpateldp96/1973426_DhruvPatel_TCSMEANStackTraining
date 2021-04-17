const mongoose = require('mongoose')
const fs = require('fs');

const { Schema } = mongoose;

const callSchema = new Schema({
  _id:  String, // String is shorthand for {type: String}
  source: String,
  destination:   String,
  sourceLocation: String,
  destinationLocation: String,
  callDuration: String,
  roaming: String,
  callCharge: String
});

const CallRecords = mongoose.model('CallRecords', callSchema);

const url = 'mongodb://127.0.0.1:27017/records'
mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection

db.once('open', _ => {
    console.log('Database connected:', url)
})
  
db.on('error', err => {
    console.error('connection error:', err)
})
  


let rawdata = fs.readFileSync('call_data.json');
let call_data = JSON.parse(rawdata);
CallRecords.insertMany(call_data).then(records => console.log("INSERTED", records)).catch(err => console.log("ERROR", err))
