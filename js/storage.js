$(function(){
	if(!window.localStorage){
            alert("浏览器支持localstorage");
        }else{
        	var storage=window.localStorage;
        	let tasks = new Set([
        			{"task":{
        				"id": 0,
        				"rank": 0,
		            	"degree": 0,
		            	"text": "Some Text about Task, Some Text about Task, Some Text about Talk"
		            	}},
	            	{"task":{
	            		"id": 1,
	            		"rank": 1,
		            	"degree": 1,
		            	"text": "Some Text about Task, Some Text about Task, Some Text about Talk"
	            	}},
	            	{"task":{
	            		"id": 2,
	            		"rank": 2,
		            	"degree": 2,
		            	"text": "Some Text about Task, Some Text about Task, Some Text about Talk"
	            	}}
        	]);
			storage.setItem("tasks", tasks);
			/*for(num in tasks){
				num++;
				console.log(num);
			}*/
			let txt="";
			let degree="";
        	for(let item of tasks.keys()){
        		//console.log(item.task1.text);
        		//var task="task"+index;
				//var n = item.task.degree;
				//console.log(n);
				if(item.task.degree==0){
					degree="start";
				}
				else if(item.task.degree==1){
					degree="triangle11";
				}
				else{
					degree="triangle21";
				}
				txt+='<div class="row row1" id="t'+item.task.id+'"><div class="col-xs-2 col-md-2"><div class="icon '+degree+'"></div></div>'
				+'<div class="col-xs-10 col-md-10"><p class="p2">'+item.task.text+'</p></div><div class="mask1">'
				+'<button class="btn3" id="edit">编辑</button><button class="btn3" id="delete">删除</button></div><div class="mask2">'
				+'<button class="btn3" id="complete">已完成</button><button class="btn3" id="wait">待办</button><button class="btn3" id="underdo">进行中</button></div></div>';
        	};
        	
        	$(".box").html(txt);
        	//click one thing
			$("#one-thing").click(function(){
				$("#one").css("display","block");
				$("#row-blue").css("display","none");
				$("#row-pink").css("display","none");
				//$(".container-add").css("display","none");
				let icons = $(".icon");
				let a=[];
				for(let i=0; i<icons.length;i++){
					if(icons[i].className=="icon start"){
						a.push(i);
						icons[a[0]].parentNode.parentNode.style.display="block";
						for(let b =1; b<a.length;b++){
							icons[b].parentNode.parentNode.style.display="none";
						}
						//console.log(icons[i].parentNode.parentNode);
					}
					else{
						icons[i].parentNode.parentNode.style.display="none";
					}
				}
				//console.log(icons);
				
			});
        	//console.log(txt);
        	
        	function rank2(btn){
				$("#"+btn).click(function(){
					if(btn == $("#advanced")){
						return 0;
					}
					else if(btn == $("#medium")){
						return 1;
					}
					else{
						return 2;
					}
				})
			}
			
			function degree2(btn){
				$("#"+btn).click(function(){
					if(btn == $("#underdoing")){
						return 0;
					}
					else if(btn == $("#waiting")){
						return 1;
					}
					else{
						return 2;
					}
				})
			}
			
			let rank3 = "";
			let degree3 = "";
			//console.log(rank+degree);
			//click rank and degree
			/*rank3=$("#advanced").bind("click",rank2(this.id));
			rank3=$("#medium").bind("click",rank2(this.id));
			rank3=$("#low").bind("click",rank2(this.id));
			degree3=$("#underdoing").bind("click",degree2(this.id));
			degree3=$("#waiting").bind("click",degree2(this.id));
			degree3=$("#over").bind("click",degree2(this.id));
			*/
        	
        	//click all
        	$("#all").click(function(){
        		$(".box").children().css("display","block");
        		$("#one").css("display","none");
				$("#row-blue").css("display","block");
				$("#row-pink").css("display","block");
        	});
        	
        	//click add
			$("#add").click(function(){
				$("#container1").css("display","none");
				$("#row-blue").css("display","none");
				$("#row-pink").css("display","none");
				$("#add").css("display","none");
				$(".container-add").css("display","block");
				$("#cancel").css("display","block");
				$("#done").css("display","block");
			});
        }
        
        //click done
        $("#done").click(function(){
        	var textarea = $(".textarea").html();
				var num = $(".icon").length+1;
				let taskn={"task":{
	        				"id": num,
	        				"rank": rank3,
			            	"degree": degree3,
			            	"text": textarea
			            	}};
			    tasks.push(taskn);
			    console.log(tasks);
        })
        
        //guesture
		Hammer.Swipe(options)        
})

