let a
let date

setInterval(() => {
    a=new Date();
    date = a.toDateString()
    
    document.getElementById('time').innerHTML=a.toLocaleTimeString() + " on " + date;
}, 1000);