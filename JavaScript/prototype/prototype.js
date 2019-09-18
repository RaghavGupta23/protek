function Company(l, e) {
     
    this.loc=l;
    this.emp=e;
    //this.salary =s;
   }

   Company.prototype = {
    salary : 3,
    newInfo : function(){
        return(this.salary);
    }
   }

   var CompanyObj = new Company("san jose", 200, 20000, 350);
   var CompanyObj1 = new Company("san yujiu", 2450, 26700, 350);

   //let compsny_1 = new Company("san jsoe")

   console.log(CompanyObj.salary);
