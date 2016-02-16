var content = fs.readFileSync('sql.txt');

contentlg=content.getElementById('lg');
console.log(contentlg);


str = '<div id="lg"><img hidefocus="true" src="www.baidu.com/img/bd_logo1.png"'
var regUrl = /^<div id=\"lg\"><img hidefocus=\"true\" src=\"([\w.]+)(\/[\w-\.\/\?%&=]*)?\"$/;