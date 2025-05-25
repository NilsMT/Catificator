chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'inject') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: injectResources
            });
        });
    } else if (request.action =='injectJS') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['injected/injected.js']
            });
        });
    }
    sendResponse({ status: 'success' });
});


/////////////////////////////////////////////////////////////////////////


function injectResources() {
    // Inject JS
    chrome.runtime.sendMessage({
        action: 'injectJS'
    });
}