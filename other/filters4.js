// Добавление класса элементу, переданному в качестве параметра. Название класса составляется с помощью data-атрибута этого элемента
function setNumber(element) {
    element.classList.add('color-' + element.dataset.number);
}

// Добавление элементу четырёхцветного фона
function reColor(element) {
    var baseColor = getComputedStyle(element).borderTopColor;
    var color = baseColor.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    element.style.borderTopColor = colorShift(color, 40);
    element.style.borderRightColor = colorShift(color, 60);
    element.style.borderBottomColor = colorShift(color, 80);
    element.style.borderLeftColor = colorShift(color, 20);
}

// Смещение цветового тона
function colorShift(color, shift) {
    var rgb = '#';
    for (var i = 1; i <= 3; i++) { 
        var part = parseInt(color[i]) - shift;
        part = Math.round(Math.min(Math.max(0, part), 255));
        part = part.toString(16);
        rgb += ('00' + part).substr(part.length);
    }
    return rgb;
}

var chips = document.querySelectorAll('.chips li'); //Собираем в 1 массив все элементы li внутри .chips
for(var i = 0; i < chips.length; i++){ //перебираем их все циклом(индексы в массивах начинаются с 0)
setNumber(chips[i]); //добавляем класс .color-* по номеру каждого элемента из data-number
reColor(chips[i]); //Красим их и смещаем цветовой тон
chips[i].innerHTML = chips[i].dataset.number; //добавляем цыфры во внутрь
}