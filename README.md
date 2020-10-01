# MyReads Project

This is a React implementation of the Udacity MyReads project, which provides a UI to organize books into have read/reading/want to read shelves, as well as a search screen which allows new books to be added.  To execute the application:

* install all project dependencies with `npm install`
* start the development server with `npm start`

### Extras
Tried a few things outside the scope of the assignment:
1. Added lodash debounce code to the typeahead search.
2. Noticed occasional warnings due to state updates on components that were unmounted while promises were in flight.  Checking mounted/unmounted status seemed to mitigate this on the BookshelfChanger. Ref: https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component
