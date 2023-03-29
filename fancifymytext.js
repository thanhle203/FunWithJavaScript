function bigger() {

    // Font size is increased to 24pt aka 2em

    document.getElementById("inputText").style.fontSize="2em";

    // Check which radio button is selected.

    // If FancyShmancy is checked then change the styles in text area.

    if(document.getElementById('fancy').checked==true) {

        // Set font weight to bold

        document.getElementById("inputText").style.fontWeight="bold";

        document.getElementById("inputText").style.color="blue";

        document.getElementById("inputText").style.textDecoration="underline";

    }

    // If BoringBetty is checked then font weight should go back to normal.

    if(document.getElementById('boring').checked==true) {

        // Remove font weight

        document.getElementById("inputText").style.fontWeight="normal";

    }

}

function moo() {

    // Change the text to uppercase.

    let str=document.getElementById("inputText").value;

    let strUppercase=str.toUpperCase();

    // Add a suffix -Moo to the last word of each sentence.

    // Consider that the sentence ends with a period character ".".

    let parts=strUppercase.split(".");

    let result=parts.join("-Moo.");

    document.getElementById("inputText").value=result;

}
