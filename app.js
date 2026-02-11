(function () {

  const encoded =
    "aHR0cHM6Ly9hcHAucG93ZXJiaS5jb20vdmlldz9yPWV5SnJJam9pT1dRNWE3YzRORE10WkRBNFppMDBObVU2TFdJNU5XWXROVFZpTW1JeE16azJPVEl4SWl3aWRDSTZJbVV5WXpsek1HSTBMVFpqWWpRdE5EYzJPUzA0TURWbUxUQTFaR015WVRVMk5XWTNZbUo5";

  function decodeBase64(str) {
    return decodeURIComponent(
      atob(str)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  }

  const iframe = document.createElement("iframe");
  iframe.src = decodeBase64(encoded);
  iframe.width = "100%";
  iframe.height = "1000";
  iframe.allowFullscreen = true;

  document.getElementById("container").appendChild(iframe);

})();
