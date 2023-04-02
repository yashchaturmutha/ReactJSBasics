const animals = [{
    name: "cat",
    sound: "meow",

    feeding:{
      food:10,
      water:20
    }
  },
  {
    name: "dog",
    sound: "woof",

    feeding:{
      food:30,
      water:40
    }
  }
];

function useanimal(animal)
{
  return[
    animal.name,animal.sound
    // function()
    // {
    //   return(
    //      animal.sound);
    // }
  ]
}
export default animals;
export {useanimal};