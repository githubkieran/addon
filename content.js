//remove links from search results
function removeLinks() {
    chrome.storage.sync.get(['redditFilter', 'quoraFilter'], (data) => {
        if(data.redditFilter) {
            document.querySelectorAll('a[href*="reddit.com"').forEach(link.style.display = 'none');
        } else if (data.quoraFilter) {
            document.querySelectorAll('[href*="quora.com"]').forEach(link.style.display = 'none');
        }
    });
}

//run function initially
removeLinks();
