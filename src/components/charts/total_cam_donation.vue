<template>

    <canvas id="myChart" width="700" height="200" style="background-color:white;"></canvas>
</template>

<script>

import Chart from 'chart.js/auto';
export default {
    mounted() {

        const ctx = document.getElementById('myChart');

        const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const data = {
            labels: labels,
            datasets: [{
                label: ['Total Campaign and Donation','Donation'],
                data: [1000, 800, 600, 400, 200],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.5
            }]
        };

        const myChart = new Chart(ctx, {
            type: 'line',
            data: data,
        });
        myChart;
    }
}
</script>