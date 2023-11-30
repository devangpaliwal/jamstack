var news=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function iterate(news) {
    for (var i = 0; i < news.length; i++) {
        
        document.querySelector("#news").innerHTML += "<li>" + news[i] + "</li>";
    }
}


iterate(news);


