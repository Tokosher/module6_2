// Kahoot
// const input = document.querySelector('input');
//
// const inputHandler = () => {
//     console.log('First and last call callback');
//     input.removeEventListener('input', inputHandler);
// }
//
// input.addEventListener('input', inputHandler);

// const input = document.querySelector('input');
// console.log(input.value);
// console.log(input.textContent);

// const select = document.querySelector('select');
// console.log(select.value);
// console.log(select.textContent);


// const textarea = document.querySelector('textarea');
// console.log(textarea.value);
// console.log(textarea.textContent);

// document.addEventListener('keydown', event => {
//     console.log(event)
// })

// const input = document.querySelector('input');

// input.addEventListener('blur', () => {
//     console.log('blur')
// })
//
// input.addEventListener('change', () => {
//     console.log('change')
// })
//
// input.addEventListener('focus', () => {
//     console.log('focus')
// })

// const input = document.querySelector('input');
//
// input.addEventListener('input', () => {
//     console.log('Second callback called')
// });
//
// input.addEventListener('input', () => {
//     console.log('First callback called')
// });

// Практика
// зробити показ та скриття тексту при натисканні на кнопку

// const button = document.querySelector('#hider');
// const text = document.querySelector('#hide');
//
// button.addEventListener('click', () => {
//     if (text.style.visibility === 'visible') {
//         text.style.visibility = 'hidden';
//         button.value = 'Натисніть щоб показати текст';
//     } else {
//         text.style.visibility = 'visible';
//         button.value = 'Натисніть щоб заховати текст';
//     }
// })

// створити форму авторизації з логіном та паролем в коснтантах

// const rightLogin = 'james.smith@gmail.com';
// const rightPassword = 'abc123qwerty';
//
// const form = document.querySelector('form');
// const wrongDataText = document.querySelector('#wrong-data')
// console.log(form.elements)
// form.addEventListener('submit', event => {
//     event.preventDefault();
//     const loginValue = form.elements.login.value;
//     const passwordValue = form.elements.password.value;
//
//     if (loginValue === rightLogin && passwordValue === rightPassword) {
//         form.style.display = 'none';
//
//         const accessConfirmedText = `<h2 style="color: green">Access confirmed</h2>`;
//         form.insertAdjacentHTML('beforebegin', accessConfirmedText);
//     } else {
//         wrongDataText.style.visibility = 'visible';
//     }
// })

// const input = document.querySelector('input');
// input.addEventListener('input', event => {
//     console.log(input.value)
// })

// домашнє опрацювання
// "1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега ******************body.****************** Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
// 2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**"
