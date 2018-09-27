
// var btn;

function createBox(){
	var box = document.createElement('div');
	box.style.width = '25vh'
	box.style.height='40vh';
	box.style.backgroundColor= 'lightblue';
	box.style.cssFloat = 'left' 
	box.style.marginTop= '150px'
	box.style.marginLeft = '250px'
	box.justifyContent = 'center'
	box.id = 'modal'
	box.style.borderRadius = '50px'
	box.position = 'absolute'
	document.body.appendChild(box)
	createButton(box)
	input1(box)
	input2(box)
	submit(box)
	checkForm(box)
	checkPassword(box)
	checkUsername(box)
	
}

function createButton(x){
	btn = document.createElement('btn');
	btn.style.fontSize = '30px'
	btn.innerHTML = "&times;";
	btn.id = 'btnColorChange'
	x.appendChild(btn);

	btn.addEventListener('click', function(){
		hide(x)
	})
}

function start(){
	setTimeout(function(){(createBox,300)
		createBox();
	},1500)

	}

// var btnColorChange = document.getElementById('btnColorChange')
// btnColorChange.addEventListener ('click', hide)


function hide(y){
	y.style.display = "none";
}


window.addEventListener('load', start)
submit.addEventListener('click', checkForm);


function input1(box){
var in1 = document.createElement('input');
in1.id = 'in1';
box.appendChild(in1);
}

function input2(box){
var in2 = document.createElement('input')
in2.id = 'in2'
box.appendChild(in2)

}

function submit(box){
 var submit = document.createElement('button')
 submit.id = 'submit'
 submit.innerHTML= 'login'
 box.appendChild(submit)
 }

 

// var username = document.getElementById('in1');
// var password = document.getElementById('in2');
// var submit = document.getElementById('submit');



// function checkForm (){
// 	if(checkPassword()==true && checkUsername()==true){
// 		alert('yea')
// 	}
// 		else{
// 			alert('no')
// 		}
// 	}



// function checkPassword(){
// 	if(password.value == 1234){
// 		return true
// 	}	else { console.log('not correct')
// 		}
// 	}


// function checkUsername(){
// 	var splitUser = username.value.split("")
// 	for(let i=0;i<splitUser.length;i++)
// 		if (splitUser[i] == 1 || splitUser[i]==2 ||splitUser[i] ==3){
// 			return true
// 		}else {
// 			console.log('incorrect username')
//		}
//	}



