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

function ifEqualSite(link) {
    return link.origin == "null" || url.indexOf(link.origin) == 0; //ホスト名で判断
}
