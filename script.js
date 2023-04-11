// call method
var employe1={firstName:"john", lastName:"cena"};
var employe2={firstName:"brock", lastName:"lesnar"};

function myfn(param1,param2){
    document.write(param1+", "+this.firstName+" "+this.lastName+","+param2);
}
//myfn.call(employe1,"hi","how are you."+" ");
//myfn.call(employe2,"hi","how are you");
//myfn.apply(employe1,["hi","how are you"]);


// slice => dont change the original array but it returns the subset as a new array
//index =>[0,1,2,3,4]
// let arr = [1,2,3,4,5];
// let arr1=arr.slice(0,-1);
// document.write(arr1);

//splice =>used to add and remove items to and from arrayand returned the removed items. 
// first arguments specifies the array position for insertion or deletion and second indicates the numbers of elements to be deleted.
// modified the original array and return updated array.
//index =>[0,1,2,3,4]
let arr = [1,2,3,4,5];
let arr1=arr.splice(2,2);
document.write(arr1);
