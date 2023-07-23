const heading_fuwa = document.querySelector('#heading_huwa');
const heading_guruguru = document.querySelector('#heading_guruguru');
const heading_change_color = document.querySelector('#heading_change_color');
const heading_change_width = document.querySelector('#heading_change_width');
const heading_huyohuyo = document.querySelector('#heading_huyohuyo');


const keyframes_fuwa = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
};

const keyframes_guruguru = {
    opacity: [0, 1],
    rotate: ['x 360deg', 0]
};

const keyframes_change_color = {
color: ['#f66', '#fc2', '#0c6', '#0bd']
};

const keyframes_change_width = {
    color: ['transparent', '#fff'],
    backgroundPosition: ['100% 0', '0 0'],
}

const keyframes_heading_huyohuyo = {
    borderRadius: [
        '20% 50% 50% 70%/50% 50% 70% 50%',
        '50% 20% 50% 50%/40% 40% 60% 60%',
        '50% 40% 20% 40%/40% 50% 50% 80%',
        '50% 50% 50% 20%/40% 40% 60% 60%',
    ],
}

const options = {
    duration: 2000,
    easing: 'ease',
};

const change_color_options = {
    duration: 8000,
    direction: 'alternate',
    interations: Infinity,
};

const change_width_options = {
    duration: 1000,
    easting: 'ease',
}

const heading_huyohuyo_options = {
    duration: 8000,
    direction: 'alternate',
    interations: Infinity,
}

heading_fuwa.animate(keyframes_fuwa, options);
heading_guruguru.animate(keyframes_guruguru, options);
heading_change_color.animate(keyframes_change_color, change_color_options);
heading_change_width.animate(keyframes_change_width, change_width_options);
heading_huyohuyo.animate(keyframes_heading_huyohuyo, heading_huyohuyo_options);
