"use strict";
const requestUrl = "data.html";
const btn = $(".load-more");
const loader = btn.find("span");
function sendRequest(method, url, body = null) {
    return new Promise( function (resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "";
        xhr.onload = function()  {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            };
        }
        xhr.onerror = function(){
            reject(xhr.response);

        }
        xhr.send();
    })

}
sendRequest("GET", requestUrl)
    .then(data => {
        btn.on("click", function () {
            
            btn.attr("disabled", true);
            loader.addClass("d-inline-block");
            setTimeout(function () {
                                    loader.removeClass("d-inline-block");
                                    btn.attr("disabled", false);
                $(".after-posts").before(data)
                                }, 2000);
        })
    })

    .catch(err => {
         loader.removeClass("d-inline-block");

           btn.attr("disabled", false);
      })

