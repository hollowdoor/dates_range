var months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

var short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
module.exports = function Month(date){
    this.number = date.getMonth();
    this.name = months[this.number];
    this.short = months[this.number].slice(0, 3);
    this.number++;
    this.toString = function(){
        return this.name;
    };
};
