//Example fetch using DnD5eAPI - place subclasses in ul

/* function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data)
       document.querySelector('h2').innerText = data.name;
       document.querySelector('h3').innerText = data.classes[0].name
       data.subclasses.forEach(obj => {
        document.querySelector('ul').innerHTML += `<li>${obj.name}</li>`
       }); 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
} */

let option1 = document.querySelector('#option1').innerText

class Warrior{
    constructor(name, weapon){
        this.level = 1;
        this.health = 100;
        this.name = name;
        this.weapon = weapon;
        this.stats = {
            constitution: 10,
            strength: 5,
            intelligence : 1,
            dexterity : 2,
            exp: 0
        }

    }
    takeDamage(num){
        this.health -= num;
    }
    levelUp(stat){
        this.level += 1;
        switch(stat){
            case 'constitution':
                this.stats.constitution += 1
                this.health = 10 * this.stats.constitution
                break
            case 'strength':
                this.stats.strength += 1;
                break;
            case 'intelligence':
                this.stats.intelligence += 1;
                break;
            case 'dexterity':
                this.stats.dexterity += 1
                break;
        }
    }
}

/* Store information in local storage to allow user to continue session when they close browser  */
let choices = document.querySelectorAll('.btn')
if(localStorage.getItem('user_id') === null){
    localStorage.setItem('user_id', Math.round(Math.random() *100000 ))
}

choices = Array.from(choices)

choices.forEach(btn => {
    btn.addEventListener('click', makeChar)

})

function makeChar(btn){
    let choice = this.innerText
    console.log(choice)
    switch(choice){
        case 'Warrior':
            let player = new Warrior('John', 'Axe')
            player = JSON.stringify(player)
            localStorage.setItem('char', player)
                    
    }
}