const axios = require('axios');
const { expect } = require('chai');

const url_deploy = "https://deploymentmiguel.herokuapp.com/books";
const book_to_be_registered = {
    "name": "The Computer in CyberSecurity",
    "author": "Tuton Angryino"
}

describe ("When the user wants to regiter a book in the list", () =>{
    before(async()=>{

        old_List = await axios.get(url_deploy);
        answer = await axios.post(url_deploy, book_to_be_registered);
        the_new_list = await axios.get(url_deploy);
        book_Identifier = answer.data.id;
        
    });


    it('Then it will return a status code of ok',()=>{
        expect(answer.status).eql(200);
    });

    it("Then it will return the book h=that was created",()=>{
        book_created = answer.data;
        delete book_created['id'];
        expect(book_created).eql(book_to_be_registered);
    });

    it("Then it will return a JSON as content type",()=>{
       expect(answer.headers['content-type']).to.contain('application/json');
    });

    it("Then it will return a list, but its length increased by 1 element", ()=>{
        expect(the_new_list.data.length).eql(old_List.data.length + 1);
    })
});
