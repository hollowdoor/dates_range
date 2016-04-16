dates-range
===========

Install
-------

`npm install --save dates-range`

Example
-------

```javascript
var dateRange = require('dates-range');

var dates = dateRange(new Date('January 1, 2000'), new Date('January 11 2016'));

for(var day of dates){
    console.log(day + ' quarter ' + day.quarter);
    console.log(day.month + ' '+day.day + ' ' + day.year);
}

```

Iterations
----------

Each iteration of the loop produces a `CurrentDay` object.

CurrentDay
----------

### Properties of CurrentDay

-	day (Day of the month.)
-	year
-	month (Month object)
-	dayOfWeek (DayOfWeek object)
-	dayOfYear
-	quarter (The Financial Quarter)
-	iso (The ISO date string)
-	date (The instance of Date)

### day.toString() -> string

An instance of `CurrentDay` in a string context returns the same as:

```javascript
day.month + ' ' + day.day + ', ' + day.year;
```

Month
-----

### Properties of Month

-	number
-	name (The English name of the month)
-	short (The abbreviation for the month)

### month.toString() -> string

`dates.month` returns an object, but in string contexts returns the month name.

```javascript
var dates = dateRange(new Date('January 1, 2000'), new Date('January 11 2016'));

for(var day of dates){
    //day.month.toString gets called printing the month name
    console.log(day.month + ' '+day.day + ' ' + day.year);
}
```

DayOfWeek
---------

### Properties of DayOfWeek

-	number
-	name (The English name of the day of the week.)
-	short (The abbreviation for the day of the week.)

### dayOfWeek.toString() -> string

`dates.dayOfWeek` returns an object, but in string contexts returns the day of week name.

```javascript
var dates = dateRange(new Date('January 1, 2000'), new Date('January 11 2016'));

for(var day of dates){
    //print the day of the week
    console.log(day.dayOfWeek + ' ');
}
```

About
-----

The object returned from calling `require('dates-range')()` is truly just for iteration.

Really you can't do anything else with it. Maybe you can call `dates.next`, or mash together a larger iterator with a generator function using `yield dates`.

Getting info with properties can be fast as the getters are synchronously lazy calling internal `Date` methods only when you need them.

The `for of` syntax is standard, but only supported by a few environments with, or without flags. Use at your own risk.

Happy coding. :)
