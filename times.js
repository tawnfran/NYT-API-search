$("#search1").on("click", function () {

    var search = $("#data-search").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=zUk1GQuw8QnPyrDN1mAWgEuWirxIVtgl";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var docs = response.response.docs;
        console.log(docs);
        for (var i = 0; i < docs.length; i++) {
            var resultsDiv = $("<div>");
            var articleTitle = docs[i].headline.main;
            console.log(articleTitle);

            var articleP = $("<h2>");
            articleP.text(articleTitle);
            resultsDiv.append(articleP);

            var byTitle = docs[i].byline.original;
            var byP = $("<p>");
            byP.text(byTitle);
            resultsDiv.append(byP);

            var sectionTitle = docs[i].section_name;
            var sectionP = $("<p>");
            sectionP.text(sectionTitle);
            resultsDiv.append(sectionTitle);

            var dateTitle = docs[i].pub_date;
            var dateP = $("<p>");
            dateP.text(dateTitle);
            console.log(dateTitle);
            resultsDiv.append(dateP);

            var webTitle = docs[i].web_url;
            var webP = $("<p>");
            webP.text(webTitle);
            console.log(webTitle);
            resultsDiv.append(webP);

            $("#result").append(resultsDiv);
        }


        resultsDiv.text();

    });

});
