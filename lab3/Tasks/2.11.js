//1
alert( null || 2 || undefined );//2

//2
alert( alert(1) || 2 || alert(3) );//1 then 2

//3
alert( 1 && null && 2 );//null

//4
alert( alert(1) && alert(2) );//1 then undefined

//5
alert( null || 2 && 3 || 4 );//3

//6
if (age >= 14 && age <= 90)

//7
if (age < 14 || age > 90)

//8
if (-1 || 0) alert( 'first' );//Will work -1
if (-1 && 0) alert( 'second' );//Will not work 0
if (null || -1 && 1) alert( 'third' );//Will work 1