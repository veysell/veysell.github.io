var symptomIds = {};
var currentQuestionNode = null;

document.getElementById('humanBody').addEventListener('click', function (event) {
  var x = (event.clientX - this.getBoundingClientRect().left) / this.clientWidth * 100;
  var y = (event.clientY - this.getBoundingClientRect().top) / this.clientHeight * 100;
  console.log(x + "--" + y);
  var selectedDisease = "";

  if ((x >= 40 && x <= 45 && y >= 20 && y <= 25) || (x >= 55 && x <= 62 && y >= 20 && y <= 25)) {
    hideResult();
    selectedDisease = "Göz Hastalıkları";
    document.getElementById('titleArea').style.display='none';
  } else if (x >= 40 && x <= 60 && y >= 55 && y <= 65) {
    hideResult();
    selectedDisease = "Boşaltım Sistemi Hastalıkları";
    document.getElementById('titleArea').style.display='none';
  }
  else if ((x >= 30 && x <= 35 && y >= 22 && y <= 28) || (x >= 67 && x <= 73 && y >= 22 && y <= 28)
    || (x >= 47 && x <= 49 && y >= 26 && y <= 29) || (x >= 39 && x <= 61 && y >= 37 && y <= 47)) {
    hideResult();
    selectedDisease = "Kulak Burun Boğaz Hastalıkları";
    document.getElementById('titleArea').style.display='none';
  }
  else {
    hideResult();
    return;
  }

  currentQuestionNode = decisionTree[selectedDisease];
  askCurrentQuestion();
});

function askCurrentQuestion() {
  var question = Object.keys(currentQuestionNode)[0];
  var questionText = document.getElementById('questionText');
  questionText.innerText = question;

  // Show the question container
  document.getElementById('questionContainer').style.display = 'block';
}

function answerQuestion(userAnswer) {
  // Hide the question container
  document.getElementById('questionContainer').style.display = 'none';

  var answers = currentQuestionNode[Object.keys(currentQuestionNode)[0]];

  if (answers[userAnswer]) {
    if (typeof answers[userAnswer] === 'string') {
      Swal.fire({
        title: answers[userAnswer],
        text: 'Lütfen en doğru sonuç için Hekiminize başvurunuz... Geçmiş Olsun',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "Kapat",
        confirmButtonText: 'MHRS Sistemine Gitmek İstiyorum'
      }).then(function (result) {
        if (result.isConfirmed) {
          location.assign("https://mhrs.gov.tr/vatandas/")
        }
      });
      //displayResult(answers[userAnswer], 'Description of ' + answers[userAnswer] + '...', []);
    } else {
      currentQuestionNode = answers[userAnswer];
      askCurrentQuestion();
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
  document.getElementById('questionContainer').style.display = 'none';
  document.getElementById('titleArea').style.display='block';
  // Hide all painInfo elements
  hideAllPainInfo();
}

function hideAllPainInfo() {
  // Hide all painInfo elements
  var painInfos = document.getElementsByClassName('painInfo');
  for (var i = 0; i < painInfos.length; i++) {
    painInfos[i].style.display = 'none';
  }
  document.getElementById('titleArea').style.display='block';
}

function getSelectedSymptoms() {
  var symptoms = [];
  var checkboxes = document.querySelectorAll('#symptomForm input[type="checkbox"]:checked');
  checkboxes.forEach(function (checkbox) {
    symptoms.push({
      id: symptomIds[checkbox.value],
      name: checkbox.value
    });
  });

  // Display selected symptoms in the result container
  var symptomsText = symptoms.length > 0 ? symptoms.map(symptom => `${symptom.name} (ID: ${symptom.id})`).join(', ') : 'Belirtiler seçilmedi.';
  displayResult('Seçilen Belirtiler', symptomsText, symptoms);
  document.getElementById('symptoms').style.display = 'none';
}