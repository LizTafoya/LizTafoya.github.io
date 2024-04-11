var translations = {
    "es": {
      "title": "Traductor",
      "description": "Cambio de idioma."
    },
    "en": {
      "title": "Translator",
      "description": "Language change."
    },
    "fr": {
      "title": "Traducteur",
      "description": "Changement de langue."
    },
    "de": {
      "title": "Übersetzer",
      "description": "Sprachwechsel."
    },
    "zh": {
      "title": "翻译 ",
      "description": "语言更改 ."
    },
    "ar": {
        "title": "مترجم",
        "description": "تغيير اللغة."
      }
  };
  
 
  document.getElementById("español").addEventListener("click", function() {
    changeLanguage("es");
  });
  
 
  document.getElementById("ingles").addEventListener("click", function() {
    changeLanguage("en");
  });
  
 
  document.getElementById("frances").addEventListener("click", function() {
    changeLanguage("fr");
  });
  

  document.getElementById("aleman").addEventListener("click", function() {
    changeLanguage("de");
  });
  
  
  document.getElementById("chino").addEventListener("click", function() {
    changeLanguage("zh");
  });
 
  document.getElementById("arabe").addEventListener("click", function() {
    changeLanguage("ar");
  });
  

  function changeLanguage(language) {
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("description").textContent = translations[language].description;
  }
