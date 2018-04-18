function handleFiles(files) {
    if (window.FileReader) {
        getAsText(files[0]);
    } else {
        alert('FileReader are no supported in this browser');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    reader.readAsText(fileToRead);
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
}

function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
}

function processData(csv) {
    console.log(csv);
    var allTextLines = csv.split(/\r\n|\n/);
    console.log(allTextLines);
    var lines = [];
    for (var i = 0; i < allTextLines.length; i++) {
        var data = allTextLines[i].split(';');
        var tarr = [];
        for (var j = 0; j < data.length; j++) {
            tarr.push(data[j]);
        }
        lines.push(tarr);
    }
    console.log(lines);
}

function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}