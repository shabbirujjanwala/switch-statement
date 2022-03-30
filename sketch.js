var input, heading;


function setup() {
  createCanvas(400, 400);
  background(178, 255, 102);
  input = createInput();
  input.position(120, 160);

  heading = createElement('h4', 'Enter Any Alphabet');
  heading.position(130, 140);
  textAlign(CENTER);
  textSize(50);
}

function draw() {
  var value = input.value();

  switch (value) {

    case 'a':
      console.log("Vowel");
      break;

    case 'e':
      console.log("Vowel");
      break;

    case 'i':
      console.log("Vowel");
      break;

    case 'o':
      console.log("Vowel");
      break;

    case 'u':
      console.log("Vowel");
      break;

       default:
         console.log("enter any Alphabet other ")
  }

}

