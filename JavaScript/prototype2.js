const Company = require('./prototype1.js');
 var CompanyObj = new Company("san jose", 200, 20000, 350);
 var CompanyObj1 = new Company("san yujiu", 2450, 26700, 350);

 Company.prototype.newInfo = function () {
     return(this.loc + this.emp + this.salary);
 }

 //let compsny_1 = new Company("san jsoe")

 console.log(CompanyObj.newInfo);
