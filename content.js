//remove links from search results
function removeLinks() {
    chrome.storage.sync.get(['redditFilter', 'quoraFilter'], (data) => {
        //check if Reddit filter is enabled and hide Reddit links
        if (data.redditFilter) {
            document.querySelectorAll('a[href*="reddit.com"]').forEach(link => {
                link.style.display = 'none';
            });
        }
        //check if Quora filter is enabled and hide Quora links
        if (data.quoraFilter) {
            document.querySelectorAll('a[href*="quora.com"]').forEach(link => {
                link.style.display = 'none';
            });
        }
    });
}

//check the current site's domain
const currentDomain = window.location.hostname;

//exclude specific domains
if (!currentDomain.includes('reddit.com') && !currentDomain.includes('quora.com')) {
    // Run function initially
    removeLinks();
}
