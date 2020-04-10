window.onload=function() {
	//get elements
	var f=1,img=document.getElementById('img'),
	cvrt=document.getElementById('convert');
	//button click event
	cvrt.onclick=function(){
		if(f){
			img.className="bwImg";
			f=0;
			cvrt.innerHTML="Convert to Color";
		}
		else{
			img.className="";
			f=1;
			cvrt.innerHTML="Convert to B/W";
		}
	};
}