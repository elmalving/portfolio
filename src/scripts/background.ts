export const matrixBackground = (
    context: CanvasRenderingContext2D,
    pageWidth: number,
    pageHeight: number
) => {
    const numbers = '0123456789';
    const latin = 'ABCDEFGHIKLMNOPQRSTVXYZ';
    const katakana =
        'ンワラヤマハナタサカアリミヒニチシキイルユムフヌツスクウレメヘネテセケエヲロヨモホノトソコオ';

    const symbols = numbers + latin + katakana;

    const font_size = 10;

    const rainDrops: number[] = [];

    for (let i = 0; i < pageWidth / font_size; i++) {
        rainDrops[i] = 1;
    }

    function draw() {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, pageWidth, pageHeight);

        context.fillStyle = '#0F0';
        context.font = `${font_size}px Arial, sans-serif`;

        for (let i = 0; i < rainDrops.length; i++) {
            const symbol = symbols.charAt(
                Math.floor(Math.random() * symbols.length)
            );
            context.fillText(symbol, i * font_size, rainDrops[i] * font_size);

            if (
                rainDrops[i] * font_size > pageHeight &&
                Math.random() > 0.975
            ) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }

    setInterval(draw, 30);
};
