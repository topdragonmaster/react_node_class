/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const data      = require('./data');
const http      = require('http');
const hostname  = 'localhost';
const port      = 3035;
const express   = require('express')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/search', (req, res) => {
    const {searchTextList} = req.body
    // console.log(searchTextList)
    const filteredData = data.filter(item => {
        let existFlage = false
        searchTextList.forEach(searchText => {
            if(item.tags.indexOf(searchText.toLowerCase()) >= 0 || item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
            {
                existFlage = true
                return
            }
        })
        
        return existFlage
    })
    res.send({data: filteredData});

    });
/** 
 * Start the Node Server Here...
 * 
 * The http.createServer() method creates a new server that listens at the specified port.  
 * The requestListener function (function (req, res)) is executed each time the server gets a request. 
 * The Request object 'req' represents the request to the server.
 * The ServerResponse object 'res' represents the writable stream back to the client.
 */
 var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server is listening at http://%s:%s", host, port)
 })


// console.log(`[Server running on ${hostname}:${port}]`);
