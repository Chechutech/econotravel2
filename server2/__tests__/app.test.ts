import request, {Response} from 'supertest';
import app from "../src/app";
 
 describe ('GET /exp', () => {
    test ('should respond with a 200 status code', async () => {
        let response = await request(app).get('/exp').send()
       expect(response.statusCode).toBe (200);

    })
})


describe ('POST /exp', () => {
    test ('should respond with a 200 status code', async () => {
        let response = await request(app).post('/exp').send({ 
            id_experiencias: 27,
            titulo: "Paseo en bicicleta por el Montseny",
            descripcion: "Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natura del Montseny.Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares.El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar.Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y munxetes del Montseny.",
            precio: 250,
            duracion: "5h",
            tiempo_duracion: "5h",
            accesibilidad: "",
            img_url: "",
            transporte: "",
            ubicacion: "",
            })
       expect(response.status).toEqual (200);
    })
})

