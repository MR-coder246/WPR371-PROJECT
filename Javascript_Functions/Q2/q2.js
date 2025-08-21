function checkTax(Salary){
    if (Salary<800){
        var Tax=0.15;
        console.log("You tax is: "+(Salary*Tax));

    }else if( (Salary>8000)&&(Salary<12000) ){
        var Tax=0.20;
        console.log("You tax is: "+(Salary*Tax));

    }else if (Salary>12000){
        var Tax=0.25;
        console.log("You tax is: "+(Salary*Tax));
    }
} 
checkTax(15000);
