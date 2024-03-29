'use strict';


function getImage(select) {
    if (select===""){
        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then(response => response.json()) 
            .then(responseJson => 
                displayResults(responseJson))
            .catch(error => alert('Please check your internet or the server might be down.'));
    } else {
        fetch(`https://dog.ceo/api/breed/${select}/images/random`)
            .then(response => response.json())
            .then(responseJson => 
                displayResults(responseJson))
            .catch(error => alert('Please check your internet or the server might be down.'));
    }
}



function displayResults(responseJson) {
    if (responseJson.status === 'error') {
        $('.results').append(`<p>The breed is not found, please choose another</p>`)
    } else {
        $('.results').append(`
        <img src="${responseJson.message}" alt="Random Doggo!" class="img-results">`) 
        $('.results').removeClass('hidden');
    }
}

function pressSubmit() {
    $('.submit').on('click', function(s) {
        let select = $('.breeds').val();
        s.preventDefault(); 
        getImage(select);
        $('.results').empty();
    });
}

$(function() {
    console.log('App loaded! Waiting for you to hit submit!');
    pressSubmit();
});

