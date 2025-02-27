function loadWeb3Modal(callback) {
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/web3modal/1.9.4/web3modal.min.js";
  script.onload = callback;
  script.onerror = function () {
    console.error("🚨 Web3Modal failed to load!");
    alert("Web3Modal did not load. Refresh the page.");
  };
  document.body.appendChild(script);
}

// Load Web3Modal before running the DApp
document.addEventListener("DOMContentLoaded", function () {
  console.log("🔄 Loading Web3Modal dynamically...");
  loadWeb3Modal(() => {
    console.log("✅ Web3Modal Loaded Successfully!");
  });
});
