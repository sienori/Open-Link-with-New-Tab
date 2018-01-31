browser.storage.sync.get(["option"], function (value) {
    var option = value.option;
    if (option != 0) setBrank(option);
})

url = window.location.href;

function setBrank(option) {
    aTags = window.document.getElementsByTagName("a");
    for (let link of aTags) {
        if (link.href != "") {
            if (ifEqualSite(link)) { //同一サイトなら
                if (option == 2) link.target = "_blank";
            } else {
                link.target = "_blank";
            }
        }
    }
}

var url2 = url.match(/^(.*?:\/\/)(.*?)([a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})[\:[0-9]*]?([\/].*?)?$/i); //追加

function ifEqualSite(link) {
    return link.origin == "null" || link.origin.indexOf(url2[3]) > 0; //変更
}
