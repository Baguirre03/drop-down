const createBar = (headerText, headerClass, itemTextOne, itemTextTwo, itemTextThree, itemClass) => {
    const holder = document.createElement('ul')
    document.body.appendChild(holder)

    const headerHolder = document.createElement('li')
    holder.appendChild(headerHolder)

    const header = document.createElement('button')
    header.textContent = headerText
    header.classList.add(headerClass)
    headerHolder.appendChild(header)

    const itemOne = document.createElement('li')
    itemOne.textContent = itemTextOne
    itemOne.classList.add(itemClass)

    const itemTwo = document.createElement('li')
    itemTwo.textContent = itemTextTwo
    itemTwo.classList.add(itemClass)

    const itemThree = document.createElement('li')
    itemThree.textContent = itemTextThree
    itemThree.classList.add(itemClass)

    holder.appendChild(itemOne)
    holder.appendChild(itemTwo)
    holder.appendChild(itemThree)

    header.addEventListener('mouseover', () => {
        itemOne.classList.add('show')
        itemTwo.classList.add('show')
        itemThree.classList.add('show')
    })

    header.addEventListener('mouseout', () => {
        itemOne.classList.remove('show')
        itemTwo.classList.remove('show')
        itemThree.classList.remove('show')
    })
}

createBar('header', 'head', 'item 1', 'item 2', 'item 3', 'items')