 const fs = require('fs');
const path = require('path');
const x = require('u18Path')
 x.createUser1 ()
// const  userlist =require('/Users/user')
//  x.userlist()
//  const  y = require('/Users/json');
//  const y.User('Max',"" , "male");
//  const  y = require('./xxx');
//  y.User('Max',"" , "male");

 // const u18Path = path.join(__dirname, '1800')
 // const u20Path = path.join(__dirname, '2000')
 // fs.rename(`${__dirname}/1800`,`${__dirname}/timeUsers/1800`,err => {
 //     if (err){
 //         console.log(err)
 //     }
 // })
 // fs.rename(`${__dirname}/2000`,`${__dirname}/timeUsers/2000`,err => {
 //     if (err){
 //         console.log(err)
 //     }
 // })

// fs.mkdir(`${__dirname}/timeUsers/1800`,{recursive:true},err => {
//     if (err){
//         console.log(err)}})
//  fs.mkdir(`${__dirname}/timeUsers/2000`,{recursive:true},err => {
//      if (err){
//          console.log(err)}})

 // fs.mkdir(`${__dirname}/Users`,{recursive:true},err => {
 //     if (err){
 //         console.log(err)}})


 fs.readdir(u18Path, (err, files) => {
     if(err){
         console.log(err)
         return
     }
     files.forEach(e => sort18(e))
 })

 fs.readdir(u20Path, (err, files) => {
     if(err){
         console.log(err)
         return
     }
     files.forEach(e => sort20(e))
 })


 function sort18(fileName) {
     fs.readFile(path.join(u18Path, fileName), (err, data) => {
         if(err){
             console.log(err)
             return
         }
         let json = JSON.parse(data.toString())
         if(json.gender == 'male'){
             fs.rename(path.join(u18Path, fileName), path.join(u18Path, fileName), err1 => {
                 console.log(err1)
             })
         }
     })
 }

 function sort20(fileName) {
     fs.readFile(path.join(u20Path, fileName), (err, data) => {
         if(err){
             console.log(err)
             return
         }
         let json = JSON.parse(data.toString())
         if(json.gender == 'female'){
             fs.rename(path.join(u20Path, fileName), path.join(u20Path, fileName), err1 => {
                 console.log(err1)
             })
         }
     })
 }




