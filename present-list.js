const borderStyle = '1px solid black'

lis = []
items.forEach(item => {
    let style
    const li = document.createElement('li')
    const { type, displayName, username, title } =  item

    li.style.borderBottom = borderStyle
    li.style.borderLeft = borderStyle
    li.style.borderRight = borderStyle
    li.style.fontSize = '20px'
    li.style.padding = '5px 0'
    if (type === 'group') {
        li.style.backgroundColor = '#aaa'
        li.style.fontWeight = 'bold'
        li.style.textIndent = '0.5em'
        li.innerText = title
    } else if (item.type === 'buddy') {
        li.style.textIndent = '1em'
        li.innerText = `${displayName} (${username})`
    } else {
        alert('wtf type: ' + type)
    }
    lis.push(li)
})

document.body.innerHTML = ''
document.body.style.textAlign = 'center'
const title = document.createElement('h1')
title.innerText = 'AIM List'
document.body.appendChild(title)
const div = document.createElement('div')
div.style.textAlign = 'left'
div.style.margin = '20px 40px'
const ul = document.createElement('ul')
ul.style.listStyleType = 'none'
ul.style.borderTop = borderStyle
lis.forEach(li => ul.appendChild(li))
div.appendChild(ul)
document.body.appendChild(div)
