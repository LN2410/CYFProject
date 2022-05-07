var name2, name_count;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}

// Describe this function...
function count() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_text = document.getElementById('text');
  if (getNumberOrString(document.getElementById('text').value) != '') {
    name_count = (typeof name_count === 'number' ? name_count : 0) + 1;
    let element_people_count = document.getElementById('people_count');
    element_people_count.innerText = name_count;
  }
}


name2 = '';
name_count = 0;


document.getElementById('button').addEventListener('click', (event) => {
  document.getElementById("greeting").style.display = "block"
  name2 = getNumberOrString(document.getElementById('text').value);
  let element_greetedName = document.getElementById('greetedName');
  element_greetedName.innerText = name2;
  count();
});
'';
