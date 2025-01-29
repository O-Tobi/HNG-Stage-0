document.addEventListener("DOMContentLoaded", () => {
    const utcTimeElement = document.querySelector("[data-testid='currentTimeUTC']");
    
    // fet the time
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    
    // Display the time
    utcTimeElement.textContent = `${hours}:${minutes}`;
});
