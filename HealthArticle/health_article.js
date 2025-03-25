var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
        var articles = xhr.response.articles;  // Data is now available
        var articlesDiv = document.getElementById('articles');

        articles.forEach(function (article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = "Ways to Achieve: ";

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function (way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits: ';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function (benefit) {
                var benItem = document.createElement('li');
                benItem.textContent = benefit;
                benefitsList.appendChild(benItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);
            articlesDiv.appendChild(articleDiv);
        });

        console.log("Articles loaded successfully!");
    } else {
        console.error("Error fetching data");
    }
};

xhr.onerror = function () {
    console.error("Request failed");
};

xhr.send();
