var canva=document.getElementById("can");
	var context=canva.getContext("2d");
		
		context.beginPath();
		context.moveTo(200,200);
		context.lineTo(300,300);
		context.lineTo(300,400);
		context.lineTo(100,400);
		context.lineTo(100,300);
		context.lineTo(200,200)
		context.stroke();
		context.fillStyle="yellow";
		context.closePath();
		context.strokeStyle="blue";
		context.fill();


//ligne cheminee
		 context.beginPath();
		context.rect(255,187,30,60);
		context.stroke();
		context.fillStyle="orange";
		context.closePath();
		context.fill();











		//toit 2
         context.beginPath();
		context.moveTo(200,180);
		context.lineTo(310,310);
		context.lineTo(335,290);

		context.lineTo(200,160);
		context.lineTo(58,300);
		context.lineTo(70,310);
		context.lineTo(205,180);
		context.stroke();
		context.fillStyle="#000099";
		context.closePath();
		context.strokeStyle="blue";
		context.fill();



//toit 1
		 context.beginPath();
		context.moveTo(200,180);
		context.lineTo(322,300);
		context.lineTo(310,310);
		context.lineTo(200,200);
		context.lineTo(80,319);
		context.lineTo(70,310);
		context.lineTo(180,200);
		context.stroke();
		context.fillStyle="#0f056b";
		context.closePath();
		context.strokeStyle="blue";
		context.fill();




                                                                   
//rectangle cheminee
		context.beginPath();
		context.rect(250,175,40,10);
		context.stroke();
		context.fillStyle="#000099";
		context.closePath();
		context.fill();
