// JavaScript source code
function app() {
    const form = document.getElementById("contact-form");

    form.addEventListener("click", (event) => {
        event.preventDefault();
        event.target.value;
        event.target.reset();
        return false;
        /*sendData();*/

    });
    app();

}


//async function sendData() {
//    // Associate the FormData object with the form element
//    const formData = new FormData(form);

//    try {
//        const response = await fetch("file:///C:/Users/HP/Desktop/Frontend%20Portfolio/My%20portfolio/contactus.html", {
//            method: "POST",
//            // Set the FormData instance as the request body
//            body: formData,
//        });
//        console.log(await response.json());
//    } catch (e) {
//        console.error(e);
//    }
//}
// Take over form submission
