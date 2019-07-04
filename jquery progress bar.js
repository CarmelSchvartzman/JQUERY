<html>
<head>
    <script src="jquery-1.11.2.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            $('#myButton').click(function () {
                animateProgressBar($('#ddlPercentage').val());
            });

            function animateProgressBar(percentageCompleted) {
                $('#innerDiv').animate({
                    'width': (500 * percentageCompleted) / 100
                }, 3000);

                $({ counter: 1 }).animate({ counter: percentageCompleted }, {   <<<<<<<<<<<<<<<<<<<<<
                    duration: 3000,
                    step: function () {                              <<<<<<<<<<<<<<<<<<<<<<<
                        $('#innerDiv').text(Math.ceil(this.counter) + ' %');
                    }
                })
            }
        });
    </script>
</head>
<body style="font-family:Arial">
    Select Percentage :
    <select id="ddlPercentage">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
        <option value="90">90</option>
        <option value="100">100</option>
    </select>
    <input type="button" id="myButton" value="Start Animation" />
    <br /><br />
    <div id="outerDiv" style="background-color:#EEEEEE;
         height:20px; width:500px; padding:5px">
        <div id="innerDiv" style="background-color:red; height:19px;
             width:0px; color:white; text-align:center">
        </div>
    </div>
</body>
</html>
