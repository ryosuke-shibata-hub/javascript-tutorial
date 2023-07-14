const isAgreed = document.querySelector('#check')
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {

    // ↓定数名の前に「!」をつけるとfalseになる
    btn.disabled = !isAgreed.checked;
    // ↑↓やっていることは同じ
    // if (isAgreed.checked === true) {
    //     btn.disabled = false;
    // } else {
    //     btn.disabled = true;
    // }
});
