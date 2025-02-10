const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");
const client=require('./connection.js');

const app = express();
const port = 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

client.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the pg server.');
});





app.get('/Employee', (req, res)=>{

  client.query(`Select * from "Employee"  `, (err, result)=>{
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})

app.post('/Add_Employee',(req,res) => {

  const{ fname,lname,birthofdate,nationality,salary,desc,type,gender }=req.body;
  console.log(fname,lname,birthofdate,nationality,salary,desc,type,gender);
  

  let insertquery = `Insert into "Employee" (emp_fname,emp_lname,emp_birthofdate,emp_nationality,emp_salary,emptype_id,emp_gender) VALUES ('${fname}','${lname}','${birthofdate}','${nationality}','${salary}',${type},'${gender}') `;
  client.query(insertquery,(err,result) => {
        if(!err){
         return res.redirect("http://localhost:3000/AddEmployee");
       
        }else{
          console.log(err);
        }

  });
  client.end;

})


app.post('/Employee_Update/:id',(req,res) => {

  const{ fname,lname,type,nationality,salary,birthofdate }=req.body;
  console.log(fname,lname,type,nationality,salary);
let emp_id=req.params.id;

console.log("emp_id=" + emp_id);


client.query(`Update "Employee" set emp_fname='${fname}',emp_lname='${lname}',emp_birthofdate='${birthofdate}' , emptype_id='${type}',emp_nationality='${nationality}' , emp_salary='${salary}' where emp_id=${emp_id}`, (err, result) => {
    
      if(!err){
        return res.redirect(`http://localhost:3000/EditEmployees`);

      }else{
        console.log(err);
      }
      
});
client.end;
})


app.get('/Passengers', (req, res)=>{

  client.query(`Select * from "Passengers"  `, (err, result)=>{
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})




app.post('/Add_Passengers',(req,res) => {

  const{ Fname,Lname,Destination,Nationality }=req.body;
  console.log(Fname,Lname,Destination,Nationality);
  

  let insertquery = `Insert into "Passengers" (p_fname,p_lname,p_destination,p_nationality) VALUES ('${Fname}','${Lname}','${Destination}','${Nationality}') `;
  client.query(insertquery,(err,result) => {
        if(!err){
         return res.redirect("http://localhost:3000/AddPassengers");
       
        }else{
          console.log(err);
        }

  });
  client.end;

})




app.post('/Remove_Passengers/:id', (req, res) => {

  let p_id = req.params.id;
  console.log("p_id = " + p_id);
  
  client.query(`delete from "Passengers" where p_id = ${p_id} `, (err, result) => {
      if (!err) {
          return res.redirect("http://localhost:3000/DeletePassengers");
      }
      else {
          console.log(err);
      }
  });

  client.end;
})

app.post('/Passengers_Update/:id',(req,res) => {

  const{ Fname,Lname,Destination,Nationality }=req.body;
  console.log(Fname,Lname,Destination,Nationality);
let p_id=req.params.id;

console.log("p_id=" + p_id);


client.query(`Update "Passengers" set p_fname='${Fname}',p_lname='${Lname}',p_destination='${Destination}',p_nationality='${Nationality}' where p_id=${p_id}`, (err, result) => {
    
      if(!err){
        return res.redirect("http://localhost:3000/EditPassengers");

      }else{
        console.log(err);
      }
      
});
client.end;
})
    




app.get('/Tickets', (req, res)=>{

  client.query(`Select * from "Ticket"  `, (err, result)=>{
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})



app.post('/Tickets_Insert',(req,res) => {

  const{ TickDate,FromStation,ToStation,Ticktime }=req.body;
  console.log(TickDate,FromStation,ToStation,Ticktime);
  

  let insertquery = `Insert into "Ticket" (tick_date,from_station,to_station,tick_time) VALUES ('${TickDate}','${FromStation}','${ToStation}','${Ticktime}') `;
  client.query(insertquery,(err,result) => {
        if(!err){
         return res.redirect("http://localhost:3000/Tickets");
        }else{
          console.log(err);
        }

  });
  client.end;

})


app.post('/Add_Tickets',(req,res) => {

  const{ TickDate,FromStation,ToStation,Ticktime }=req.body;
  console.log(TickDate,FromStation,ToStation,Ticktime);
  

  let insertquery = `Insert into "Ticket" (tick_date,from_station,to_station,tick_time) VALUES ('${TickDate}','${FromStation}','${ToStation}','${Ticktime}') `;
  client.query(insertquery,(err,result) => {
        if(!err){
         return res.redirect("http://localhost:3000/AddTickets");
        }else{
          console.log(err);
        }

  });
  client.end;

})


app.post('/Remove_Tickets/:id', (req, res) => {

  let Tickid = req.params.id;
  console.log("Tickid = " + Tickid);
  
  client.query(`delete from "Ticket" where tick_id = ${Tickid} `, (err, result) => {
      if (!err) {
          return res.redirect("http://localhost:3000/DeleteTickets");
      }
      else {
          console.log(err);
      }
  });

  client.end;
})

app.post('/Tickets_Update/:id',(req,res) => {

  const{ Ticktime,TickDate,FromStation,ToStation }=req.body;
  console.log(Ticktime,TickDate,FromStation,ToStation);
let tick_id=req.params.id;

console.log("tick_id=" + tick_id);


client.query(`Update "Ticket" set tick_date='${TickDate}',tick_time='${Ticktime}',from_station='${FromStation}' , to_station='${ToStation}' where tick_id=${tick_id}`, (err, result) => {
    
      if(!err){
        return res.redirect("http://localhost:3000/EditTickets");

      }else{
        console.log(err);
      }
      
});
client.end;
})


app.post('/admins', (req, res)=>{

 const{user_name,password}=req.body;
 console.log(user_name);
  let adminquery=`Select * from "admins" where user_name='${user_name}' AND password='${password}'  `;
  console.log(adminquery);
  client.query(adminquery, (err, result)=>{
   
     if(!err){
       if(result.rowCount == 1){
        return res.redirect("http://localhost:3000/BootstrapNavbar");
       
       }
       else{
        console.log("NO.")
        return res.redirect("http://localhost:3000/");
       }

      }
      else{
          console.log(err);
      }
  });
  client.end;
})


app.post('/employeeslogin', (req, res)=>{

  const{empusername,emppassword}=req.body;
  console.log(empusername,emppassword);
   let employeequery=`Select * from "employees_login" where emp_username='${empusername}' AND emp_password='${emppassword}'  `;
   console.log(employeequery);
   client.query(employeequery, (err, result)=>{
    
      if(!err){
        if(result.rowCount == 1){
         return res.redirect("http://localhost:3000/BootstrapNavbar");
        
        }
        else{
         console.log("NO.")
         return res.redirect("http://localhost:3000/employees");
        }
 
       }
       else{
           console.log(err);
       }
   });
   client.end;
 })

 app.post('/driverlogin', (req, res)=>{

  const{driverusername,driverpassword}=req.body;
  console.log(driverusername,driverpassword);
   let driverquery=`Select * from "driver_login" where driver_username='${driverusername}' AND driver_password='${driverpassword}'  `;
   console.log(driverquery);
   client.query(driverquery, (err, result)=>{
    
      if(!err){
        if(result.rowCount == 1){
         return res.redirect("http://localhost:3000/tripschedule");
        
        }
        else{
         console.log("NO.")
         return res.redirect("http://localhost:3000/driverlogin");
        }
 
       }
       else{
           console.log(err);
       }
   });
   
   client.end;
 })





app.get('/Drivers', (req, res)=>{

  client.query(`Select * from "Employee" where emptype_id=3  `, (err, result)=>{

      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})


app.get('/DataEntryOperator', (req, res)=>{

  client.query(`Select * from "Employee" where emptype_id=2  `, (err, result)=>{
    
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})

app.get('/EmpType', (req, res)=>{
// const{emp_desc}=req.body;
// console.log(emp_desc);

let emptype_id=req.params.id;


  client.query(`Select * from "EmployeeType" `, (err, result)=>{
    console.log("emptype_id=" + emptype_id);
    console.log(result);
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})


app.post('/Remove_Operator/:id', (req, res) => {

  let empid = req.params.id;
  console.log("empid = " + empid);
  
  client.query(`delete from "Employee" where emp_id = ${empid} `, (err, result) => {
      if (!err) {
          return res.redirect("http://localhost:3000/RemoveOperator");
      }
      else {



        
          console.log(err);
      }
  });

  client.end;
})




app.post('/Remove_Drivers/:id', (req, res) => {

  let empid = req.params.id;
  console.log("empid = " + empid);
  
  client.query(`delete from "Employee" where emp_id = ${empid} `, (err, result) => {
      if (!err) {
          return res.redirect("http://localhost:3000/DeleteDrivers");
      }
      else {
          console.log(err);
      }
  });

  client.end;
})

app.get('/Waiter', (req, res)=>{

  client.query(`Select * from "Employee" where emptype_id=5  `, (err, result)=>{
    
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})

app.post('/Remove_Waiters/:id', (req, res) => {

  let empid = req.params.id;
  console.log("empid = " + empid);
  
  client.query(`delete from "Employee" where emp_id = ${empid} `, (err, result) => {
      if (!err) {
          return res.redirect("http://localhost:3000/DeleteWaiter");
      }
      else {
          console.log(err);
      }
  });

  client.end;
})




app.get('/Engineers', (req, res)=>{

  client.query(`Select * from "Employee" where emptype_id=4  `, (err, result)=>{
    
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})

app.post('/Remove_Engineers/:id', (req, res) => {

  let empid = req.params.id;
  console.log("empid = " + empid);
  
  client.query(`delete from "Employee" where emp_id = ${empid} `, (err, result) => {
      if (!err) {
          return res.redirect("http://localhost:3000/DeleteEngineer");
      }
      else {
          console.log(err);
      }
  });

  client.end;
})

app.get('/Trains', (req, res)=>{

  client.query(`Select * from "Trains"  `, (err, result)=>{
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})



app.post('/Trains_Insert',(req,res) => {

  const{ Tr_Destination,Tr_Speed,Tr_MotorPower,Tr_Weight,Tr_Passengers,Tr_Number }=req.body;
  console.log(Tr_Destination,Tr_Speed,Tr_MotorPower,Tr_Passengers,Tr_Number);
  

  let insertquery = `Insert into "Trains" (train_destination,train_speed,train_motorpower,train_weight,train_passengers,train_number) VALUES ('${Tr_Destination}','${Tr_Speed}','${Tr_MotorPower}','${Tr_Weight}','${Tr_Passengers}','${Tr_Number}') `;
  client.query(insertquery,(err,result) => {
        if(!err){
         return res.redirect("http://localhost:3000/Trains");
        }else{
          console.log(err);
        }

  });
  client.end;

})


app.post('/Add_Train',(req,res) => {

  const{ Tr_Destination,Tr_Speed,Tr_MotorPower,Tr_Weight,Tr_Passengers,Tr_Number }=req.body;
  console.log(Tr_Destination,Tr_Speed,Tr_MotorPower,Tr_Passengers,Tr_Number);
  

  let insertquery = `Insert into "Trains" (train_destination,train_speed,train_motorpower,train_weight,train_passengers,train_number) VALUES ('${Tr_Destination}','${Tr_Speed}','${Tr_MotorPower}','${Tr_Weight}','${Tr_Passengers}','${Tr_Number}') `;
  client.query(insertquery,(err,result) => {
        if(!err){
         return res.redirect("http://localhost:3000/AddTrain");
        }else{
          console.log(err);
        }

  });
  client.end;

})




app.post('/Remove_Trains/:id', (req, res) => {

  let Trainid = req.params.id;
  console.log("Trainid = " + Trainid);
  
  client.query(`delete from "Trains" where train_id = ${Trainid} `, (err, result) => {
      if (!err) {
          return res.redirect("http://localhost:3000/DeleteTrains");
      }
      else {
          console.log(err);
      }
  });

  client.end;
})

app.post('/Trains_Update/:id',(req,res) => {

  const{ Tr_Weight,Tr_MotorPower,Tr_Number,Tr_Passengers,Tr_Speed ,Tr_Destination}=req.body;
  console.log(Tr_Weight,Tr_MotorPower,Tr_Number,Tr_Passengers,Tr_Speed,Tr_Destination );
let train_id=req.params.id;

console.log("train_id=" + train_id);


client.query(`Update "Trains" set train_weight='${Tr_Weight}',train_destination='${Tr_Destination}', train_motorpower='${Tr_MotorPower}',train_number='${Tr_Number}' , train_passengers='${Tr_Passengers}',train_speed='${Tr_Speed}' where train_id=${train_id}`, (err, result) => {
    
      if(!err){
        return res.redirect("http://localhost:3000/EditTrains");

      }else{
        console.log(err);
      }
      
});
client.end;
})



app.get('/Reservation', (req, res)=>{

  client.query(`Select * from "Reservation"  `, (err, result)=>{
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})

app.post('/Reservation_Insert',(req,res) => {
  const{trainnumber,pid,pfname,plname,tickid,dfname,dlname,resdate,restime }=req.body;
  console.log("NAME: " + pfname);
  console.log(trainnumber,pid,pfname,plname,tickid,dfname,dlname,resdate,restime );
  

  let insertquery = `Insert into "Reservation" (train_number,p_id,p_fname,p_lname,tick_id,d_fname,d_lname,res_date,res_time) VALUES (${trainnumber},${pid},'${pfname}','${pfname}',${tickid},'${dfname}','${dlname}','${resdate}','${restime}') `;
  client.query(insertquery,(err,result) => {
        if(!err){
         return res.redirect("http://localhost:3000/AddReservations");
        }else{
          console.log(err);
        }

  });
  client.end;

})


app.post('/Reservations_Update/:id',(req,res) => {

  const{trainnumber,pid,pfname,plname,tickid,dfname,dlname,resdate,restime }=req.body;
  console.log(trainnumber,pid,pfname,plname,tickid,dfname,dlname,resdate,restime );
let res_id=req.params.id;

console.log("res_id=" + res_id);


client.query(`Update "Reservation" set train_number=${trainnumber},p_id=${pid}, p_fname='${pfname}',p_lname='${plname}' , tick_id=${tickid},d_fname='${dfname}',d_lname='${dlname}',res_date='${resdate}',res_time='${restime}' where res_id=${res_id}`, (err, result) => {
    
      if(!err){
        return res.redirect("http://localhost:3000/EditReservation");

      }else{
        console.log(err);
      }
      
});
client.end;
})


app.post('/Reservation_delete/:id', (req, res) => {

  let resid = req.params.id;
  console.log("resid = " + resid);
  
  client.query(`delete from "Reservation" where res_id = ${resid} `, (err, result) => {
      if (!err) {
          return res.redirect("http://localhost:3000/DeleteReservation");
      }
      else {
          console.log(err);
      }
  });

  client.end;
})




app.get('/Trips', (req, res)=>{

  client.query(`Select * from "Trips"  `, (err, result)=>{
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})

app.get('/AvailableTrips', (req, res)=>{

  client.query(`Select * from "Trips" where trip_status='Y'  `, (err, result)=>{
      if(!err){
          console.log(result.rows);
          res.send(result.rows);
          
      }
      else{
          console.log(err);
          
          
      }
  });
  client.end;
 
})


app.post('/Add_Trips',(req,res) => {

  const{ tripnumber,triptime,tripdate,passengers,fromstation,tostation,trainnumber,pfname,plname,pnationality,pdob,status }=req.body;
  console.log(tripnumber,triptime,tripdate,passengers,fromstation,tostation,trainnumber,pfname,plname,pnationality,pdob,status);
  

  let insertquery = `Insert into "Trips" (trip_number,trip_time,trip_date,trip_passengers,trip_fromstation,trip_tostation,train_number,trip_pfname,trip_plname,trip_pnationality,trip_pdob,trip_status) VALUES ('${tripnumber}','${triptime}','${tripdate}','${passengers}','${fromstation}','${tostation}',${trainnumber},'${pfname}','${plname}','${pnationality}','${pdob}','${status}') `;
  client.query(insertquery,(err,result) => {
        if(!err){
         return res.redirect("http://localhost:3000/AddTrips");
        }else{
          console.log(err);
        }

  });
  client.end;

})


app.post('/Edit_Trips/:id',(req,res) => {

  const{ trainnumber,tripnumber,triptime,tripdate,passengers,fromstation,tostation,pfname,plname,pnationality,pdob,status }=req.body;
  console.log(trainnumber,tripnumber,triptime,tripdate,passengers,fromstation,tostation,pfname,plname,pnationality,pdob,status);
let trip_id=req.params.id;

console.log("trip_id=" + trip_id);


client.query(`Update "Trips" set train_number=${trainnumber}, trip_number=${tripnumber},trip_time='${triptime}',trip_date='${tripdate}' , trip_passengers=${passengers},trip_fromstation='${fromstation}',trip_tostation='${tostation}',trip_pfname='${pfname}',trip_plname='${plname}',trip_pnationality='${pnationality}',trip_pdob='${pdob}',trip_status='${status}' where trip_id=${trip_id}`, (err, result) => {
    
      if(!err){
        return res.redirect("http://localhost:3000/EditTrips");

      }else{
        console.log(err);
      }
      
});
client.end;
})

app.post('/Edit_AvailableTrips/:id',(req,res) => {

  const{ pfname,plname,pnationality,pdob }=req.body;
  console.log(pfname,plname,pnationality,pdob);
let trip_id=req.params.id;

console.log("trip_id=" + trip_id);


client.query(`Update "Trips" set trip_pfname='${pfname}',trip_plname='${plname}',trip_pnationality='${pnationality}',trip_pdob='${pdob}' where trip_id=${trip_id}`, (err, result) => {
    
      if(!err){
        return res.redirect("http://localhost:3000/availabletrips");

      }else{
        console.log(err);
      }
      
});
client.end;
})




app.post('/Delete_Trips/:id', (req, res) => {

  let tripid = req.params.id;
  console.log("tripid = " + tripid);
  
  client.query(`delete from "Trips" where trip_id = ${tripid} `, (err, result) => {
      if (!err) {
          return res.redirect("http://localhost:3000/DeleteTrips");
      }
      else {
          console.log(err);
      }
  });

  client.end;
})



app.listen(port, () => {
  console.log(`Train Reservation app is listening at http://localhost:${port}`);
});