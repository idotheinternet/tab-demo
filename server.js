const express = require('express'),
server = express(), 
users = [
    {
        project: "12345",
        name: "John Smitherson",
        address: "1701 Main Street",
        province: "Denver, CO 80101",
        year: "1996",
        phone: "(303)555-5555",
        email: "johnsmitherson@email.com",
        store: "1502",
        net: "$1,562.24",
        margin: "41.70%",
        poItems: "9",
        woItems: "4",
        poTotal: "$3,762.97",
        woTotal: "$3,762.97",
        nTotal: "64"
    }, 
    {
        project: "218718",
        name: "Bryce Anderson",
        address: "1234 A Street",
        province: "Denver, CO 80237",
        year: "2009",
        phone: "(303)123-1234",
        email: "bryceanderson@email.com",
        store: "1650",
        net: "$1,262.12",
        margin: "63.01%",
        poItems: "6",
        woItems: "2",
        poTotal: "$7,899.00",
        woTotal: "$7,001.20",
        nTotal: "72"
    },
    {
        project: "927346",
        name: "idk blah",
        address: "1 idk Street",
        province: "Denver, CO 80237",
        year: "2012",
        phone: "(303)987-6543",
        email: "idk@email.com",
        store: "1111",
        net: "$1,111.11",
        margin: "11.11%",
        poItems: "7",
        woItems: "3",
        poTotal: "$1,111.11",
        woTotal: "$1,111.11",
        nTotal: "55"
    }
];
server.use(express.static("./app"));
server.get("/data/" + "*", (req, res)=> {
    const url = req.url.split("/")[2];
    let i = users.length;
    while(i--) if(users[i].project === url) return res.send(users[i]);
});
server.listen(process.env.PORT || 8080, console.log("App Running"));