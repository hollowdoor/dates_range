var weekdays = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
module.exports = function DayOfWeek(date){
    this.number = date.getDay();
    this.name = weekdays[this.number];
    this.short = weekdays[this.number].slice(0, 3);
    this.number++;
    this.toString = function(){
        return this.name;
    };
};
