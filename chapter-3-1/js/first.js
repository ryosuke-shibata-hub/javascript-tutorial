// document.querySelector('#colorText').textContent = 'カラーコード：';
// document.querySelector('#colorText').innerHTML = '<input type="radio">これはテスト';

// document.querySelector('#colorText').textContent = 'カラーコード：' + document.querySelector('#colorPicker').value;
// ↑
// これは同じ
// ↓
// document.querySelector('#colorText').textContent = `カラーコード：${document.querySelector('#colorPicker').value}`;

// const name = 'Mana';
// console.log(name);

// const text = document.querySelector('#colorText');
// const color = document.querySelector('#colorPicker');

// text.textContent = `カラーコード：${color.value}`;

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// const colorBg = () => {
//     text.textContent = `カラーコード：${color.value}`;
// }
// color.addEventListener('input', colorBg);
// ↑↓やってることは一緒
// color.addEventListener('input', () => {
//     text.textContent = `カラーコード：${color.value}`;
// });

const colorBg = () => {
    document.body.style.backgroundColor = color.value;
    text.textContent = `カラーコード：${color.value}`;
    if (color.value === '#ffffff') {
        text.textContent = `カラーコード：${color.value} (white)`;
    } else if (color.value === '#000000') {
        text.textContent = `カラーコード：${color.value} (black)`;
    }
}

color.addEventListener('input', colorBg);
