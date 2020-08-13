console.log("open panel");
const dropEvent = function (event) {
    console.log(event);
};
document.addEventListener('dragstart', dropEvent);
document.addEventListener('dragover', dropEvent);
document.addEventListener('dragenter', dropEvent);
document.addEventListener('dragleave', dropEvent);
document.addEventListener('dragend', dropEvent);
document.addEventListener('drop', dropEvent);
window.addEventListener('mouseup', event => {
    let isRightButtonUp = event.button == 2
    if (isRightButtonUp && closingTab) {
        browser.runtime.sendMessage({ closeMe: true });
    }
});