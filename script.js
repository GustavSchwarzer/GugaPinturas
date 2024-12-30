document.addEventListener('DOMContentLoaded', function() {
    const continueButton = document.getElementById('continueButton');
    const cancelButton = document.getElementById('cancelButton');
    
    continueButton.addEventListener('click', function() {
        window.location.href = 'https://api.whatsapp.com/send/?phone=5515981309966&text&type=phone_number&app_absent=0';
    });
    
    cancelButton.addEventListener('click', function() {
        window.history.back();
    });
});