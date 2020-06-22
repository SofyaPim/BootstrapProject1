const requestUrl = '../data.html'
const body = { name: "Bob", age: 22}
const btn = $('.load-more');
const loader = btn.find('span');

function sendRequest(method, url, body = null) {
    return fetch(url).then(response =>{
        if (response.ok) {
                    return response.text()

        }
//return response.json()
    })

}   
 
sendRequest('GET', requestUrl)//+body
    .then(data => {
        btn.on('click', function () {
            
            
            btn.attr('disabled', true);
            loader.addClass('d-inline-block');
            setTimeout(function () {
                                    loader.removeClass('d-inline-block');
                                    btn.attr('disabled', false);
                console.log(data)
                                }, 2000);
        })
    })

    .catch(err => {
         loader.removeClass('d-inline-block');

           btn.attr('disabled', false);
           
                                
                            
    })
   // sendRequest('GET', requestUrl, body)