# Books-API-Test-
To be able to run the test cases we need to used the next comand:
```
npm i
npm run test

```
** The following test cases are covered in the folder e2e-api/specs/ **

- Test on Create-the-Books.spec.js:
  - Test when user wants to create a book "https://deploymentmiguel.herokuapp.com/books"
  - Create the book
  - Asserting that the book was created
  - Asserting that the length of the list has increased by one

- Test on create-the-NegativeBooks.spec.js
  - Test when the user wants to register a book without the author name
  -  The list books will be listed
  -  Putting a book name without an author name
  -  Asserting that the status code is 500
   
- Test on Delete-The-Books.spec.js:
  - Test when the user wants to delete a book
  - The list books will be listed
  - Delete the book
  - Asserting that the list does not containt the book deleted
  - Asserting that the length of the list has decreased by one


- Test on delete-the-negativeBooks.spec.js
  - test when the user wants to delete a book with an invalid id
  - Asserting that the id in the payload is not on the books list.

- Test on Edit-the-Books.spec.js
  - Test when the user wants to edit a book but the author name is not filled out
  - The list books will be listed
  - Creating a new book
  - Asserting that tha book was created
  - Asserting that the book has the author name, and the book name
  - Asserting that the was edited
  - Asserting that the book edited is not the same that the book that was created at first
  - Asserting that the lenght of the list is still the same than before


- Test on Listed-the-Books.spec.js
  - Test when the user wants to display the list of the books.
  - The list books will be listed 
  - Asserting that there is at least one element on the book list.
  - Asserting that we obtained a book from the list
  - Asserting that the book contains the books name and the author name.





