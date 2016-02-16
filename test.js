#!/usr/bin/env node

console.log(NaN==NaN);
//var String="123"
new String('123');
console.log(String);

var a="abc"
var iNum1 = parseInt("10", 2);
var iNum2 = parseInt("10", 10);
var fNum4 = parseFloat("11.22.33");
console.log(iNum1);
console.log(iNum2);
console.log(fNum4);
console.log(parseInt(a));//NaN

var a={
	a:1,
};

console.log(a.a);



var a=["a","b","c"]
	for(var i=0;i<a.length;i++){
		console.log(a[i]);
	}


var person={firstname:"Bill",lastname:"Gates",id:5566};
console.log(person.firstname);

function test(a,b) {
	return a*b;
}
var c=test(1,2)
	console.log(c);


var sNum = "66";
var iNum = 66;
console.log((sNum == iNum));
console.log((sNum === iNum));

var b;
var a = (sNum === iNum)? b=2  : b=3;
console.log(b);


var i=0;
switch (i) {
  case 20:console.log("20");
    break;
  case 30: console.log("30");
    break;
  case 40: console.log("40");
    break;
  default: console.log("qita");
}


function test1( a, b, c ){
	return a + b + c;
}

function test2( first ){
	return function( x, y ){
		return test1( first, x, y );
	}
}


// 柯里化 高阶函数 函数式编程
test2( 1 )( 1, 2 );

function showColor() {
  console.log(this.color);
};

var oCar1 = new Object;
oCar1.color = "red";
oCar1.showColor = showColor;

var oCar2 = new Object;
oCar2.color = "blue";
oCar2.showColor = showColor;

oCar1.showColor();		//输出 "red"
oCar2.showColor();



var txt="";
var person={fname:"John",lname:"Doe",age:25};

for (x in person)
  {
  txt=txt + person[x];
  console.log(txt);
  }


var JSONObject= {"name":"Bill Gates","street":"Fifth Avenue New York 666","age":56,"phone":"555 1234567"};
var firstword=JSONObject.name;
console.log(JSONObject);

var x=0;
while (i<5)
  {
  x=x  + i;
  i++;
  }
  console.log(x);

function atest(x1){
	try{
		for(i=0;i<x1.length;i++){
			console.log(x1[i]);
			
		}
	}catch(err){	
		console.log(err);
	}finally{
		console.log("123");	
	}
	
}
var arr=[11,22,333];
atest(arr);

person=new Object();
person.firstname="Bill";
person.lastname="Gates";
person.age=56;
person.eyecolor="blue";

console.log(person);

//在构造器函数内部定义对象的方法：
function Person(firstname,lastname,age,eyecolor)
{
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;
	this.changeName=function(name)
	{
		this.firstname=name;
	};
}

var jim =new Person("james","carter",12,"bule");
console.log(jim.firstname);
jim.changeName("Tom");
console.log(jim.firstname);


