document.addEventListener('DOMContentLoaded', function() {
    console.log("Page loaded!");

    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});
