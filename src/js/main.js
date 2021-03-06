const AOS = require('aos');
AOS.init({ disable: 'mobile' });
const Waves = require('node-waves');
Waves.attach('.btn', ['waves-effect']);
Waves.init();
const $ = require('cash-dom');
window.$ = window.jQuery = $;
let cursorX = -100;
let cursorY = -100;
let cursor = document.getElementById('cursor-point');
const initCursor = () => {
    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
    });
    let render = () => {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

initCursor();

$('.visit-cursor')
    .on('mouseenter', function() {
        $(cursor)
            .addClass('visit')
            .text($(this).attr('data-cursor'));
    })
    .on('mouseleave', () => {
        $(cursor)
            .removeClass('visit')
            .text('');
    });
$('.github-cursor')
    .on('mouseenter', () => {
        $(cursor).addClass('github');
    })
    .on('mouseleave', () => {
        $(cursor).removeClass('github');
    });
$('.nav-hamburger').on('mousedown', () => {
    $('.nav-hamburger').toggleClass('active');
    $('.side-nav').toggleClass('active');
    $('body').toggleClass('nav-active');
});

$('.text-field input')
    .on('focus', function() {
        $(this)
            .siblings('label')
            .addClass('active');
    })
    .on('blur', function() {
        if ($(this).val() == '')
            $(this)
                .siblings('label')
                .removeClass('active');
    });

$(document).ready(() => {
    console.warn('You expected a warning !');
    console.log('But it was me, MUDIT !!');
});