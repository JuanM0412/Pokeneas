const pokeneas = [
    {
      id: 1,
      nombre: 'El parcero del popular ocho',
      altura: '1.5 m',
      habilidad: 'Lanzallamas',
      imagen: 'https://storage.googleapis.com/pokeneas_taller_2/nea1.jpeg',
      fraseFilosofica: 'Parce, la vida es como un colectivo, hay que echarle pata y no dejar que se te vuele.'
    },
    {
      id: 2,
      nombre: 'El zarco',
      altura: '0.8 m',
      habilidad: 'Rayo confuso',
      imagen: 'https://storage.googleapis.com/pokeneas_taller_2/nea2.jpeg',
      fraseFilosofica: '¿Cómo me deje meter ese ganso ciego?'
    },
    {
      id: 3,
      nombre: 'Rigo',
      altura: '1.2 m',
      habilidad: 'Ataque aéreo',
      imagen: 'https://storage.googleapis.com/pokeneas_taller_2/nea3.jpeg',
      fraseFilosofica: 'Como volador sin palo'
    },
    {
      id: 4,
      nombre: 'El juicioso',
      altura: '0.6 m',
      habilidad: 'Esfera energética',
      imagen: 'https://storage.googleapis.com/pokeneas_taller_2/nea4.jpeg',
      fraseFilosofica: 'Solo Nacional a morir!!!'
    },
    {
      id: 5,
      nombre: 'Feid',
      altura: '1.1 m',
      habilidad: 'Acua-chorro',
      imagen: 'https://storage.googleapis.com/pokeneas_taller_2/nea5.jpeg',
      fraseFilosofica: 'Viendo la pantalla de mi celular... Guou... Tombos tienen que parar!!!'
    },
    {
      id: 6,
      nombre: 'Doble porcion',
      altura: '0.9 m',
      habilidad: 'Golpe sónico',
      imagen: 'https://storage.googleapis.com/pokeneas_taller_2/nea6.jpeg',
      fraseFilosofica: 'Mas frío que mis métricas'
    },
    {
      id: 7,
      nombre: 'Castro',
      altura: '0.7 m',
      habilidad: 'Barrera psíquica',
      imagen: 'https://storage.googleapis.com/pokeneas_taller_2/nea7.jpeg',
      fraseFilosofica: 'La vida es un trasteo, todo aparece cuando no lo estás buscando'
    },
    {
      id: 8,
      nombre: 'El viejo Mailo',
      altura: '1.3 m',
      habilidad: 'Furia de hojas',
      imagen: 'https://storage.googleapis.com/pokeneas_taller_2/nea8.jpeg',
      fraseFilosofica: 'Parce, como dijo el gato, "la hoja que se arranca nunca vuelve a su rama". Exotico, mágico, psíquico y psicodelico' 
    }
  ];

function getAll() {
    return pokeneas;
}

module.exports = {
    getAll
};