window.onload = function() {
  var iframe = document.querySelector('iframe');
  iframe.onload = function() {
    iframe.style.height = "200px"; // Adjust the height to match the banner's height
    iframe.style.border = "none";
  };
};
