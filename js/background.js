const background = document.getElementById('background');
const context = background.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

const numbers = '0123456789';
const latin = 'ABCDEFGHIKLMNOPQRSTVXYZ';
const katakana = 'ンワラヤマハナタサカアリミヒニチシキイルユムフヌツスクウレメヘネテセケエヲロヨモホノトソコオ';

const symbols = numbers + latin + katakana;

const font_size = 5;

const rainDrops = [];

for (let i = 0; i < width / font_size; i++) {
    rainDrops[i] = 1;
}

function draw() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#0F0';
    context.font = `${font_size}px Arial, sans-serif`;

    for (let i = 0; i < rainDrops.length; i++) {
        const symbol = symbols.charAt(Math.floor(Math.random() * symbols.length));
        context.fillText(symbol, i * font_size, rainDrops[i] * font_size);

        if (rainDrops[i] * font_size > height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

setInterval(draw, 30);