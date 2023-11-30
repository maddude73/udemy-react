const express =require('express');
const app = express();

app.get('/',(req,res) => {
    res.send({hi: 'there homie'});
});

const PORT = process.env.PORT || 2220
app.listen(PORT);