var app = document.getElementById("message");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString(
    '<span style="font-family: Share Tech Mono, monospace;">I\'m a </span>'
  )
  .typeString(
    '<span style="font-family: Space Mono, monospace; font-weight: 700;">Student</span>'
  )
  .pauseFor(2500)
  .deleteChars(9)
  .typeString(
    '<span style="font-family: Share Tech Mono, monospace;">an </span>'
  )
  .typeString(
    '<span style="font-family: Space Mono, monospace; font-weight: 700;">Explorer</span>'
  )
  .pauseFor(2500)
  .start();

var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
