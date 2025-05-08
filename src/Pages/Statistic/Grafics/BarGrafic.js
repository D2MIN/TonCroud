import Chart from 'chart.js/auto'

function BarGrafic(canvas, data){
    const grafic = new Chart(canvas,
        {
            type: 'bar',
            data: {
                labels : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                datasets: [{
                    label: 'Сумма пожертвований',
                    data: data,
                    borderRadius: 5,
                    borderWidth: 2,
                }]
            }
        }
    );
    return grafic;
}

export {BarGrafic}