<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
   
  $('button').on({'click':()=>{
  
  		$.post('demo_test_post.asp', {name:'Lao Tzu',city:'Beijing'}, (r,s,x)=>{
        	alert(r);  // response :  Dear Lao Tzu. Hope you live well in Beijing.
            alert(s);  // status : success
            alert(x.status);  // xhr (XmlHttpRequest) : 200
        });
  }});
});
</script>
</head>
<body>

<button>Send an HTTP POST request to a page and get the result back</button>

</body>
</html>
