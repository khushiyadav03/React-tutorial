function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   // React bhi conceptually object ko DOM element me convert karta hai.
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for(const prop in reactElement.props){
    // children DOM attribute nahi hota, isliye props loop me skip.
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)
}

const reactElement = {
    // Ye simple object React element ka basic shape samjhane ke liye hai.
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

// Custom renderer object ko real browser DOM me add kar raha hai.
customRender(reactElement, mainContainer)
