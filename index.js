var oneDay = 86400000,
    //date.setTime( date.getTime() + days * 86400000 );
    //var oneDay = 1000 * 60 * 60 * 24;
    CurrentDay = require('./lib/currentday');

/*
git remote add origin https://github.com/hollowdoor/dates_range.git
git push -u origin master
*/
function DateRange(start, end, options){

    if(options === undefined && end === undefined){
        options = {};
        this.endDate.setTime(8640000000000000);
    }else if(end !== undefined){
        try{
            this.endDate = new Date(end);
            options = options || {};
        }catch(e){
            options = end;
            this.endDate.setTime(8640000000000000);
            /*throw new TypeError('Second argument "'+end
            +'" is not an instance of Date, or date string.');*/
        }
    }

    try{
        this.startDate = new Date(start)
    }catch(e){
        this.startDate = Date.now();
    }

    this.date = this.startDate;
    this.start = this.startDate.getTime();
    this.end = this.endDate.getTime();
    this.time = this.start;
}

DateRange.prototype = {
    constructor: DateRange
};

DateRange.prototype[Symbol.iterator] = function(){
    var done = false, self = this;
    return {
        next: function(){
            self.date.setTime( self.date.getTime() + oneDay );
            self.time = self.date.getTime();
            if(self.time > self.end){
                done = true;
            }
            return {
                value: new CurrentDay(self.date),
                done: done
            };
        }
    };
};



module.exports = function DateRangeFactory(startDate, endDate, options){
    return new DateRange(startDate, endDate, options);
};

/* INFO
min-max time
http://ecma-international.org/ecma-262/5.1/#sec-15.9.1.1
*/
