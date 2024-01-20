function Resume() {
    var resumeUrl = "Resume.pdf";
    window.open(resumeUrl, '_blank')
}

function openProfile(profileUrl) {
    window.open(profileUrl, '_blank');
}

var projectsLink = document.getElementById('projectsLink1');
projectsLink.addEventListener('click', function() {
  window.location.href = 'https://github.com/Nishchal-Guptaa/This-is-my-first-repo'; 
});
  
  var projectsLink = document.getElementById('projectsLink2');
  projectsLink.addEventListener('click', function() {
    window.location.href = 'https://github.com/Nishchal-Guptaa/QR-Code-Generator'; 
  });


 var image = document.querySelector('#imgBox3 img');
 image.addEventListener('click', function() {
   window.open('https://github.com/Nishchal-Guptaa/QR-Code-Generator', '_blank');
 });

 var image = document.querySelector('#imgBox1 img');
 image.addEventListener('click', function() {
    window.open('https://nishchal-guptaa.github.io/This-is-my-first-repo/', '_blank');
 });

 var image = document.querySelector('#imgBox2 img');
 image.addEventListener('click', function() {
    window.open('http://ambaenterprises.in', '_blank');
 });