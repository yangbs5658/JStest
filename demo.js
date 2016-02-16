#!/usr/bin/env node
//1、io
var te = require('./test')
var fs =require('fs');
var content = fs.readFileSync('sql.txt');
console.log(content.toString());


//2、连接数据库
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'loan',
  port	   : '10033',
  password : 'IN3C*brOz',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT * FROM TB_USER WHERE ID=64470' , function(err, rows, fields) {
  if (err) throw err;
  for( var i = 0; i < rows.length; i++ ){
	fs.writeFileSync('a.txt',JSON.stringify(rows[i],0,4)+"\n"+te.testName());
  }

});
 connection.end();
var num=1
while(true){
	num++
	if(num==2){
		continue;		
	}else if(num==6){
		console.log("11");
		break;
	}
	
}
//3、数组、字典、array
var as=[1,2,34,4]
for(var i =0;i<as.length;i++){
	console.log(as[i]);
	}	
as.forEach(function(v,k){
	console.log(v);
	
});

	
var dic={'a':'123','b':'234'}
console.log(dic.a);


//4、正则
var val2='<div id="lg"><img hidefocus="true" src="//www.baidu.com/img/bd_logo1.png"';
var strhead = /<div id=\"lg\"><img hidefocus="true" src=\"\/\/([\w.]+)(\/[\w-\.\/\?%&=]*)?\"/;


if(strhead.test(val2)) 
	console.log(88888); 
else 
	console.log(44444); 


	
var content = fs.readFileSync('baidu.txt');
var strhead2=/<div id=\"lg\"><img hidefocus="true" src=\"([\w.]+)(\/[\w-\.\/\?%&=]*)?/;

var re =new RegExp(strhead2);
if(re.test(content)){
console.log('123123'); 
}else{
console.log(false); 
}
//5、字符串方法

 var pattern ='is' ;
 var str = 'This is a Box!,That is a Box too';         
 console.log(str.split(pattern));//将空格拆开分组成数组

function getMes(str) {
	console.log(str);
	return true;
}

getMes(strhead);
getMes(process.argv[2]);


//6、request（get、post接口调用）
var request = require('request');

request({
	url: 'http://10.165.124.89/home/productInfo',
	method: 'get'


}, function( err, res, body ){
	if(res.statusCode==200){
		console.log('succeed');	
	console.log( JSON.parse(body).data.lowestRate,res.statusCode );
}
})

//request.post('http://service.com/upload').form({key:'value'})

//7、NaN和isNaN
a="abc"
if(isNaN(a)==true){
	console.log("+++++true");
}
else{
	console.log("+++++false");
}



a="asd"
b="123"
console.log(a+b);

function Test(num) {
	console.log("asd");
	return true;
}

//8、instanceof、typeof

var a=new Test();//声明变量时使用var，不需要使用当前类进行声明
console.log("123"+(a instanceof Test));
console.log("1的类型是："+typeof(1));

//9、声明方法
function Test() {
	this.x = 0;
}

Test.i = 0;
Test.f = function(){
	Test.i++;
}

Test.prototype = {
	constructor: Test,
	i:0,
	add: function(){
		Test.prototype.i++;
	}
};

var a = new Test();
a.add();

console.log( a.i );

var b = new Test();
b.add();

console.log( b.i );
new String('123');

