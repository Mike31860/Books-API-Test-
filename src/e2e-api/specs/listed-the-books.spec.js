const axios = require('axios');
const { expect } = require('chai');

let answer;

const url_deploy = 'https://deploymentmiguel.herokuapp.com/books';

describe("When the user wants to list the registered books", () => {
    before(async() => {
        answer = await axios.get(url_deploy);
    });

    it("then it will return an status code of ok",()=>{
        expect(answer.status).eql(200);
    });

    it("Then it will return a list with at least one book and thid book should have name, author and ID", ()=>{  
        book = answer.data
        expect(book.length).to.be.greaterThan(0);
        book = answer.data[0];
        expect(book).to.have.property("id");
        expect(book).to.have.property("name");
        expect(book).to.have.property("author");
    })
});