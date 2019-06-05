//sets up google analytics
window.ga = function() {
  ga.q.push(arguments)
};
ga.q = [];
ga.l = +new Date;
ga('create', 'UA-140938828-1', 'auto');
ga('set', 'transport', 'beacon');
ga('send', 'pageview')

//takes care of the toggle button
$('#sidebarCollapse, #topbarCollapse').on('click',
  function(event) {
    event.preventDefault();
    if (Boolean(sessionStorage.getItem('collapsed'))) {
      sessionStorage.setItem('collapsed', '');
    } else {
      sessionStorage.setItem('collapsed', '1');
    }
    $('#topbar').toggleClass('active');
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
    $('#lastModified').toggleClass('active');
  });

//allows for scrollable sidebar when screen gets small
$(document).ready(function() {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  //date this page was last modified
  document.getElementById("lastModified").innerHTML = 'Last modified: ' +  document.lastModified;
});
