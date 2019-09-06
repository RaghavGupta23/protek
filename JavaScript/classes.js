function Country (p, s, r, ro){
var road = ro;
this.population = p;
this.state=s;
this.river=r;
this.displayInfo=function(){
  console.log(this.population+" "+this.state+" "+this.river);
}
}
var theIndia = new Country(200, 86, 'ganga');
theIndia.displayInfo();

function Organisation (c, ro){

this.countries = c;
this.roles=ro;
this.displayInfo2=function(){
  console.log(this.countries+" "+this.roles);
}
}
var who = new Organisation(200, true);
who.displayInfo2();

function Department (l, p){
this.location = l;
this.people=p;
this.displayInfo3=function(){
  console.log(this.location+" "+this.people);
}
}
var police = new Department('San Jose', 864);
police.displayInfo3();
console.log(police);
