1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:- getElementById: It selects a single element by its unique id and returns one element or null. It is the fastest technique but works on single selector. 
getElementsByClassName: It selects all elements that have same class name and returns a live HTMLCollection. It's only Limited to classes and works on single selector..
querySelector: It selects the first element matching a CSS selector and returns one element or null. It works on single selector.
querySelectorAll: It selects all elements matching a CSS selector. Returns a static NodeList. It can be used in complex code and not selector specific.

2. How do you create and insert a new element into the DOM?

For creating and inserting a new element into the DOM we follow two main steps: Creating the element and use the document.createElement() method, passing the tag name of the element you want to create as a string argument. We can set properties like textContent or innerHTML to add content, and use setAttribute() to add or modify attributes like id or class. We use appendChild(): Inserts the new element as the last child of a specified parent element. We also use insertBefore() method on a parent element, passing the new element and the reference element before which it should be inserted. For inserting after a specific element we use combining insertBefore() with nextSibling. 

Example:

        let referenceElement = document.getElementById('myReference');
        referenceElement.parentNode.insertBefore(newDiv, referenceElement.nextSibling);

3. What is Event Bubbling and how does it work?
Ans:- Event bubbling is a DOM event. Where an event, once triggered on a target element, travels upwards through its root elements of the document. By this process we can control parent elements to handle events that occur on their children. It's a centralized event handling and event delegation. 

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:- Event Delegation in JavaScript is a technique where a single event listener is attached to a parent element to handle events triggered by its child elements, leveraging event bubbling. When a child element is clicked or other event occurs, the event bubbles up to the parent, which then processes it.

Instead of adding event listeners to each child element, you attach one listener to the parent. The listener uses the event object’s target property to identify which child element triggered the event.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:- The preventDefault() and stopPropagation() are methods used to control event behavior, but they serve distinct purposes. Their differences are mentioned below:

preventDefault()

Prevents the browser's default action for an event from occurring. It stops the default behavior associated with an event, like submitting a form ie. We use it to override the browser’s default action but still allow the event to bubble up or be captured by other listeners.

event.stopPropagation():
We use it to prevent the event from propagating further through the DOM hierarchy. When an event occurs on an element, it typically "bubbles up" to its parent elements and then to their parents. So potentially triggering event listeners attached to those parent elements.