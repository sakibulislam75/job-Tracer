1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() – Selects one unique element using the id attribute.
Code:

<h1 id="title">Hello</h1>
<script>
const title = document.getElementById("title");
title.style.color = "red";
</script>


getElementsByClassName() – Selects multiple elements that share the same class name and returns a live HTMLCollection.
Code:

<p class="text">First</p>
<p class="text">Second</p>
<script>
const items = document.getElementsByClassName("text");
for(let i = 0; i < items.length; i++){
    items[i].style.color = "blue";
}
</script>

querySelector() – Selects the first matching element using CSS selectors.
code:

<h2 class="title">Hello</h2>
<h2 class="title">World</h2>
<script>
const first = document.querySelector(".title");
first.style.color = "green";
</script>

querySelectorAll() – Selects all matching elements and returns a NodeList.



2.How do you create and insert a new element into the DOM?
=
Here is the process of reate and insert a new element into the DOM

<div id="box"></div>
<script>
const el = document.createElement("p");
el.innerText = "New Element Added";
document.getElementById("box").appendChild(el);
</script>




3.What is Event Bubbling? And how does it work?
=
Event bubbling is a DOM event propagation process where the event first happens on the target element and then moves upward to its parent elements. In other words, when an inner element is clicked, the event can also trigger on its parent elements.
Code:
<div onclick="alert('Parent clicked')" style="padding:20px;background:lightgray;">
    Parent
    <button onclick="alert('Child clicked')">Click Me</button>
</div>




4.What is Event Delegation in JavaScript? Why is it useful?
=
Event delegation is a technique where instead of adding event listeners to multiple child elements, you add a single event listener to their parent element. It works using event bubbling.
It is useful because it improves performance, reduces memory usage, and makes it easier to handle dynamically added elements.

Code:
<ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<script>
document.getElementById("list").addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        alert(e.target.innerText);
    }
});
</script>




5.What is the difference between preventDefault() and stopPropagation() methods?
=
preventDefault() stops the browser’s default action of an event (like form submission or link navigation).
stopPropagation() stops the event from bubbling up to parent elements.
Code:

<a href="https://example.com" id="link">Click Link</a>
<script>
document.getElementById("link").addEventListener("click", function(e){
    e.preventDefault(); // stops default link action
    e.stopPropagation(); // stops event bubbling
});
</script>