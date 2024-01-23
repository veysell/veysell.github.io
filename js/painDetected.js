document.getElementById('humanBody').addEventListener('click', function (event) {
    var x = (event.clientX - this.getBoundingClientRect().left) / this.clientWidth * 100;
    var y = (event.clientY - this.getBoundingClientRect().top) / this.clientHeight * 100;
  
    var selectedDisease = "";
    
    if (x >= 40 && x <= 50 && y >= 20 && y <= 30) {
      selectedDisease = "Göz Hastalıkları";
    } else if (x >= 55 && x <= 65 && y >= 10 && y <= 20) {
      selectedDisease = "Boşaltım Sistemi Hastalıkları";
    } else {
      hideResult();
      return;
    }
  
    askQuestions(decisionTree[selectedDisease]);
  });
  
  function askQuestions(node) {
    var question = Object.keys(node)[0];
    var answers = node[question];
  
    var userAnswer = prompt(question + " (Evet/Hayır)").toLowerCase();
    console.log(userAnswer);
    if (answers[userAnswer]) {
      if (typeof answers[userAnswer] === 'string') {
        displayResult(answers[userAnswer], 'Description of ' + answers[userAnswer] + '...', []);
      } else {
        askQuestions(answers[userAnswer]);
      }
    } else {
      hideResult();
    }
  }
  
  function displayResult(title, description, symptoms) {
    // Display the result on the right side
    var resultContent = document.getElementById('resultContent');
    resultContent.innerHTML = `
        <h4>${title}</h4>
        <p>${description}</p>
    `;

    if (symptoms && symptoms.length > 0) {
        // Display symptoms dynamically in the form
        var symptomForm = document.getElementById('symptomForm');
        symptomForm.innerHTML = ''; // Clear previous content

        symptoms.forEach(function (symptom, index) {
            // Generate unique ID for each symptom
            var symptomId = index.toString();
            symptomIds[symptom] = symptomId;

            var checkbox = document.createElement('div');
            checkbox.className = 'form-check';
            checkbox.innerHTML = `
                <input class="form-check-input" type="checkbox" value="${symptom}" id="${symptomId}">
                <label class="form-check-label" for="${symptomId}">${symptom}</label>
            `;
            symptomForm.appendChild(checkbox);
        });
    }

    // resultContent'i görünür yap
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('symptoms').style.display = 'block';

    // Hide all painInfo elements
    hideAllPainInfo();
}

function hideResult() {
    // Hide the result on the right side
    document.getElementById('resultContainer').style.display = 'none';

    // Hide all painInfo elements
    hideAllPainInfo();
}

function hideAllPainInfo() {
    // Hide all painInfo elements
    var painInfos = document.getElementsByClassName('painInfo');
    for (var i = 0; i < painInfos.length; i++) {
        painInfos[i].style.display = 'none';
    }
}

  