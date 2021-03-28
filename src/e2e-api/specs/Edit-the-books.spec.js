  
const axios = require('axios');
const { expect } = require('chai');

const url_deploy = "https://cicd-books-back.herokuapp.com/books";
const book_to_be_registeriered = {
    "name": "The new ages of  High Computers",
    "author": "Alabi"
}
const nameAdded="version 2";
const authorNameAdded="Ashtuyi";

const wrong_book_bad_info = {
    "name": "The High Performance computers version 3"
}

describe("First We will create a book", () =>{
    before(async()=>{
        Our_old_book = await axios.post(url_deploy, book_to_be_registeriered);
        book_identifier = Our_old_book.data.id;
    });

    describe("When the user would like to edit a book without the author field", () =>{

        it('Then it will return a status error of 500', (done) => {
            axios.put(url_deploy+"/"+Our_old_book.data.id, wrong_book_bad_info).catch(function (error) {
                const status_answer = error.response.status;
                expect(status_answer).eql(500);
            done()
          });
        });
        
        
    });

    describe("When the user wants to edit the information about the book", () =>{
        before(async()=>{

            book_to_be_registeriered['name'] = `${book_to_be_registeriered.name}-${nameAdded}`;
            book_to_be_registeriered['author'] = `${book_to_be_registeriered.author}-${authorNameAdded}`;
            list_before_the_changes = await axios.get(url_deploy);
            answer = await axios.put(url_deploy+"/"+Our_old_book.data.id, book_to_be_registeriered);
            list_with_the_changes = await axios.get(url_deploy);
        });
        
        it("It will return a status of OK", ()=>{

            expect(answer.status).eql(200);
        });

        it("It will return the book that has been changed", () =>{
            book_changed = answer.data;
            delete book_changed['id'];
            expect(book_changed).eql(book_to_be_registeriered);
        });

        it("Then it will have to return a different book than the one was created initially ", () =>{
            book_changed = answer.data;
            delete book_changed['id'];
            expect(book_changed).not.eql(Our_old_book.data);
        })

        it("Now it will return a list but witn the same lenght", () =>{
            expect(list_with_the_changes.data.length).eql(list_before_the_changes.data.length);
        });

    });

});