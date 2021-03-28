const axios = require('axios');
const { expect } = require('chai');
const chai = require('chai');

const url_deploy = "https://deploymentmiguel.herokuapp.com/books";


describe("When user wants to delete a registered book with an incorrect id", () =>{

    it('Then should return a 500 status error', (done) => {
        axios.delete(`${url_deploy}/idNoExist`).catch(function (error) {
            const answer_status = error.response.status;
            expect(answer_status).eql(500);
        done()
      });
    });
    
    
});