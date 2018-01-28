book = null;
document.getElementById('bookChooser').addEventListener('change', function(e) {
    var firstFile = e.target.files[0];
    if (window.FileReader) {
        var reader = new FileReader();
        reader.onload = function(e) {
            book = ePub({
                bookPath: e.target.result
            });

            book.renderTo("area");
            /* Replace area with the id for your div to put the book in */
        }.bind(this);

        reader.readAsArrayBuffer(firstFile);
    } else {
        alert("Your browser does not support the required features. Please use a modern browser such as Google Chrome, or Mozilla Firefox");
    }
});



document.getElementById("prev").onclick = function() {
    book.prevPage();
}

document.getElementById("next").onclick = function() {
    book.nextPage();
}