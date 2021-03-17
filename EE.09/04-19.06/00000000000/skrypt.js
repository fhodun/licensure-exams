function dodawanie() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    const wynik = Number(a) + Number(b);

    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
}

function odejmowanie() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    const wynik = a - b;

    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
}

function mnozenie() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    const wynik = a * b;

    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
}

function dzielenie() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    const wynik = a / b;

    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
}

function potegowanie() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;

    let wynik=1;
    for(let i=0;i<b;i++)
    {
        wynik*=a;
    }

    document.getElementById("wynik").innerHTML = "Wynik: " + wynik;
}