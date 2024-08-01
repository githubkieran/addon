document.addEventListener('DOMContentLoaded', () => {
    const redditToggle = document.getElementById('redditToggle');
    const quoraToggle = document.getElementById('quoraToggle');

    //get current state of toggles
    chrome.storage.sync.get(['redditFilter', 'quoraFilter'], (data) => {
        redditToggle.checked = data.redditFilter !== undefined ? data.redditFilter : true;
        quoraToggle.checked = data.quoraFilter !== undefined ? data.quoraFilter : true;
    });

    //keep state of toggles
    redditToggle.addEventListener('change', () => {
        chrome.storage.sync.set({redditFilter:redditToggle.checked});
    });
    quoraToggle.addEventListener('change', () => {
        chrome.storage.sync.set({quoraFilter:quoraToggle.checked});
    });
});