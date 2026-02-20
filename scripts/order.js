// примеры работы javascript
alert(1)
// найте элемент по имени класса .
//взять первый элемент с классом main-tittle и поменяь цвет на красный
document.getElementsByClassName('main-title')[0].style.color = 'red';
// связать с обработчиком события клик по наденному элементу
document.getElementsByClassName('main-title')[0].onclick = function() {
    alert("Hello World!");
}