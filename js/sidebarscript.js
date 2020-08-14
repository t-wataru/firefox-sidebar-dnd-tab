console.log("open panel");
async function dropEvent(event) {
    console.log(event);
    console.log(event.dataTransfer.types[0]);
    console.log(event.dataTransfer.dropEffect);
    if(event.dataTransfer.types[0]!="text/x-moz-text-internal") {
        return;
    }

    const activeTabs = await browser.tabs.query({active:true});
    console.log(activeTabs);
};

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
}

const div = document.querySelector("div");
console.log(div);
div.addEventListener('dragover', handleDragOver);
div.addEventListener('drop', dropEvent, false);
