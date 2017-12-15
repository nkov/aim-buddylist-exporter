els = document.getElementsByClassName('aimlist-item')

const items = []
const itemHash = {}
let intervalId

const grabItems = () => {
    for (let i = 0; i < els.length; ++i) {
        const { id, title, textContent, tagName } = els[i]

        if (itemHash[id]) continue

        let item
        if (tagName === 'H2') {
            item = { id, title, type: 'group' }
        } else if (tagName === 'DIV') {
            item = { id, username: title, displayName: textContent, type: 'buddy' }
        } else {
            console.warn(`Warning! Unknown tagname encountered: (id: ${id}, tagName: ${tagName})`)
        }
        items.push(item)
        itemHash[id] = true
    }
}
const done = () => {
    clearInterval(intevalId)
    console.log(`Done! ${items.length} items saved!`)
}

intervalId = setInterval(grabItems, 100)
console.log('Ready to log, start scrolling slowly now')
