chrome.contextMenus.create({
  id: "spaceshinobi-google-image-reverse-search",
  title: "Google Image Reverse Search",
  contexts: ["image"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "spaceshinobi-google-image-reverse-search") {
		chrome.tabs.create({
			url: "https://www.google.com/searchbyimage?image_url=" + info.srcUrl
		});
	}
});