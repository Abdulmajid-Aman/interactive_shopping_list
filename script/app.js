// Utility Functions for DOM manipulation
function createElement(element) {
    return document.createElement(element)
}


function addText(element, text) {
    return (element.innerText = text)
}


function appendChild(parent, child) {
    return parent.appendChild(child)
}


function select(selector) {
    return document.querySelector(selector)
}

function listen(element, event, callback) {
    return element.addEventListener(event, callback)
}

function addAttribute(element, attribute, value) {
    return element.setAttribute(attribute, value)   
}

const shoppingList = ["Milk", "Tea"]

const ol = select("ol")

listen(document, "DOMContentLoaded", displayItems)

function displayItems() {
    ol.innerText = ''
    shoppingList.forEach(createAListElement)
}

function createAListElement(item) {
    const li = createElement("li")
    addText(li, item)
    appendChild(ol, li)
}

const form = select('form')
listen(form, 'submit', addItem)

function addItem(event) {
    event.preventDefault()
    shoppingList.push(event.target[0].value)
    event.target.reset()
    displayItems()
}

const deleteBtn = select(".delete")
listen(deleteBtn, 'click', deleteItems)

function deleteItems() {
    shoppingList.length = 0
    displayItems()
}