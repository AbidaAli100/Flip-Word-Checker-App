function palindromeChecker() {
    let input = document.querySelector("input").value;


    let length = input.length;
    for (i = 0; i < length / 2; i++) {

    }
    if (input[i] == input[length - 1 - i]) {
        document.querySelector('span').innerHTML = "Oh Yes, Given word is a Palidrome";
    } else {
        document.querySelector('span').innerHTML = "NO, Given word is not a Palidrome";
    }
}