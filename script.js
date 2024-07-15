// Example JavaScript functionality
function sendTransaction() {
    const recipientAddress = document.getElementById('recipientAddress').value;
    const amount = document.getElementById('amount').value;

    if (recipientAddress && amount) {
        alert(`Sending ${amount} ETH to ${recipientAddress}`);
        // Here you would integrate with a blockchain API to send the transaction
    } else {
        alert('Please enter both recipient address and amount.');
    }
}
// Function to open the wallet modal
function openWalletModal() {
    document.getElementById('walletModal').style.display = 'block';
}

// Function to close the wallet modal

function closeWalletModal() {
document.getElementById('walletModal').style.display = 'none';
}