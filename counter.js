


if (!localStorage.getItem('counter')) {

    // Якщо ні, встановити лічильник на нуль у локальному сховищі
    localStorage.setItem('counter', 0);
}
            
function count() {
    // Отримати значення лічильника з локального сховища
    let counter = localStorage.getItem('counter');

    // Оновити лічильник
    counter++;
    document.querySelector('.num-st').innerHTML = counter;

    // Зберегти лічильник у локальному сховищі
    localStorage.setItem('counter', counter);
}


    // Встановити заголовок таким, що дорівнює поточному значенню у локальному сховищі
    document.querySelector('.num-st').innerHTML = localStorage.getItem('counter');
    document.querySelector('.buy').onclick = count;