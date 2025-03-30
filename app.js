function showMenu(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'block'
}

function hideMenu(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// Donations alert msg

function showDonate (){
    const modal = document.querySelector(`.modal`)
    modal.style.display =`block`
}

function hideDonate (){
    const modal = document.querySelector(`.modal`)
    modal.style.display =`none`
}