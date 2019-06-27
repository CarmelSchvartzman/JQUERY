<html>
<head>
    <title></title>
    <script src="jquery-1.11.2.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            var jQueryObject = $('#btn');
            var rawDOMElement = jQueryObject.get(0);   <<<<<<<<<<<<<<<<<  JQUERY OBJECT
            var eventObject = $._data(rawDOMElement, 'events');   <<<<<<<<<<<<  EVENTS

            if (eventObject != undefined && eventObject.click != undefined) {
                alert('Click event exists');
            }
            else {
                $('#btn').on('click', function () {
                    alert('Button Clicked');
                });
            }
        });
    </script>
</head>
<body style="font-family:Arial">
    <input id="btn" type="button" value="Click Me" />
</body>
</html>
