/* connection to jQuery library required */





$(document).ready(function() {
  // when one of the links with class "navlink" is clicked, get its "href" value
  // load the content from that include file and place it into the HTML object with class "ajax-content"
  $('a.navlink').click(function() {
    var url = $(this).attr('href');
    $('.ajax-content').load(url);
    return false;
    });
});

// begin HTML

<ul>
<li><a href="includes/home.html" class="navlink">Home</a></li>
<li><a href="includes/one.html" class="navlink">One</a></li>
<li><a href="includes/two.html" class="navlink">Two</a></li>
<li><a href="includes/three.html" class="navlink">Three</a></li>
</ul>


<div class="ajax-content">

<p>Content being swapped out goes here.</p>

</div>


