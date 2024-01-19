document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const outputText1 = document.getElementById("outputText1");
    const spacingSlider = document.getElementById("spacingSlider");
    const widthSlider = document.getElementById("widthSlider");

    textInput.addEventListener("input", updateOutputText);
    spacingSlider.addEventListener("input", updateOutputText);
    widthSlider.addEventListener("input", updateOutputText);

    function updateOutputText() {
        const inputValue = textInput.value;
        const spacingValue = spacingSlider.value;

        const textWidth = inputValue.length * 20;

        outputText1.style.width = textWidth + "px";

        const widthValue = widthSlider.value;
        const scale = widthValue / 400;
        outputText1.style.transform = `scaleX(${scale})`;

        outputText1.textContent = inputValue.replace(/./g, (char) => {
            return char + "\u200A".repeat(spacingValue);
        });
    }
});
