1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:- getElementById: Selects a single element by its unique id. Returns one element or null. Fastest, least flexible.
getElementsByClassName: Selects all elements with a specific class. Returns a live HTMLCollection. Limited to classes.
querySelector: Selects the first element matching a CSS selector. Returns one element or null. Very flexible.
querySelectorAll: Selects all elements matching a CSS selector. Returns a static NodeList. Very flexible.
Key Differences:

Selector: id (unique), class, or any CSS selector.
Return: Single element (getElementById, querySelector) vs. collection (getElementsByClassName, querySelectorAll).
Live vs. Static: getElementsByClassName is live; querySelectorAll is static.
Flexibility: querySelector/querySelectorAll support complex CSS selectors; others are more specific.



2. How do you create and insert a new element into the DOM?

Creating and inserting a new element into the Document Object Model (DOM) in JavaScript involves two main steps: Creating the element.
Use the document.createElement() method, passing the tag name of the element you want to create as a string argument.

Adding content and attributes (optional).
You can set properties like textContent or innerHTML to add content, and use setAttribute() to add or modify attributes like id or class.
Inserting the element into the DOM.
Choose a method based on where you want to insert the element:
appendChild(): Inserts the new element as the last child of a specified parent element.

3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?