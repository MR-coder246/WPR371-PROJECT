function LeapYear(year){
    //because leap year is every 4 years check if year is a multiple of 4
    if ((0== year % 4)){
    console.log(year+' was a leap year');
    }
    else{
    console.log(year+' was not a leap year');
    }
}
//input from user
//const year= prompt("Enter a year To check if year is leap:");
LeapYear(2994);


