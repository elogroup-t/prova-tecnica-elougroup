function quais() {
	var radio = document.getElementsByName('rSocial')
	
	if (radio[0].checked){
		document.getElementById("sName").style.display = "block"
	}else{
		document.getElementById("sName").style.display = "none"		
	}
}
function validate(){
	var name = document.getElementById("iName").value
	var tel = document.getElementById("iTel").value
	var sName = document.getElementById("iSName").value
	var radio = document.getElementsByName('rSocial')

	var i = true
	var number = /^[0-9]{2} - [0-9]{8}$/

	if (name == "" && tel == "" || name == " " && tel == " "){
		document.getElementById('iName').style.border = "1px solid #ff0000"
		document.getElementById('iTel').style.border = "1px solid #ff0000"
		document.getElementById('NameError').style.display = "block"
		document.getElementById('TelError').style.display = "block"
		i = false

	}else if(name == "" || name == " "){
		document.getElementById('iName').style.border = "1px solid #ff0000"
		document.getElementById('NameError').style.display = "block"
		i = false
	}else if (tel == "" || tel == " "){
		document.getElementById('iTel').style.border = "1px solid #ff0000"	
		document.getElementById('TelError').style.display = "block"
		i = false
	}
	else if(sName == "" || sName == " "){
		document.getElementById('iSName').style.border = "1px solid #ff0000"
		document.getElementById('SNameError').style.display = "block"
		i = false
	}
	else{
		i = true;
	}
	
	if(!number.test(tel)){
		document.getElementById('iTel').style.border = "1px solid #ff0000"
		document.getElementById('TelError').style.display = "block"
		i = false
	}
	if(i){
		return i
	}else{
		return i
	}

}

function json(){
	var nome = document.getElementById("iName").value
	var Snome = document.getElementById("iSName").value
	var tel = document.getElementById("iTel").value
	var meet = document.getElementById("iConheceu").value
	var radio = document.getElementsByName('rSocial')
	var fb = document.getElementById("facebook").checked
	var li = document.getElementById("linkedin").checked
	var ig = document.getElementById("instagram").checked
	var nomeCompleto = nome + " " + Snome

	if(validate()){
		var btn = document.getElementById('btnSend')
		btn.setAttribute("disabled","disabled");
		if(btn.getAttribute("disabled")){
			btn.style.cursor = "auto"
			btn.style.backgroundColor = "#A9A9A9"
			btn.style.color = "black"
		}
		if(radio[0].checked){
			var json = {
				"nome":nomeCompleto,
				"telefone":tel,
				"comoConheceu":meet,
				"possuiSocial": [{ 
					"facebook": fb,
					"instagram": ig,
					"linkeIn": li
					}]
			}
			console.log(json)
		}else{
			var json = {
				"nome":nomeCompleto,
				"telefone":tel,
				"comoConheceu":meet,
				"possuiSocial": false
			}
			console.log(json)
		}
		console.log(json)
		var xhr = new XMLHttpRequest()
		var url = "http://localhost:8080"
		xhr.open("POST", url, true)
		xhr.setRequestHeader("Content-Type", "application/json")
		xhr.onreadystatechange = function (){
		    if (xhr.readyState === 4 && xhr.status === 200){
		        var json = JSON.parse(xhr.responseText)
		    }
		}
		var data = JSON.json
		xhr.send(data)

	}else{
		window.alert("Preencha os campos corretamente!")
	}
}






/*btnSend.setAttribute('disabled', 'disabled')*/