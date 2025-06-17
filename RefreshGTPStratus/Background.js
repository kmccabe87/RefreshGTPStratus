chrome.action.onClicked.addListener(() => {
  // Clear cache for GTP Stratus
  chrome.browsingData.remove(
    {
      origins: ["https://www.gtpstratus.com"]
    },
    {
      cache: true,
      cacheStorage: true
    },
    () => {
      console.log("Cache cleared for GTP Stratus.");
      // Query all tabs and refresh those matching the Stratus domain
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
          if (tab.url && tab.url.startsWith("https://www.gtpstratus.com")) {
            chrome.tabs.reload(tab.id, {}, () => {
              console.log(`Refreshed tab: ${tab.url}`);
            });
          }
        });
      });
    }
  );
});