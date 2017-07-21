/*if(!window.localStorage){
            alert("浏览器支持localstorage");
        }else{
            var storage=window.localStorage;
            storage= {
            	"task":[
            	{
            		"id": 0,
	            	"degree": 0,
	            	"text": "Some Text about Task, Some Text about Task, Some Text about Talk"
           		},
           		{
           			"id": 1,
	            	"degree": 1,
	            	"text": "Some Text about Task, Some Text about Task, Some Text about Talk"
           		},
           		{
           			"id": 2,
	            	"degree": 2,
	            	"text": "Some Text about Task, Some Text about Task, Some Text about Talk"
           		}
           		
            ]
            }
            console.log(storage.task[0]);
        }
*/

$(function(){
	if(!window.localStorage){
            alert("浏览器支持localstorage");
        }else{
        	var storage=window.localStorage;
        	let tasks = new Set([
        			{"task":{
        				"id": 0,
		            	"degree": 0,
		            	"text": "Some Text about Task, Some Text about Task, Some Text about Talk"
		            	}},
	            	{"task":{
	            		"id": 1,
		            	"degree": 1,
		            	"text": "Some Text about Task, Some Text about Task, Some Text about Talk"
	            	}},
	            	{"task":{
	            		"id": 2,
		            	"degree": 2,
		            	"text": "Some Text about Task, Some Text about Task, Some Text about Talk"
	            	}}
        	]);
        	
			storage.setItem("tasks", tasks);
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
				txt+='<div class="row row1"><div class="col-xs-2 col-md-2"><div class="'+degree+'"></div></div>'
				+'<div class="col-xs-10 col-md-10"><p class="p2">'+item.task.text+'</p></div><div class="mask1">'
				+'<button class="btn3" id="edit">编辑</button><button class="btn3" id="delete">删除</button></div><div class="mask2">'
				+'<button class="btn3" id="complete">已完成</button><button class="btn3" id="wait">待办</button><button class="btn3" id="underdo">进行中</button></div></div>';
        	};
        	
        	$(".box").html(txt);
        	console.log(txt);
        }
})

