const request = require('supertest');

const app = require('../app');

describe('Probando la ruta raiz', () => {
    test('Deberia responder al metodo get', async () => {
        const response = await request(app).get('/home');
        expect(response.statusCode).toBe(200);
        // Verifica el contenido del archivo HTML si es necesario
        expect(response.text).toContain('<title>Home</title>');
    });
});


