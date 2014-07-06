/* connection to Ajax jQuery library required */

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<!-- loads Ajax jQuery library -->

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<!-- loads jQuery UI library (must be loaded after jQuery library) -->


// start AJAX includes

$(document).ready(function() {
  // when one of the links with class "navlink" is clicked, get its "href" value
  // load the content from that include file and place it into the HTML object with class "ajax-content"
  $('a.navlink').click(function() {
    var url = $(this).attr('href');
    $('.ajax-content').load(url);
    return false;
    });
});

// end AJAX includes



