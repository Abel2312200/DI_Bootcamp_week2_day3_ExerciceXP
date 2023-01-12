// Exercice 1

const people = ["Greg", "Mary", "Devon", "James"];

    // Part I

        // Question 1 : removing of "Greg" from people array
        people.shift();

        // Question 2 : replacing of "James" to "Jason"
        people.splice(2,1,'Jason');

        // Question 3 : adding my name to the end of people array
        people.push("Ngbandaman");

        // Question 4 : displaying Mary's index
        people.indexOf("Mary");

        // Question 5 : people copy (without Mary and my name)
        let copyPeople = people.slice(1,3);

        // Question 6 : code giving the index of 'Foo'
        let fooIndex = people.indexOf('Foo'); // It returns -1 because Foo  isn't an element of people array

        // Question 7 : creation of last variable
        let last = people[people.length-1];
    
    // Part II

        // Question 1 : displaying of people's array elements
        for(let person of people){
            console.log(person+"\n");
        }

        // Question 2 : iteration of people array and exiting after "Jason"
        for(let person of people){
            console.log(person+"\n");
            if(person==="Jason"){
                break; // out to array
            }
        }


// Exercice 2

        // Question 1 : array creation of  my five favorite colors
        const colors = ["white","black","blue","yellow","pink"];

        // Question 2 : displaying array values like that "My #1 choice is blue"
        for(let color of colors){
            console.log(`My #${colors.indexOf(color)+1} is ${color} \n`);
        }

        // Question 3 : displaying array values like that "My 1st choice is blue"
        for(let color of colors){
            switch(colors.indexOf(color)){
                case 0:
                    console.log(`My ${colors.indexOf(color)+1}st is ${color} \n`);
                    continue;
                case 1:
                    console.log(`My ${colors.indexOf(color)+1}nd is ${color} \n`);
                    continue;
                case 2:
                    console.log(`My ${colors.indexOf(color)+1}rd is ${color} \n`);
                    continue;
                default:
                    console.log(`My ${colors.indexOf(color)+1}th is ${color} \n`);          
            }
        }


// Exercice 3

        // Question 1 :  Prompting the user for a number
        let userNumber = prompt('Please, tap a number');
        console.log(typeof(userNumber)); // type checking.

        // Question 2 :
        while(userNumber<10){
            let userNumber = prompt('Please, tap a number');
            if(userNumber >= 10)
                break;
        }
        // do .. while loop is more relevant for this situation


// Exercice 4

        // Question 1 : Copying and pasting the oject to my file
        const building = {
            numberOfFloors: 4,
            numberOfAptByFloor: {
                firstFloor: 3,
                secondFloor: 4,
                thirdFloor: 9,
                fourthFloor: 2,
            },
            nameOfTenants: ["Sarah", "Dan", "David"],
            numberOfRoomsAndRent:  {
                sarah: [3, 990],
                dan:  [4, 1000],
                david: [1, 500],
            },
        }

        // Question 2 : displaying of number of floors
        console.log(`Number of floors : ${building.numberOfFloors}`);

        // Question 3 : displaying of number of apartements on the floors 1 and 3
        console.log(`Apartement number on floor 1 : ${building.numberOfAptByFloor.firstFloor}`); // apartement on floor 1
        console.log(`Apartement number on floor 3 : ${building.numberOfAptByFloor.thirdFloor}`); // apartement on floor 2

        // Question 4 : displaying the name of second tenant and number of rooms in apartement has 
        let nameSecondTenant = building.nameOfTenants[1];
        console.log(`name of second tenant : ${nameSecondTenant}`); // output : dan
        console.log(`rooms number of second tenant : ${building.numberOfRoomsAndRent.dan[0]}`); // output :  4

        // Question 5 : sum Sarah's and David's rent compare to Dan's
        let sumSamDavidRent =  building.numberOfRoomsAndRent.sarah[1] +  building.numberOfRoomsAndRent.david[1];
        if(sumSamDavidRent > building.numberOfRoomsAndRent.dan[1] ){
            building.numberOfRoomsAndRent.dan[1]=1200;
            console.log(`New Dan's rent : ${building.numberOfRoomsAndRent.dan[1]=1200}`);
        }

    
// Exercice 5

        // Question 1
        const family = {
            pere: "Isaac",
            mere: "Adjoua",
            fils: "Abel",
            fille: "Rita"
        }

        // Question 2 : displaying of keys
        for(const key in family){
            console.log(`${key}`);
        }

        // Question 3 : displaying of keys
        for(const key in family){
            console.log(`${family[key]}`);
        }


// Exercice 6

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

        // Question 1: displaying keys and values
        for(const key in details){
            console.log(`${key} ${details[key]}`);
        }


// Exercice 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

        let nameInitialArray = []; // array for names initials

        // picking up of names initials
        for(let member of names){
            nameInitialArray.push(member.charAt(0));
        }

        // sort array of names initials
        nameInitialArray.sort();

        // conversion array to string
        let nameSocietySecret = nameInitialArray.join("").toString();

        // displaying of name of society secret
        console.log(nameSocietySecret);
