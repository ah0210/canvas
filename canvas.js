var deg = 0;
var canvas_t = function(deg,id){
	var canvas2d = document.getElementById("t_"+id).getContext("2d");
	var r = deg*Math.PI/180;   //canvas绘制圆形进度
	canvas2d.globalAlpha = 0.5; //透明
	canvas2d.clearRect(0,0,80,80);   //先清理
	canvas2d.beginPath();  //路径开始
	canvas2d.fillStyle = "#ccc"; //填充颜色
	canvas2d.strokeStyle = "#0595FC"; //canvas边框颜色
	canvas2d.lineWidth = 10; //线宽
	canvas2d.arc(40,40,28,0-90*Math.PI/180,r-90*Math.PI/180,false); //canvas绘制弧形
	//圆心x 圆心y  半径 开始 结束 是否绘制背景
	//canvas2d.fill();
	canvas2d.stroke();
	//canvas2d.closePath();
// 画内填充圆
	canvas2d.beginPath();
	canvas2d.arc(40, 40, 28, 0, Math.PI*2);
	canvas2d.closePath();
	canvas2d.fillStyle = '#C0FAFB';
	canvas2d.fill();
//写字
	canvas2d.font = "bold 14pt Arial";
	canvas2d.fillStyle = '#e74c3c';
	canvas2d.textAlign = 'center';
	canvas2d.textBaseline = 'middle';
	canvas2d.moveTo(40, 40);
	canvas2d.fillText( Math.round(deg/3.6)+'%', 40, 40);
};
/*var t = setInterval(function(){
 deg+=10;
 test(deg);
 if(deg>360){
 clearInterval(t);
 }
 console.log(deg);
 },20);*/