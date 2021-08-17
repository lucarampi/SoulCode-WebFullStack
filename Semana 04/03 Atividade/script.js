function invertmode() {
    var body = document.getElementsByTagName("body")
    if (body[0].className == "lightmode") {
        body[0].className = "darkmode"
        // document.getElementsByTagName("li")[0].innerHTML = "Modo claro"
    } else {
        body[0].className = "lightmode"
        // document.getElementsByTagName("li")[0].innerHTML = "Modo escuro"
    }
}

letter_size = 16

function largerLetter() {
    var body = document.getElementsByTagName("body")
    var form_st = document.getElementsByClassName("form_st")
    letter_size++
    body[0].style.fontSize = ` ${letter_size}px `
    for (i = 0; i < form_st.length; i++) form_st[i].style.fontSize = ` ${letter_size}px `

}

function smallerLetter() {
    var body = document.getElementsByTagName("body")
    var form_st = document.getElementsByClassName("form_st")
    letter_size--
    body[0].style.fontSize = ` ${letter_size}px `
    for (i = 0; i < form_st.length; i++) form_st[i].style.fontSize = ` ${letter_size}px `
}

function validaPhone() {
    var phone = document.getElementById("phone")
    if (phone.id == "phone") {
        if (phone.value.length != 11) phone.style.backgroundColor = "lightcoral"
        else phone.style.backgroundColor = "lightgreen"
    }
}

function validaEmail() {
    var email = document.getElementById("email")
    if (email.id == "email") {
        if (email.value.indexOf("@") == -1 || email.value.indexOf("@") == 0 || email.value.indexOf(".") == -1 || email.value.indexOf(".") == 0) email.style.backgroundColor = "lightcoral"
        else email.style.backgroundColor = "lightgreen"
    }
}

function validaName() {
    var name = document.getElementById("name")
    var test = name.value.match(/[!~^'`"?@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]+/) ? true : false;
    for (let i = 0; i < name.value.length; i++)
        if (test) {
            name.style.backgroundColor = "lightcoral"
            break
        }
        else name.style.backgroundColor = "lightgreen"

}

function ImgEvents1(img, aumentar) {
    if (aumentar)
        img.style.height = "27vh";
    else img.style.height = "25vh";
}

function ImgEvents2(value) {
    var img = document.getElementsByTagName("img")[1]
    img.style.opacity = value
}

function ImgEvents3(img) {
    img.style.height = "28vh";
}

function ImgEvents4(img, value) {
    if (value)
        img.src = "Imagens/texto.png";
    else img.src = "Imagens/pet4.jpg";
}





































// bt_tag = document.getElementsByTagName("button")
// var mode = false
// function invertmode() {
//     mode != mode
//     alert(mode)
//     if (mode == true) {
//         document.getElementsByTagName("body")[0].style.backgroundColor = "black"
//         document.getElementsByTagName("body")[0].style.color = "whitesmoke"
//         bt_tag[0].innerHTML = "Modo claro"

//     }
//     if (mode == false) {
//         document.getElementsByTagName("body")[0].style.backgroundColor = "white"
//         document.getElementsByTagName("body")[0].style.color = "black"
//         bt_tag[0].innerHTML = "Modo escuro"
//     }

// }