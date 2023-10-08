let selectedLanguage = 'en'
function languageSelector(lang){
    selectedLanguage = lang;
    console.log('Selected Lang:', lang)
    let langClass = selectedLanguage === "en" ? "en" : "es";
const translateElements = document.querySelectorAll(".translate");
    translateElements.forEach((element) => {
      element.classList.remove("active");
    });
  
  const selectedLanguageElements = document.querySelectorAll(`.${langClass}`);
  selectedLanguageElements.forEach((element) => {
    element.classList.add("active");
    });
}

const languageSelectorEn = document.getElementById("lang-en");
// Check if the element was found
if (languageSelectorEn) {
    // Add a click event listener to the anchor element
    languageSelectorEn.addEventListener("click", () => languageSelector('en'));
}

const languageSelectorEs = document.getElementById("lang-es");
// Check if the element was found
if (languageSelectorEs) {
    // Add a click event listener to the anchor element
    languageSelectorEs.addEventListener("click", () => languageSelector('es'));



}