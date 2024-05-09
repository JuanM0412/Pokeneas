const pokeneas = [
	{
		id: 1,
		name: 'El parcero del popular ocho',
		height: '1.5 m',
		ability: 'Lanzallamas',
		image: 'https://storage.googleapis.com/pokeneas_taller_2/nea1.jpeg',
		philosophicalPhrase: 'Parce, la vida es como un colectivo, hay que echarle pata y no dejar que se te vuele.'
    },
    {
		id: 2,
		name: 'El zarco',
		height: '0.8 m',
		ability: 'Rayo confuso',
		image: 'https://storage.googleapis.com/pokeneas_taller_2/nea2.jpeg',
		philosophicalPhrase: '¿Cómo me deje meter ese ganso ciego?'
    },
    {
		id: 3,
		name: 'Rigo',
		height: '1.2 m',
		ability: 'Ataque aéreo',
		image: 'https://storage.googleapis.com/pokeneas_taller_2/nea3.jpeg',
		philosophicalPhrase: 'Como volador sin palo'
    },
    {
		id: 4,
		name: 'El juicioso',
		height: '0.6 m',
		ability: 'Esfera energética',
		image: 'https://storage.googleapis.com/pokeneas_taller_2/nea4.jpeg',
		philosophicalPhrase: 'Solo Nacional a morir!!!'
    },
    {
		id: 5,
		name: 'Feid',
		height: '1.1 m',
		ability: 'Acua-chorro',
		image: 'https://storage.googleapis.com/pokeneas_taller_2/nea5.jpeg',
		philosophicalPhrase: 'Viendo la pantalla de mi celular... Guou... Tombos tienen que parar!!!'
    },
    {
		id: 6,
		name: 'Doble porcion',
		height: '0.9 m',
		ability: 'Golpe sónico',
		image: 'https://storage.googleapis.com/pokeneas_taller_2/nea6.jpeg',
		philosophicalPhrase: 'Mas frío que mis métricas'
    },
    {
    	id: 7,
      	name: 'Castro',
      	height: '0.7 m',
		ability: 'Barrera psíquica',
		image: 'https://storage.googleapis.com/pokeneas_taller_2/nea7.jpeg',
		philosophicalPhrase: 'La vida es un trasteo, todo aparece cuando no lo estás buscando'
    },
    {
		id: 8,
		name: 'El viejo Mailo',
		height: '1.3 m',
		ability: 'Furia de hojas',
		image: 'https://storage.googleapis.com/pokeneas_taller_2/nea8.jpeg',
		philosophicalPhrase: 'Parce, como dijo el gato, "la hoja que se arranca nunca vuelve a su rama". Exotico, mágico, psíquico y psicodelico' 
	}
];

function getAll() {
	return pokeneas;
}

module.exports = { getAll };