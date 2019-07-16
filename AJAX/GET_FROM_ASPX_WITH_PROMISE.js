<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $.get("demo_test.aspx", function(data, status){    <<<<<<<<<<<<<<<<<<<<<<<<<<
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});


const fnGetData = () => {

	return new Promise(function(resolve,reject){
    
    	if(null === null) 
        resolve(6);
    });

}


function fnStart(){

fnGetData().then((res)=>{

		sessionStorage.x = res;
        alert(sessionStorage.x);
        sessionStorage.removeItem('x');
	    alert(sessionStorage.x);

}, (e)=>{ console.error(e);});

}
</script>
</head>
<body>

<button>Send an HTTP GET request to a page and get the result back</button>

<input type='button' onclick='fnStart()' value='Get Data' />

</body>
</html>
