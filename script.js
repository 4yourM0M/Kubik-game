var photoArray = ["one", "two", "three", "four", "five", "six"];
// створив масив
function whoWin() {
    var first = document.getElementById("first");
    var second = document.getElementById("second");
    var whoWon = document.getElementById("whoWon");
    var number_1 = Math.round(Math.random() * 5);
    var number_2 = Math.round(Math.random() * 5);

    if (number_1 > number_2) {
        whoWon.innerHTML = "Виграв перший гравець!!!";
    } else if (number_1 < number_2) {
        whoWon.innerHTML = "Виграв другий гравець!!!";
    } else whoWon.innerHTML = "Нічія";
    first.innerHTML = '<p>Гравець перший</p><img src="' + photoArray[number_1] + '.jpg">';
    second.innerHTML = '<p>Гравець другий</p><img src="' + photoArray[number_2] + '.jpg">';
}
// функція працює наступним чинам:
// спочатку я викликав змінні та присвоїв їх до елементів з html-файлу з певними id селекторами
// потім викликав зміні, які присвоїв до методу математичного рандому
// після того, як всі необхідні змінні були прописані я написав if-else конструкцію, за допомогою якої
// при певних значеннях кубка мінявся текст у якому говориться про пперемогу
// далі, для цього, щоб мінялись фото і гра була справжньою я записав ряд коду, за допомогою якого початок посилання на фото
// буде математично рандомно згенеровано
// програма готова, гра працює