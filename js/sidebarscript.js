console.log("open panel");
const dropEvent = function (event) {
    console.log(event);
    console.log(event.dataTransfer.types[0]);
    console.log(event.dataTransfer.dropEffect);
};
const div = document.querySelector("div");
console.log(div);
div.addEventListener('dragstart', dropEvent);
div.addEventListener('dragover', dropEvent);
div.addEventListener('dragenter', dropEvent);
div.addEventListener('dragleave', dropEvent);
div.addEventListener('dragend', dropEvent);
div.addEventListener('drop', dropEvent);
