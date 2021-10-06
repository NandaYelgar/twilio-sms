
const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 

//api generated from twilio 
const accountSid = 'AC9ee9db5c43c7370f4cc071db898f61eb';
const authToken = '5fd4b6155d6a2c29ab9aa06d56d7e23c'; 
const client = new twilio(accountSid, authToken);

const app = express(); 

app.use(cors()); 


app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})


app.get('/send-text', (req, res) => {
 
    res.send('Hello to the Twilio Server')

    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: '+91123456789',  // To number
        from: '+12677321613' //  Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))