const inputs = document.querySelectorAll('.controls input')

function handleInputChange() {
    const suffix = this.dataset.sizing || '' /* Gets the 'px' value from data-sizing property in input. 'dataset' gets all 'data-' properties as one object. */
    
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`) /* Changes variable value in CSS. Could also update a variable in a HTML tag as 'style="--base: #whatever"' and it will trump the CSS. */
}

inputs.forEach(elm => elm.addEventListener('change', handleInputChange));

inputs.forEach(elm => elm.addEventListener('mousemove', handleInputChange));