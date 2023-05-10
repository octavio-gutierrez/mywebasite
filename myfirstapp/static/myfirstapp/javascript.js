async function asincrona() {
    let response = await fetch("/myfirstapp/asincrona/");
    if (response.ok) { // if HTTP-status is 200-299
        let text = await response.text();
        alert(text);
    } else {
        alert("HTTP-Error: " + response.status);
    }
}