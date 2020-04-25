//start
var colors=["rgb(4, 214, 57)","rgb(7, 170, 230)", "rgb(230, 31, 5)"]
var rectangels=document.querySelectorAll(".rectangels");
var container=document.querySelector("#container");
var full_list=[];
var button2=document.querySelectorAll(".button2");
var y=1;
var new_game=document.querySelector("#new_game")
var instruction=document.querySelector(".instruction")
//EASY
var x=1;
var full_list1=[];
var aar=[];
var aar1=[1];
var aar11=[];
var button1=document.querySelectorAll(".button1");
var count=0;
var temp=[];
var store1=[];
var store2=[];
var store3=[];
var displayPara=document.querySelector("#displayPara")
var t1=document.querySelector("#t1");
var t2=document.querySelector("#t2");
var t3=document.querySelector("#t3");
var t4=document.querySelector("#t4");
var t5=document.querySelector("#t5");
var score=document.querySelector(".scores")
//creating two arry for assigining values

for(var i=1; i<41; i++){
	full_list.push(i);
}
var arr=[];
var arr1=[1];
var arr11=[];
for(var i=2; i<41; i++){
	arr.push(i);
	arr11.push(i);
}
for(var i=0, tem_no=arr; i<24; i++){
	var rnd=Math.floor(Math.random()*tem_no.length);
	arr1.push(tem_no[rnd]);
	tem_no.splice(rnd, 1);
	arr11.splice(rnd, 1);
}
for(var i=1; i<31; i++){
	full_list1.push(i);
}
for(var i=2; i<31; i++){
	aar.push(i);
	aar11.push(i);


}
for(var i=0, tem_no1=aar; i<15; i++){
	var rnd=Math.floor(Math.random()*tem_no.length);
	aar1.push(tem_no1[rnd]);
	tem_no1.splice(rnd, 1);
	aar11.splice(rnd, 1);
	
	}
//difficulties level selection
new_game.addEventListener("click", function(){
	displayPara.style.display="none";
	instruction.style.display="none";
	container.style.display="";
	grid2.style.display="none";
	grid1.style.display="none";
	score.style.display="";
	clearInterval(stopwatch);
	secondCount=1;
	displayCount();
	y=1;
	x=1;

	
	if(aar.length==0){
		for(var i=0; i<aar11.length; i++){
			aar.push(aar11[i]);
		};
	}
	if(aar.length!=0 || aar.length<14){
		aar.length=0;
		for(var i=0; i<aar11.length; i++){
				aar.push(aar11[i])

			}
		
				
	}

	if(arr.length==0){
		for(var i=0; i<arr11.length; i++){
			arr.push(arr11[i]);
		};
	}
	if(arr.length!=0 || arr.length<15){
		arr.length=0;
		for(var i=0; i<arr11.length; i++){
				arr.push(arr11[i])

			}
		
				
	}
})
var stopwatch;
for(var i=0; i<3; i++){
	rectangels[i].style.backgroundColor=colors[i];
	rectangels[i].addEventListener("click", function(){
			//hard
		   if(this.style.backgroundColor== "rgb(230, 31, 5)"){
		   		score.style.display="none";
		   		container.style.display="none";
				grid2.style.display="";
					for(var i=0; i<button2.length; i++){
					//hard mode
						button2[i].style.backgroundColor="#c4110e";
						button2[i].addEventListener("click", function(){
							if(this.textContent==1){
								displayPara.style.display="";
								stopwatch=setInterval(displayCount, 1000);
							}
						})
						button2[i].addEventListener("click", function(){
							if(y==41 || this.textContent==40){
								clearInterval(stopwatch);
								store3.push(displayPara.innerHTML);
        						var JSONReadytiming = JSON.stringify(store3);
        						localStorage.setItem('time3',JSONReadytiming);
        						store3 = JSON.parse(localStorage['time3']);
        						store3.sort();
        						var JSONReadytiming = JSON.stringify(store3);
        						localStorage.setItem('time3',JSONReadytiming);
        						temp = store3;
        						topscore();
							}
						})
						button2[i].textContent=arr1[i];
						//changging the color on hovering
						button2[i].addEventListener("mouseover", function(){
							this.style.background="#f20c17";
						}) 
						button2[i].addEventListener("mouseout", function(){
							this.style.background="#c4110e";
						})
						//changing the no in grid
						button2[i].addEventListener("click", function(){
							if(this.textContent==y){
								instruction.style.display="none";
								this.textContent=arr.shift();
								y=y+1;
							}
							else{
								count=count+1;
							}
						})
					
				};
		   }
		   //easy
		   if(this.style.backgroundColor=="rgb(4, 214, 57)"){
		   		score.style.display="none";
		   		button2.disabled=true;
		   		container.style.display="none";
		   		grid1.style.display="";
		   		for(var i=0; i<button1.length; i++){
		   			button1[i].addEventListener("click", function(){
						if(this.textContent==1){
							displayPara.style.display="";
							stopwatch=setInterval(displayCount, 1000);
						}
					})
					button1[i].addEventListener("click", function(){
						if(x==31 || this.textContent==30){
							clearInterval(stopwatch);
							store1.push(displayPara.innerHTML);
        					var JSONReadytiming = JSON.stringify(store1);
        					localStorage.setItem('time1',JSONReadytiming);
        					store1 = JSON.parse(localStorage['time1']);
        					store1.sort();
        					var JSONReadytiming = JSON.stringify(store1);
        					localStorage.setItem('time1',JSONReadytiming);
        					temp = store1;
        					topscore();
											
						}
					})
		   			button1[i].textContent=aar1[i];
		   			button1[i].addEventListener("click", function(){
						if(this.textContent==x){
							instruction.style.display="none";
							this.textContent=aar.shift();
							x=x+1;
						}
						})
		   		}


		   	}
		   	//medium
		   if(this.style.backgroundColor=="rgb(7, 170, 230)"){
		   		score.style.display="none";
		   		instruction.style.display="";
		   		container.style.display="none";
				grid2.style.display="";
				//assigining no to grid
				for(var i=0; i<button2.length; i++){
					//medium mode
					button2[i].style.backgroundColor="#0b429c"
					button2[i].addEventListener("click", function(){
						if(this.textContent==1){
							displayPara.style.display="";
							stopwatch=setInterval(displayCount, 1000);
						}
					})
					button2[i].addEventListener("click", function(){
						if(y==41 || this.textContent==40){
							clearInterval(stopwatch);
							store2.push(displayPara.innerHTML);
        					var JSONReadytiming = JSON.stringify(store2);
        					localStorage.setItem('time2',JSONReadytiming);
        					store2 = JSON.parse(localStorage['time2']);
        					store2.sort();
        					var JSONReadytiming = JSON.stringify(store2);
        					localStorage.setItem('time1',JSONReadytiming);
        					temp = store2;
        					topscore();
						}
					})
					button2[i].textContent=arr1[i];
					//changging the color on hovering
					button2[i].addEventListener("mouseover", function(){
						this.style.background="#49c1e6";
					}) 
					button2[i].addEventListener("mouseout", function(){
						this.style.background="#0b429c";
					})
					//changing the no in grid
					button2[i].addEventListener("click", function(){
						if(this.textContent==y){
							instruction.style.display="none";
							this.textContent=arr.shift();
							y=y+1;
						}
						})
					
				};
			}
	
		});

}

//timer
var secondCount=1;
var displayPara=document.querySelector("#displayPara")
      function displayCount() {
        // Calculate current hours, minutes, and seconds
        let minutes = Math.floor((secondCount % 3600)/60);
        let seconds = Math.floor(secondCount % 60)

        // Display a leading zero if the values are less than ten
        let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
        let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

        // Write the current stopwatch display time into the display paragraph
        displayPara.textContent =displayMinutes + ':' + displaySeconds;

        // Increment the second counter by one
        secondCount++;
      }
var minutes = Math.floor((secondCount % 3600)/60);
var seconds = Math.floor(secondCount % 60)
function topscore(){
    if(typeof temp[0]!="undefined"){
        t1.innerHTML = temp[0];
    }

    if(typeof temp[1]!="undefined"){
        t2.innerHTML = temp[1];
    }

    if(typeof temp[2]!="undefined"){
        t3.innerHTML = temp[2];
    }

    if(typeof temp[3]!="undefined"){
        t4.innerHTML = temp[3];
    }

    if(typeof temp[4]!="undefined"){
        t5.innerHTML = temp[4];
    }
}




