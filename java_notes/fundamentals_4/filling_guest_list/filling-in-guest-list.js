const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

// refused.textContent += ;
// admitted.textContent += ;

for (const guest of people) {
    if (guest == "Phil" || guest == "Lola") {
        refused.textContent += `${guest}, `;
    } else {
        admitted.textContent += `${guest}, `;
    }
}

refused.textContent = refused.textContent.slice(0, -2) + ".";
admitted.textContent = admitted.textContent.slice(0, -2) + ".";
