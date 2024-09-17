const input = document.querySelector('#fruit');
const suggestions =
 document.querySelector('.suggestions ul');






const fruit = ['Apple', 'Apricot', 'Avocado >Q', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// searchInput.addEventListener("input", e => { 
// 	const value = e.target.value.toLowerCase()
// 	users.forEach(user =>{
// 		const isVisible = 
// 		user.fruit.toLowerCase().includes(value)
// 	})
// 	console.log(value)
// })

// let users = []


// .then(fruit => {
// 	user = fruit.map(user ={})
// })




// fruit.addEventListener('click', e=> {
// console.log(e)
// })
// document.dispatchEvent(fruit)
// }



function search(str) {
    let results =[];
    const val = str.toLowerCase();
//syntax error/type ',' should be <
    for (i = 0; i< fruit.length; i++){
        if (fruit[i].toLowerCase().indexOf(val) > -1){
            results.push(fruit[i]);
        }
    }
	

	return results;
}

function searchHandler(e) {
    e.preventDefault();

    //inputVal can just = input.value since it's defined above
    const inputVal = input.value;
    let results = [];
    if (inputVal.length > 0) {
        //maybe update to inputVal.toLowercase() so input case doesn't matter
        results = search(inputVal.toLowerCase());
    }
    //typo, update inputval to inputVal
    showSuggestions(results, inputVal);
}


function showSuggestions(results, inputVal) {
    suggestions.innerHTML ='';
    if (results.length > 0) {
        for (i = 0; i < results.length; i++){
            let item = results[i];
            const match = item.match(new
                RegExp(inputVal, 'i'));
                item = item.replace(match[0],
                    `<strong>${match[0]}</strong>`);
                    suggestions.innerHTML += `<li>${item}
                    </li>`;
                }
                suggestions.classList.add('has-suggestions');
            }else{
                results =[];
                suggestions.innerHTML = '';
                suggestions.classList.remove('has-suggestions');
            }
    }




function useSuggestion(e) {
    e.preventDefault();

    input.value =e.target.innerHTML;
    input.focus();
    suggestions.innerHTML = '';
   //suggestions.classList.remove('has-suggestions');
	

}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);