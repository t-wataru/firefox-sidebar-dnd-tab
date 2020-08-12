let debug = true;
debugLog = debug ? console.log.bind(null, "DEBUG: ") : ()=>{};

browser.runtime.onMessage.addListener((message, sender) => {
  debugLog("got messsage", message);
});
