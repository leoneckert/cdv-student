function draw() {
    //get the input and canvas
    let noSquares = document.getElementById("noSquares").value;
    const canvas = document.getElementById('c');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //calculate the height of the canvas
    const squaresPerLine = Math.floor((canvas.width-65) / 65);
    const noLines = Math.floor(noSquares/squaresPerLine);
    if (70*noLines > window.innerHeight){
        canvas.height = 70*noLines;
    }
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        //i= column, j = row
        let i = 0;
        let j = 0;
        while (i < noSquares) {
            //calculate a random color
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
            ctx.fillRect(65*i, 10+(70*j), 50, 50); // create one square
            i++;
            // starts a new line of squares if the ith square wouldn't fit, avoids nested for loops
            if (i*65 > canvas.width-65){
                noSquares = noSquares-i;
                j++;
                i=0;
            }
        }
    }
}