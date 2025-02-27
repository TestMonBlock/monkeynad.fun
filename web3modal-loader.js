async function loadWeb3Modal() {
  try {
    const Web3Modal = await import("https://esm.sh/web3modal@1.9.4");
    console.log("✅ Web3Modal loaded successfully:", Web3Modal);
    return Web3Modal;
  } catch (error) {
    console.error("🚨 Failed to load Web3Modal:", error);
    alert("Web3Modal could not be loaded. Try refreshing the page.");
  }
}
