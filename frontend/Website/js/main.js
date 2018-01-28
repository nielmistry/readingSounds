var bookName;

function hideAlerts()
{
    document.getElementById("alert1").style.display = "none";
}
function goToPage()
{
    if(document.getElementById("bookName").value != '')
    {
        bookName = document.getElementById("bookName").value;
        window.location.href = 'reader.html?' + bookName;
        lol();
    }
    
    else
    {
        document.getElementById("alert1").style.display = "block";
        console.log("YOOOO");
    }
}

function loadInEpub()
{
    var query = window.location.search;
    if (query.substring(0, 1) == '?') {
        query = query.substring(1);
    }

    console.log(query);
    var JSONGuten = getJSON(query, function(data)
        {
            console.log(data)
        });
    var gutenDexResult = JSON.parse(JSONGuten);
    console.log(gutenDexResult);
}

function lol()
{
    console.log(bookName);
}

function getJSON(word, callback) {
        
        var returnedWords;
        var requestURL = 'https://api.datamuse.com/words?ml=' + word;
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();


        request.onload = function()
        {

            callback(request.response);
        }

    }
