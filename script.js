'use strict'
const toggle = document.querySelector('.toggle')
const dashBoard = document.querySelector('header h2')
const overView = document.querySelector('.bottom-container .container>h2')
const body = document.querySelector('body')
const dot = document.querySelector('.dot')
const mode = document.querySelector('.mode')
const topNumbers = document.querySelectorAll('.top-container h1')
const bottomNumbers = document.querySelectorAll('.bottom-container .flex-sb h3')
const cards = document.querySelectorAll('.card')
const cardBorders = document.querySelectorAll('.grid > div')
const changeMode =  function(){
    document.querySelector('.mode p').style.color = 'hsl(0, 0%, 100%)'
    document.querySelector('.mode p').textContent = 'Light Mode'
    toggle.classList.add('toggle-dark-bg')
    dashBoard.style.color = ' hsl(0, 0%, 100%)'
    overView.style.color = ' hsl(0, 0%, 100%)'
    dot.style.marginLeft = 0
    body.style.backgroundColor = 'hsl(230, 17%, 14%)'
    mode.style.borderTopColor = 'hsl(228, 28%, 20%)'
    for(const card of cards){
        card.style.backgroundColor ='hsl(228, 28%, 20%)'
        card.addEventListener('mouseover', function(){
            card.style.backgroundColor =' hsl(230, 22%, 74%)'
        })
        card.addEventListener('mouseout', function(){
            card.style.backgroundColor ='hsl(228, 28%, 20%)'
        })
    }
    for(const number of bottomNumbers){
        number.style.color = ' hsl(0, 0%, 100%)'
    }
    for(const number of topNumbers){
        number.style.color = ' hsl(0, 0%, 100%)'
    }
    for(const border of cardBorders){
        border.style.borderColor = 'hsl(230, 17%, 14%)'
    }
    toggle.addEventListener('click', function(){
        document.querySelector('.mode p').style.color = 'hsl(228, 12%, 44%)'
        document.querySelector('.mode p').textContent = 'Dark Mode'
    toggle.classList.remove('toggle-dark-bg')
    dashBoard.style.color = ' initial'
    overView.style.color = ' hsl(0, 0%, 100%)'
    dot.style.marginLeft = 'auto'
    body.style.backgroundColor = 'initial'
    mode.style.borderTopColor = 'initial'
    for(const card of cards){
        card.style.backgroundColor ='hsl(227, 47%, 96%)'
        card.addEventListener('mouseover', function(){
            card.style.backgroundColor =' hsl(230, 22%, 74%)'
        })
        card.addEventListener('mouseout', function(){
            card.style.backgroundColor ='hsl(227, 47%, 96%)'
        })
    }
    for(const number of bottomNumbers){
        number.style.color = 'initial'
    }
    for(const number of topNumbers){
        number.style.color = 'initial'
    }
    for(const border of cardBorders){
        border.style.borderColor = 'hsl(0, 0%, 100%)'
    }
    toggle.addEventListener('click', function(){
        changeMode()
    })
    })
}
toggle.addEventListener('click', changeMode)