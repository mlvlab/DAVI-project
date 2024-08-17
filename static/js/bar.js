document.addEventListener("DOMContentLoaded", function () {
    const bars = document.querySelectorAll('.bar');
    const chart = document.querySelector('.chart');
    const caption = document.querySelector('.chart-caption');

    function animateBars() {
        bars.forEach(bar => {
            bar.style.height = '0';
        });

        setTimeout(() => {
            bars.forEach(bar => {
                const value = parseFloat(bar.getAttribute('data-value'));
                const logValue = Math.log10(value);

                const heightPercentage = (logValue / 3) * 100;

                bar.style.height = `${heightPercentage}%`;
            });
        }, 100);
    }

    animateBars();

    chart.addEventListener('click', animateBars);
    
    bars.forEach(bar => {
        bar.addEventListener('click', () => {
            caption.classList.add('highlight');

            setTimeout(() => {
                caption.classList.remove('highlight'); 
            }, 1500);
        });
    });
});
