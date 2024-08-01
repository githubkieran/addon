document.addEventListener('DOMContentLoaded', () => {
    const redditToggle = document.getElementById('redditToggle');
    const quoraToggle = document.getElementById('quoraToggle');

    //load the stored values and set the checkboxes
    chrome.storage.sync.get(['redditFilter', 'quoraFilter'], (data) => {
        redditToggle.checked = data.redditFilter || false;
        quoraToggle.checked = data.quoraFilter || false;
    });

    //save the checkbox states in Chrome storage
    redditToggle.addEventListener('change', () => {
        chrome.storage.sync.set({ redditFilter: redditToggle.checked });
    });

    quoraToggle.addEventListener('change', () => {
        chrome.storage.sync.set({ quoraFilter: quoraToggle.checked });
    });
});
