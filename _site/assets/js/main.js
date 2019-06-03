window.ga = function() {
  ga.q.push(arguments)
};
ga.q = [];
ga.l = +new Date;
ga('create', 'UA-140938828-1', 'auto');
ga('set', 'transport', 'beacon');
ga('send', 'pageview')

$('#sidebarCollapse').click(function(event) {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });
  event.preventDefault();
  if (Boolean(sessionStorage.getItem('collapsed'))) {
    sessionStorage.setItem('collapsed', '');
  } else {
    sessionStorage.setItem('collapsed', '1');
  }
  $('#sidebar').toggleClass('active');
  $('#content').toggleClass('active');
});
