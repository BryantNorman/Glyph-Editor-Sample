document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const outputText1 = document.getElementById("outputText1");
    const spacingSlider = document.getElementById("spacingSlider");
    const widthSlider = document.getElementById("widthSlider");
    const heightSlider = document.getElementById("heightSlider");

    textInput.addEventListener("input", updateOutputText);
    spacingSlider.addEventListener("input", updateOutputText);
    widthSlider.addEventListener("input", updateOutputText);
    heightSlider.addEventListener("input", updateOutputText);

    function updateOutputText() {
        const inputValue = textInput.value;
        const spacingValue = spacingSlider.value;
        const widthValue = widthSlider.value;
        const heightValue = heightSlider.value;

        const scaleX = widthValue / 400;
        const scaleY = heightValue / 200;

        outputText1.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;

        outputText1.textContent = inputValue.replace(/./g, (char) => {
            return char + "\u200A".repeat(spacingValue);
        });
    }
});
