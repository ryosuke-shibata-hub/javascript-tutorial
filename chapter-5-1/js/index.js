const menu = document.querySelector('#menu');

const list = [
    {
        name: 'わんこ',
        img: 'img1.jpg',
        price: 450,
    },
    {
        name: 'わんわん',
        img: 'img2.jpg',
        price: 150,
    },
    {
        name: '水遊びしてるわんこ',
        img: 'img3.jpg',
        price: 4500,
    },
    {
        name: 'おすわる',
        img: 'img4.jpg',
        price: 250,
    },
    {
        name: 'は？',
        img: 'img5.jpg',
        price: 3050,
    },
    {
        name: 'どうも',
        img: 'img6.jpg',
        price: 4508,
    },
    {
        name: 'とおいめ',
        img: 'img7.jpg',
        price: 4135,
    },
    {
        name: 'やっほー',
        img: 'img8.jpg',
        price: 2135,
    },
    {
        name: 'もふもふ',
        img: 'img9.jpg',
        price: 4835,
    },
];

min_count = 0;
max_count = list.length;

for (let i = min_count; i < max_count; i++) {
    // const content = `<div><img src="img/${list[i].img}" alt=""/><h2>${list[i].name}<p>${list[i].price}円</p></h2></div>`;
    // ↑↓やってることは一緒。↓は分割代入方式
    const { name, img, price } = list[i];
    const content = `<div><img src="img/${img}" alt=""/><h2>${name}<p>${price}円</p></h2></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}
// const content = `<div><img src="img/${list[0]}" alt=""/></div>
// <div><img src="img/${list[1]}" alt=""/></div>
// <div><img src="img/${list[2]}" alt=""/></div>
// <div><img src="img/${list[3]}" alt=""/></div>
// <div><img src="img/${list[4]}" alt=""/></div>
// <div><img src="img/${list[5]}" alt=""/></div>
// <div><img src="img/${list[6]}" alt=""/></div>
// <div><img src="img/${list[7]}" alt=""/></div>
// <div><img src="img/${list[8]}" alt=""/></div>
// <div><img src="img/${list[9]}" alt=""/></div>`;

// menu.insertAdjacentHTML('beforeend', content);
