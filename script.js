document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const spacingSlider = document.getElementById("spacingSlider");
    const widthSlider = document.getElementById("widthSlider");
    const heightSlider = document.getElementById("heightSlider");

    textInput.addEventListener("input", updateOutputText);
    spacingSlider.addEventListener("input", updateOutputText);
    widthSlider.addEventListener("input", updateOutputText);
    heightSlider.addEventListener("input", updateOutputText);

    function updateOutputText() {
        const inputText = textInput.value;
        const lines = inputText.split("\n");
        const line1 = lines[0] || "";
        const line2 = lines[1] || "";

        const outputBox1 = document.getElementById("outputBox1");
        const outputBox2 = document.getElementById("outputBox2");

        outputBox1.innerHTML = `<span class="large-text">${line1}</span>`;
        outputBox2.innerHTML = `<span class="skewed-text">${line2}</span>`;

        const spacingValue = spacingSlider.value;
        const widthValue = widthSlider.value;
        const heightValue = heightSlider.value;

        const scaleX = widthValue / 400;
        const scaleY = heightValue / 200;

        outputBox1.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
        outputBox2.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;

        outputBox1.style.letterSpacing = spacingValue + "px";
        outputBox2.style.letterSpacing = spacingValue + "px";

        // Calculate margin to close the gap between the boxes
        const boxMargin = heightValue - 200;
        outputBox2.style.marginTop = boxMargin + "px";
    }

    updateOutputText();
});
