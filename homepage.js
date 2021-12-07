$(document).ready(function(){
	$('#studentInfo').click(function(){
		alert("HanZhen Qin:\nemail: qinh2@rpi.edu\nRin: 662020881\nITWS group9");
	});
	$('#basicInfo').click(function(){
		alert("This page contains all the labs in the ITWS for me.");
	});
	$('#basicInfo2').click(function(){
		alert("In the lab2, i design my own html to descript myself about my life experience, my major, and my basic information.");
	});
	$('#basicInfo3').click(function(){
		alert("In the lab3, i try to make a brief html of homepage to contain my lab2 and lab3 with some links.");
	});
	$('#basicInfo4').click(function(){
		alert("In the lab4, i use two specific types of XML - atom & rss - files to share ten links that is interesting things in the recent days.");
	});
	$('#basicInfo5').click(function(){
		alert("In the lab5, the first time i use the html, css and javascript in the same time to write a website.");
	});
	$('#basicInfo6').click(function(){
		alert("In the lb6, i use the jquery in javascript to show some effects in my html, such as the show and hide context.");
	});
	$('#basicInfo8').click(function(){
		alert("In the lab8, i use the jquery in javascript to show the click effect and put some links in the html part.");
	});
	$('#basicInfo9').click(function(){
		alert("In the lab9, i use both jquery and javascript to update my homepage.html and then let my html can be check in localhost");
	});
	$("#hideT").click(function(){
		$("#ITWS_lab p").hide(3000);
   	});
   	$("#showT").click(function(){
      	$("#ITWS_lab p").show(1000);
   	});
   	$(function(){
    	$("#menu").menu();
  	});
  	$(function(){
    	$("#selectable").selectable();
 	});

});
