function access(Roles,Name){
    switch(Roles){ 
        case "admin":
        console.log(Name+" is a "+Roles+" with all access");
        break
        case "lecturer":
        console.log(Name+" is a "+Roles+" with create and delete access");
        break
        case "student":
        console.log(Name+" is a "+Roles+" with read acces");
        break
        case "other":
        console.log(Name+" is a "+Roles+" with access trial access");
        break

    }
} 
access("lecturer","Ryan");
