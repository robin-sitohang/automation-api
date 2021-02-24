const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.API_BASE_URL);

const getArtikelList = () => api.get('')
 .set('Content-Type', 'application/xml')
 .set('Accept', 'application/xml')
 .send();

module.exports = {
   getArtikelList,
}