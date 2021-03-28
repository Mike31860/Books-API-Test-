const axios = require('axios');
const { expect, assert } = require('chai');
const chai = require('chai');

const url_deploy = "https://deploymentmiguel.herokuapp.com/books";
const book_to_be_registeriered = {
    "name": "The Computer Science in Energy",
    "author": "Rudolf Andgntoinm"
}

describe("Delete a book that has been created", () =>{

    before(async ()=>{
        book_Registered = await axios.post(url_deploy,book_to_be_registeriered);       
    });


    describe("When user wants to delete a registered book", () =>{

        before(async () =>{

            list_of_books = await axios.get(url_deploy);
            answer = await axios.delete(`${url_deploy}/${book_Registered.data.id}`);
            new_list_of_books = await axios.get(url_deploy);

        });

        it("it will a satus code of code", () =>{
            expect(answer.status).eql(200);
        })

        it("Then The book that has been deleted should not exist in the list of the books", () =>{
            expect(new_list_of_books.data).not.contain(book_Registered.data);
        })

        it("Then the list of the books will have to have a length decreased by one", () =>{
            expect(new_list_of_books.data.length).eql(list_of_books.data.length-1);
        })

    })
})
