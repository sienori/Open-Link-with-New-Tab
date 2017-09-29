//ラベルセット
for(let l of ["optionLabel", "optionLabel0", "optionLabel1", "optionLabel2"]){
    document.getElementById(l).innerHTML = browser.i18n.getMessage(l);
}

option=window.document.getElementsByName("option");
//初期値セット
browser.storage.sync.get(["option"], function(value){
    option[value.option].checked=true;
})

window.document.addEventListener("click",function (e){
    switch(e.target.tagName){
        case 'INPUT':
            save(e.target.value);
            break;
            }
})

function save(value){
    browser.storage.sync.set({
        'option':value
    });
}