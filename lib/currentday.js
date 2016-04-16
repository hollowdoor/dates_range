var Month = require('./month'),
    DayOfWeek = require('./dayofweek'),
    dayOfYear = require('./dayofyear');

module.exports = CurrentDay;

function CurrentDay(_date){
    var date = new Date(_date);
    this.date = date;

    defineGets(this, {
        'day': function(){
            return date.getDate();
        },
        'year': function(){
            return date.getFullYear();
        },
        'month': function(){
            return new Month(date);
        },
        'dayOfWeek': function(){
            return new DayOfWeek(date);
        },
        'dayOfYear': function(){
            return dayOfYear(date);
        },
        quarter: function(){
            return ~~((date.getMonth()) / 3) + 1;
        },
        iso: function(){
            return date.toISOString();
        }
    });
}

CurrentDay.prototype.toString = function(){
    return this.month + ' ' + this.day + ', ' + this.year;
};

function defineGets(currentday, props){
    var p = {};
    for(var n in props){
        p[n] = {
            get: props[n]
        };
    }

    Object.defineProperties(currentday, p);
}

if (!Date.prototype.toISOString) {
  (function() {

    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toISOString = function() {
      return this.getUTCFullYear() +
        '-' + pad(this.getUTCMonth() + 1) +
        '-' + pad(this.getUTCDate()) +
        'T' + pad(this.getUTCHours()) +
        ':' + pad(this.getUTCMinutes()) +
        ':' + pad(this.getUTCSeconds()) +
        '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        'Z';
    };

  }());
}
