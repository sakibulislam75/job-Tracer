
---

# JavaScript DOM Questions & Answers

---

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

### 🔹 `getElementById()`

Selects one unique element using the `id` attribute.

```html
<h1 id="title">Hello</h1>

<script>
const title = document.getElementById("title");
title.style.color = "red";
</script>
```

---

### 🔹 `getElementsByClassName()`

Selects multiple elements that share the same class name and returns a **live HTMLCollection**.

```html
<p class="text">First</p>
<p class="text">Second</p>

<script>
const items = document.getElementsByClassName("text");

for (let i = 0; i < items.length; i++) {
  items[i].style.color = "blue";
}
</script>
```

---

### 🔹 `querySelector()`

Selects the **first matching element** using CSS selectors.

```html
<h2 class="title">Hello</h2>
<h2 class="title">World</h2>

<script>
const first = document.querySelector(".title");
first.style.color = "green";
</script>
```

---

### 🔹 `querySelectorAll()`

Selects **all matching elements** using CSS selectors and returns a **NodeList**.

```html
<h2 class="title">Hello</h2>
<h2 class="title">World</h2>

<script>
const allTitles = document.querySelectorAll(".title");

allTitles.forEach(function(item) {
  item.style.color = "purple";
});
</script>
```

---

## 2. How do you create and insert a new element into the DOM?

We can create a new element using `document.createElement()` and insert it using `appendChild()` or similar methods.

```html
<div id="box"></div>

<script>
const el = document.createElement("p");
el.innerText = "New Element Added";

document.getElementById("box").appendChild(el);
</script>
```

---

## 3. What is Event Bubbling? How does it work?

Event bubbling is a DOM event propagation process where an event first occurs on the target element and then moves upward to its parent elements.
If a child element is clicked, the event can also trigger on its parent elements.

```html
<div onclick="alert('Parent clicked')" style="padding:20px;background:lightgray;">
  Parent
  <button onclick="alert('Child clicked')">Click Me</button>
</div>
```

When the button is clicked:

1. The button’s event runs first.
2. Then the event bubbles up to the parent `<div>`.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where instead of adding event listeners to multiple child elements, you add a single event listener to their parent element.
It works because of event bubbling.

###  Why it is useful:
It is Useful becasuse:-

* Improves performance
* Reduces memory usage
* Works for dynamically added elements

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    alert(e.target.innerText);
  }
});
</script>
```

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()`?

### 🔹 `preventDefault()`

Stops the browser’s default behavior (like form submission or link navigation).

### 🔹 `stopPropagation()`

Stops the event from bubbling up to parent elements.

```html
<a href="https://example.com" id="link">Click Link</a>

<script>
document.getElementById("link").addEventListener("click", function(e) {
  e.preventDefault();     // Stops default link action
  e.stopPropagation();    // Stops event bubbling
});
</script>
```

---


