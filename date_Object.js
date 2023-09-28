
//The New Date

let d=new Date();
console.log(d);
//output : Mon Sep 25 2023 17:18:55 GMT+0530 (India Standard Time)



//The New Date(year, Month, Day, Hour, minutes, second and milisecond)

let da =new Date(1999, 6, 25,14,35,54,30);
console.log(da);
//output : Sun Jul 25 1999 14:35:54 GMT+0530 (India Standard Time)



//The Date(date String)

let date= new Date("16 Aug 2023");
console.log(date);
//Output : 1 Wed Aug 16 2023 00:00:00 GMT+0530 (India Standard Time)



//The New Date(millisecond)

let dat= new Date(1009874520);
console.log(dat);

//output : Mon Jan 12 1970 22:01:14 GMT+0530 (India Standard Time)



//Yo the date and time String

let d1= new Date();
console.log(d1.toDateString());

//output : 2 Mon Sep 25 2023


let d2= new Date();
console.log(d1.toLocaleDateString());
//output : 2 9/25/2023

let d3= new Date();
console.log(d1.toLocaleString());

//output : 2 9/25/2023, 5:41:32 PM


let d4= new Date();
console.log(d1.toISOString());

//Output : 2 2023-09-25T12:13:24.597Z


let d5= new Date();
console.log(d1.toUTCString());
//Output : 2 Mon, 25 Sep 2023 12:14:19 GMT


let d6= new Date();
console.log(d1.toTimeString());
//Output : 2 17:47:38 GMT+0530 (India Standard Time)


let d7  = new Date();
console.log(d1.toLocaleTimeString());
//Output : 2 5:48:30 PM