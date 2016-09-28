//Counter Code
var countShow = document.getElementsByTagName("span")[2];

function counterClick(){
    
    //Create a request Object    
    var request = new XMLHttpReuest();
    
    //Capture the response and store it
    request.onreadyStateChange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                countShow.innerHTML = counter;
            }
        }
    }; 
    
    //Make the request
    request.open('GET', "https://nirmal93guna.imad.hasura-app.io/counter", true);
    request.send(null);
}