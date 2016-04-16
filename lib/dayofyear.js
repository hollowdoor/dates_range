/*
Use this instead if there is some problem with the other below.
module.exports = function dayOfYear(now){
    //var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    //var diff = now - start;
    var diff = now - start + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    //alert(day);
    return day;
};*/
//http://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366/27790471#27790471
module.exports = function(date){
    var y=date.getFullYear(), m=date.getMonth();
    return m*31-(m>1?(1054267675>>m*3-6&7)-(y&3||!(y%25)&&y&15?0:1):0)+date.getDate();
};
