const ps = document.querySelectorAll('p')

ps.forEach(item => {
    if(item.textContent.toLowerCase().includes('js')) {
        item.remove()
    }
})