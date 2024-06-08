document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    document.getElementById('currentDate1').textContent = `Date: ${dateString}`;
    document.getElementById('currentDate2').textContent = `Date: ${dateString}`;
});

const ctx1 = document.getElementById('priceGraph1').getContext('2d');
const priceChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Price',
            data: [10, 12, 14, 13, 15, 18, 20],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: '#007bff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('priceGraph2').getContext('2d');
const priceChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Price',
            data: [10, 12, 14, 13, 15, 18, 20],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
           
