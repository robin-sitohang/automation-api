const assert = require('chai').expect;

const page = require('../page/get-request-page.js');


const testCase = {
 "positive" : {
    "getArtikel" : "Sebagai user saya ingin menampilkan list artikel",
 }

}
describe(`List Artikel`, () => {
 it(`@get ${testCase.positive.getArtikel}`, async() => {
  const response = await page.getArtikelList();
  assert(response.status).to.equal(200);
  console.log(response)
 })
}) 