const requestUrl = 'https://github.com/SofyaPim/BootstrapProject1/data.html'
const btn = $('.load-more');
const loader = btn.find('span');
function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.open(method, url)
        xhr.responseType = ""
//to POST    
//xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response);

        }
        xhr.send();
        //to POST 
        // xhr.send(JSON.stringify(body));

    })

}
sendRequest('GET', requestUrl)
    .then(data => {
        btn.on('click', function () {
            
            btn.attr('disabled', true);
            loader.addClass('d-inline-block');
            setTimeout(function () {
                                    loader.removeClass('d-inline-block');
                                    btn.attr('disabled', false);
                $('.after-posts').before(data)
                                }, 2000);
        })
    })

    .catch(err => {
         loader.removeClass('d-inline-block');

           btn.attr('disabled', false);
           
                                
                            
    })
//POST
 //sendRequest('POST')
//  const body = { name: "Bob", age: 22}
//sendRequest('GET', requestUrl, body)

//const { get } = require("browser-sync").create();

