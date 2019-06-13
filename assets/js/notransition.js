(function() {
  //temporary fix for windows problem; disable toggle until more info gathered
  if (navigator.appVersion.indexOf("Win") != -1) {
    document.getElementById("toggle").className = document.getElementById("toggle").className + ' hidden';
  }
  //the spaz is happening to mac; probably cuz adding images makes page load slower.
  //this feature is too gimicky, until i find better solution no toggle


  //6/12/19: possible fix to try, delegate the sidebar collapsing to the body tags (e.g. body #sidebarCollapse {...})
  if (Boolean(sessionStorage.getItem('collapsed'))) {
    //no transition for entire boody
    var body = document.getElementsByTagName('body')[0];
    body.className = body.className + ' notransition';
    //collapse everything
    document.getElementById("sidebar").className = 'active';
    document.getElementById("content").className = 'active';
    document.getElementById("lastModified").className = 'active';
    document.getElementById("topbar").className = document.getElementById("topbar").className + ' active';

    document.getElementById("sidebar")[0].offsetHeight;
    document.getElementById("content")[0].offsetHeight;
    document.getElementById("lastModified")[0].offsetHeight;
    document.getElementById("topbar")[0].offsetHeight;

    //reinstate transitions

    body.classList.remove('notransition');
  }
})();
