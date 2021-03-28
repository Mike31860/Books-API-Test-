const axios = require('axios');
const { expect } = require('chai');

const url_deploy = "https://deploymentmiguel.herokuapp.com/books";


const wrong_book_bad_info = {
    "name": "The High Performance computers"
}


describe("When the user wants to register a book without the author field", () =>{

    it('Then it will return a status error of 500', (done) => {
        axios.post(url_deploy, wrong_book_bad_info).catch(function (error) {
            const status_answer = error.response.status;
            expect(status_answer).eql(500);
        done()
      }).catch(done);
    });
    
    
});