document.addEventListener('DOMContentLoaded', function () {
    let isDarkMode = false;
    let darkModeButtonText = 'Turn Light';
    let lightModeButtonText = 'Turn Dark';
    let cssDarkModeColor = "black";
    let cssLightModeColor = "white";
    
    const toggleButton = document.getElementById('mode-toggle');
    toggleButton.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        
        let activeText = isDarkMode ? darkModeButtonText : lightModeButtonText; 
        toggleButton.innerHTML = activeText;
        
        let activeBackgroundColor = isDarkMode ? cssDarkModeColor : cssLightModeColor;
        document.getElementById('button-page').style.backgroundColor = activeBackgroundColor;        
    });
});
