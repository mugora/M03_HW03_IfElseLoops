let animals = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(let i = 0; i<animals.length; i++){
    if(animals[i]=="cat"){
        document.write("<p>I am a cat</p>");

    }
    else if(animals[i] =="dog"){
        document.write("<p>borf borf</p>");
    }
    else{
        document.write("<p>I'm an animal</p>");
    }
}

function shuffleAnimalNames() {
    let animals = ["dog", "fish", "car", "shark", "cat", "dog"];
    let animals_new = animals.sort(() => Math.random() - 0.5);

    for (let i = 0; i < animals_new.length; i++) {
        if (animals_new[i] == "cat") {
            document.write("<p>I am a cat</p>");

        } else if (animals_new[i] == "dog") {
            document.write("<p>borf borf</p>");
        } else {
            document.write("<p>I'm an animal</p>");
        }
    }

}

