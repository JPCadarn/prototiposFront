const data = {
	labels: [
	  'Disponíveis',
	  'Alugados',
	  'Aguardando Avaliação',
	  'Inutilizados'
	],
	datasets: [{
	  label: 'Situação',
	  data: [300, 50, 100, 20],
	  backgroundColor: [
		'rgb(255, 99, 132)',
		'rgb(54, 162, 235)',
		'rgb(255, 205, 86)',
		'rgb(80, 5, 156)'
	  ],
	  hoverOffset: 4
	}]
};

const config = {
    type: 'bar',
    data: data,
    options: {
		responsive: false
	}
};

const myChart = new Chart(
    document.getElementById('chartSituacaoLivros'),
    config
);