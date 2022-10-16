const x=new Set([1,1,2,2,3,4]);
console.log(x);// Set {1,2,3,4}
---------------------------------------------------------------------------------------------------
const y={name:'sumit'};
console.log(delete y.name); //true
//with the help of delete we can delete property of object. we can't delete of object;
console.log(y);//{}
------------------------------------------------------------------------------------------------------
const z={name:'sumit'};
console.log(delete z); //false
-----------------------------------------------------------------------------------------------------
const data=["sumit","vishal","prem"];
// const [myname]=data;
const [,myname]=data;
console.log(myname)//sumit  //sumit
-----------------------------------------------------------------------------------------------------
const data_1={name:"sumit", lastName:'kumar'};
console.log(data_1["name"])//sumit
console.log(data_1.name);//sumit
const {lastName}=data_1;
console.log(name)//sumit
const {lastName}=data_1;
console.log(lastName)//kumar
-----------------------------------------------------------------------------------------------------