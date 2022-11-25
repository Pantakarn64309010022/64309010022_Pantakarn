let obj={
"firstName ": "Jonh",
"lastName": "Smith",
"isAlive": true,
"age":25,
"address":{
    "streesAddress":"21 2nd Strees",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
},
    "phoneNumber":[{
        "type":"home",
        "number":"212 555-1234"
        
    },
{
    "type":"office",
    "number":"646 555-456"
},
{
    "type":"Mobie",
    "number":"123 456-7890"
}],
    "chilldern":[],
    "spouse": null
};
console.log(obj.phoneNumber[1].number)