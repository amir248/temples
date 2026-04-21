document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    // Создаем гамбургер
    const burger = document.createElement('div');
    burger.classList.add('burger');
    for(let i=0;i<3;i++){
        const line = document.createElement('span');
        burger.appendChild(line);
    }
    header.appendChild(burger);

    // Создаем меню
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuList = document.createElement('ul');

    // Массив пунктов меню с ссылками
    const items = [
        {text:'Главная', href:'/'},
        {text:'Отдых СПб', href:'/article'},
        {text:'Карта', href:'/#map'}
    ];

    items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        li.appendChild(a);
        menuList.appendChild(li);

        // Закрытие меню при клике на пункт
        a.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    menu.appendChild(menuList);
    document.body.appendChild(menu);

    // Логика открытия/закрытия меню
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});