//Function-As-A-Class
function Person(fname, lname, city) {
    //Public members
  this.firstName = fname;
  this.lastName = lname;
  this.city = city;
  this.getPersonInfo=function(){
    return "Person " + this.firstName + " " + this.lastName + " lives in city " + this.city + "!";
  }
  //Private members
  var _socialId;
}

var person=new Person("Pravinkumar","R. D.","Pune");
console.log(person.getPersonInfo());
