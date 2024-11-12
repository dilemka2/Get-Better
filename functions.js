
//Choose the word in first mode
function randomW(NumAn) {
    let randomL = Math.floor(Math.random() * A.length); 
    let selectedWord = A[randomL][0];
    let correctTranslation = A[randomL][1];
    CorrectWord = correctTranslation; //  Updating the global variable
    // Setting the display word
    PWord.innerText = selectedWord;
    
    // Array for answers
    let answers = [];
    let correctAnswerPosition = Math.floor(Math.random() * NumAn);

    for (let i = 0; i < NumAn; i++) {
        if (i === correctAnswerPosition) {
            answers[i] = correctTranslation;
        } else {
            let randomAnswer;
            let attempt = 0;
            do {
                randomAnswer = A[Math.floor(Math.random() * A.length)][1];
                attempt++;
                if (attempt > 50) break; // avoiding endless cycles
            } while (randomAnswer === correctTranslation || answers.includes(randomAnswer)); // Avoiding repetitions

            answers[i] = randomAnswer;
        }
    }

    // Showing on the screen
    for (let i = 0; i < answers.length; i++) {
        const label = document.querySelector(`label[for="radio${i + 1}"]`);
        if (label) {
            label.innerText = answers[i];
        }
    }
}



// Checking the choosed word in first mode
function checkChooseW() {
    const radios = document.querySelectorAll('.radio'); 
    let selectedValue = null;
    globaltries++;
    for (let radio of radios) {
        if (radio.checked) {
            selectedValue = radio.nextElementSibling.innerText; 
            break;
        }
    }
    if (selectedValue === CorrectWord) {
        rightaudio.play();
        points += 1;
        globalrightanswers++;
        pointP.innerHTML = 'Очків:' + `<br>` + points; 
        randomW(NumUn);    
    } else {
        wrongAnswer.play();
        alert("Спробуйте ще раз!"); 
        points -= 1;
        globalmistakes++;
        pointP.innerHTML = 'Очків:' + `<br>` + points; 
    }
}

// Moving to menu
function turnChoosemenu() {
    startB.style.display = 'none';
    menuB.style.display = 'block';
};

// Moving to first test
function turnChooseW() {
    if (A.length < 3) {
        notenoughB.style.display = 'block';
    } else {
        choosetheDificult.style.display = 'block';
        hardLVL.style.backgroundColor = ''; 
        mediumLVL.style.backgroundColor = '';

        if (A.length < 5) {
            hardLVL.style.backgroundColor = 'rgb(135 36 18 / 87%)';
            mediumLVL.style.backgroundColor = 'rgb(169 100 37 / 55%)';
        } 
        if (A.length >= 5 && A.length <= 8) {
            mediumLVL.style.backgroundColor = 'rgb(218, 129, 46)';
            hardLVL.style.backgroundColor = 'rgb(135 36 18 / 87%)';
        }
        if (A.length > 8) {
            hardLVL.style.backgroundColor = 'rgb(218, 72, 46)';
            mediumLVL.style.backgroundColor = 'rgb(218, 129, 46)'; 
        }

        menuB.style.display = 'none';
    }
}



// Creating a checkbox with a label
function createCheckboxWithLabel(id) {
    const inpline = document.createElement('div');
    inpline.classList.add('inpline');

    const checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.id = id;
    checkbox.name = 'radio';
    checkbox.classList.add('radio');

    const label = document.createElement('label');
    label.htmlFor = id;
    label.classList.add('ans', 'ans' + id);

    inpline.appendChild(checkbox);
    inpline.appendChild(label);

    document.querySelector('.testBlock').appendChild(inpline);
}

easyLVL.addEventListener('click', function() {
    document.querySelector('.testBlock').innerHTML = ''; 
    for (let i = 0; i < 4; i++) {
        createCheckboxWithLabel(`radio${i + 1}`);
    }
    ChooseB.style.display = 'block';
    choosetheDificult.style.display = 'none';
    randomW(4); 
    NumUn = 4;
});

mediumLVL.addEventListener('click', function() {
    if (A.length < 5) {
        alert("Недостатньо слів!"); 
    }
   else {
    document.querySelector('.testBlock').innerHTML = ''; 
    for (let i = 0; i < 5; i++) {
        createCheckboxWithLabel(`radio${i + 1}`);
    }
    ChooseB.style.display = 'block';
    choosetheDificult.style.display = 'none';
    randomW(5); 
    NumUn = 5;
    ChooseB.style.height = '865px';
   }
});

hardLVL.addEventListener('click', function() {
    if (A.length < 8) {
        alert("Недостатньо слів!"); 
    }
    else {
        document.querySelector('.testBlock').innerHTML = ''; 
        for (let i = 0; i < 8; i++) {
            createCheckboxWithLabel(`radio${i + 1}`);
        }
        ChooseB.style.display = 'block';
        choosetheDificult.style.display = 'none';
        randomW(8); 
        NumUn = 8;
        ChooseB.style.height = '1090px'
    }
   
});


// Moving to block with information
infoBTN.addEventListener('click', function(){
    startB.style.display = 'none';
    infoB.style.display = 'block';
})

// When hovering, we add a background (function)
function addBg() {
    startB.style.backgroundPosition = '3px 0px';
};

// Moving back to menu
getmainBTN.addEventListener('click', function(){
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='none';
    startB.style.display = 'block';
    addWordBlock.style.display = 'none';
    globaltriesText.innerHTML = globaltries;
    globalmistakesText.innerHTML = globalmistakes;
    globalrightText.innerHTML = globalrightanswers;
    updateProgressBar();
});

getmain1BTN.addEventListener('click', function(){
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='none';
    startB.style.display = 'block';
    addWordBlock.style.display = 'none';
    globaltriesText.innerHTML = globaltries;
    globalmistakesText.innerHTML = globalmistakes;
    globalrightText.innerHTML = globalrightanswers;
    updateProgressBar();
});

getmain2BTN.addEventListener('click', function(){
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='block';
    startB.style.display = 'none';
    addWordBlock.style.display = 'none';
    globaltriesText.innerHTML = globaltries;
    globalmistakesText.innerHTML = globalmistakes;
    globalrightText.innerHTML = globalrightanswers;
    updateProgressBar();
})

getmain5BTN.addEventListener('click', function(){
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='block';
    startB.style.display = 'none';
    addWordBlock.style.display = 'none';
    TranslateTheword.style.display = 'none';
    globaltriesText.innerHTML = globaltries;
    globalmistakesText.innerHTML = globalmistakes;
    globalrightText.innerHTML = globalrightanswers;
    updateProgressBar();
})

getmain6BTN.addEventListener('click', function(){
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='block';
    startB.style.display = 'none';
    addWordBlock.style.display = 'none';
    TranslateTheword.style.display = 'none';
    Choosethewrong.style.display = 'none';
    addWordBlock.style.display = 'none';
    globaltriesText.innerHTML = globaltries;
    globalmistakesText.innerHTML = globalmistakes;
    globalrightText.innerHTML = globalrightanswers;
    updateProgressBar();
     
})

getmain7BTN.addEventListener('click', function(){
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='block';
    startB.style.display = 'none';
    addWordBlock.style.display = 'none';
    TranslateTheword.style.display = 'none';
    Choosethewrong.style.display = 'none';
    thirdTestBlock.style.display = 'none';
    addWordBlock.style.display = 'none';
    globaltriesText.innerHTML = globaltries;
    globalmistakesText.innerHTML = globalmistakes;
    globalrightText.innerHTML = globalrightanswers;
    updateProgressBar();
})

getmain8BTN.addEventListener('click', function(){
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='block';
    startB.style.display = 'none';
    addWordBlock.style.display = 'none';
    TranslateTheword.style.display = 'none';
    Choosethewrong.style.display = 'none';
    thirdTestBlock.style.display = 'none';
    addWordBlock.style.display = 'none';
    trainYourKnowlegeBlock.style.display = 'none';
    globaltriesText.innerHTML = globaltries;
    globalmistakesText.innerHTML = globalmistakes;
    globalrightText.innerHTML = globalrightanswers;
    updateProgressBar();
})
function updateProgressBar() {
    const totalAnswers = globaltries;
    const correctPortion = document.getElementById('correctPortion');
    const mistakePortion = document.getElementById('mistakePortion');

    // Check that the total number of responses is greater than zero to avoid division by zero
    if (totalAnswers > 0) {
        const correctPercentage = (globalrightanswers / totalAnswers) * 100;
        const mistakePercentage = (globalmistakes / totalAnswers) * 100;

        
        // Set the width for each part of the progress bar
        correctPortion.style.width = correctPercentage + '%';
        mistakePortion.style.width = mistakePercentage + '%';
    } else {
        // If there are no answers yet, set both parts to 0
        correctPortion.style.width = '0%';
        mistakePortion.style.width = '0%';
    }
}

removeNotenoughB.addEventListener('click', function(){
    notenoughB.style.display = 'none';
})


// Adding words to the array
addToA.addEventListener('click', function(){
    let RowArr = [];//one-dimensional array
    if (wordInput.value == '' || TranslatewordInput.value == '') {
        wrongAnswer.play();
    }
    else {
        let Word = wordInput.value;
        let Trans = TranslatewordInput.value; 
        A.push([wordInput.value, TranslatewordInput.value]);

        TR[d] = document.createElement('tr');
        table.appendChild(TR[d]);
        for (let x=0;x<2;x++) {
            TR[d][x] = document.createElement('td');
            TR[d].appendChild(TR[d][x]);
        }

        RowArr[0] = Word;
        RowArr[1] = Trans;

        TR[d][0].innerText = A[d][0];
        TR[d][1].innerText = A[d][1];
        d++;
        wordInput.value  = '';
        TranslatewordInput.value  = '';
    }
})


ok_del.addEventListener('click',function(){
    if (n_del.value == '') {
        wrongAnswer.play();
    }
    else {
        let k = Number(n_del.value)-1;
        deleteRow(TR,k);
        deleteRow(A,k);
        table.innerHTML = fillArray(A);
    }
});

// Filling the table
function fillArray(Arr) {
    let TXTTHML = "<table>";
    for(let k = 0;k<Arr.length;k++) {
        TXTTHML = TXTTHML + "<tr><td>" + Arr[k][0]+"</td>"+"<td>"+Arr[k][1]+"</td>"+"</tr>"
    }
    TXTTHML = TXTTHML+ "</table>";
    return(TXTTHML);

}
// The function to delete an element of the array
function deleteRow(table,d) {
    let removed = table.splice(d,1);
    return(table)
}

// Showing the questionnaire for adding a word
addbtn.addEventListener('click', function(){ 
    addWordBlock.style.display = 'block';
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='none';
    startB.style.display ='none';
});


addbtnNot.addEventListener('click', function(){ 
    addWordBlock.style.display = 'block';
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='none';
    startB.style.display ='none';
});


AddMeaning.addEventListener('click', function(){ 
    addWordBlock.style.display = 'block';
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='none';
    startB.style.display ='none';
    thirdTestBlock.style.display ='none'
});

// Showing the second mode
chooseBTNSecond.addEventListener('click', function(){
    if (A.length < 3) {
        notenoughB.style.display = 'block';
    } else {
    randomWSecond();
    TranslateTheword.style.display = 'block';
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='none';
    startB.style.display ='none';
    }
});

// Recreating the word in the second game
function randomWSecond() {
    let randomL = Math.floor(Math.random() * A.length);
    CorrectWord = A[randomL][0];
    
    // Checking if there is more than one word
    if (count_words(A[randomL][1]) > 1) {
        
        // Converting a string into an array of words
        let wordsArray = stringToMassiv(A[randomL][1]);
        console.log(wordsArray);
        
        // Selecting a random word from the array
        PwordSecond.innerText = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    } else {
        
        // If there is only one word, print it
        PwordSecond.innerText = A[randomL][1];
    }
};


// The button to finish adding words
finishaddingword.addEventListener('click', function(){
    addWordBlock.style.display = 'none';
    infoB.style.display = 'none';
    ChooseB.style.display ='none';
    menuB.style.display ='block';
    TranslateTheword.style.display = 'none'
    startB.style.display ='none';
    notenoughB.style.display = 'none';
})

// Checking the word of second mode
checkBTNsecond.addEventListener('click', function() {
    globaltries++;
    if (TranslateThewordInput.value == CorrectWord) {
        rightaudio.play();
        randomWSecond(); 
        pointsSecond += 1;
        globalrightanswers++;
        TranslateThewordInput.value = '';
        pointPSecond.innerHTML = 'Очків:' + `<br>` + pointsSecond;    
    } else {
        wrongAnswer.play();
        globalmistakes++;
        alert("Спробуйте ще раз!"); 
        pointsSecond -= 1;
        pointPSecond.innerHTML = 'Очків:' + `<br>` + pointsSecond; 
    }
});


let k;


// Counting word values
function count_words (phrase) { ;
	k=1;
	for (let i=0; i<phrase.length-1; i++) {
		if (phrase.substring(i, i+1) == ",") {
			k++;
		}			
	}
    return(k);
}

// The function converts a string into an array of words and returns this array
function stringToMassiv (phrase) { 
	let M = []; // Масив зі слів, перерахованих через кому в рядковому елементі(// An array of comma-separated words in a string element)
	let t=0; // індекс рядкового елемента, з якого починається слово(// The index of the string element that starts the word)
	let i=0; // індекс рядкового елемента, на якому закінчується слово(// The index of the string element at which the word ends)   
	let a;
	for (a=0; a<count_words(phrase); a++) {
		
			while (phrase[i]!="," && i<phrase.length-1) {
				i++;
			}
			i++;
			M[a] = phrase.substring(t,i);
			t=i+1; 
	}
	return(M);
}	
function randomWrong() {
    // Вибираємо випадковий елемент з масиву B
    const randomIndex = Math.floor(Math.random() * B.length);
    const selectedTranslations = B[randomIndex][1];
    PwordWrong.innerHTML = 'Який переклад слова '+B[randomIndex][0]+' не є правильним?';

    // Додаємо три випадкові варіанти з selectedTranslations
    let correctTranslations = [];
    if (new Set(selectedTranslations).size === 1) {
        // Якщо всі значення однакові
        correctTranslations = Array(3).fill(selectedTranslations[0]);
    } else {
        while (correctTranslations.length < 3) {
            const randomWord = selectedTranslations[Math.floor(Math.random() * selectedTranslations.length)];
            if (!correctTranslations.includes(randomWord)) {
                correctTranslations.push(randomWord);
            }
        }
    }

    // Вибираємо випадковий переклад з іншого масиву
    let otherIndex;
    do {
        otherIndex = Math.floor(Math.random() * B.length);
    } while (otherIndex === randomIndex);

    const incorrectTranslation = B[otherIndex][1][Math.floor(Math.random() * B[otherIndex][1].length)];

    // Перемішуємо варіанти і призначаємо їх кнопкам
    const options = [...correctTranslations, incorrectTranslation].sort(() => Math.random() - 0.5);
    button13.innerText = options[0];
    button23.innerText = options[1];
    button33.innerText = options[2];
    button43.innerText = options[3];

    // Повертаємо неправильний варіант для перевірки у обробниках подій
    return incorrectTranslation;
}



// Обробники подій для кнопок
button13.addEventListener('click', function() {
    globaltries++;
    if (button13.innerText === currentIncorrectTranslation) {
        rightaudio.play();
        pointsThird += 1;
        pointsThirdT.innerHTML = `Очків:<br>${pointsThird}`;
        currentIncorrectTranslation = randomWrong(); // Отримуємо новий неправильний переклад
        globalrightanswers++;
    } else {
        wrongAnswer.play();
        alert("Спробуйте ще раз!");
        pointsThird -= 1;
        globalmistakes++;
        pointsThirdT.innerHTML = `Очків:<br>${pointsThird}`;
    }
});

button23.addEventListener('click', function() {
    globaltries++;
    if (button23.innerText === currentIncorrectTranslation) {
        rightaudio.play();
        pointsThird += 1;
        pointsThirdT.innerHTML = `Очків:<br>${pointsThird}`;
        currentIncorrectTranslation = randomWrong(); // Отримуємо новий неправильний переклад
        globalrightanswers++;
    } else {
        wrongAnswer.play();
        alert("Спробуйте ще раз!");
        pointsThird -= 1;
        globalmistakes++;
        pointsThirdT.innerHTML = `Очків:<br>${pointsThird}`;
    }
});

button33.addEventListener('click', function() {
    globaltries++;
    if (button33.innerText === currentIncorrectTranslation) {
        rightaudio.play();
        pointsThird += 1;
        pointsThirdT.innerHTML = `Очків:<br>${pointsThird}`;
        currentIncorrectTranslation = randomWrong(); // Отримуємо новий неправильний переклад
        globalrightanswers++;
    } else {
        wrongAnswer.play();
        alert("Спробуйте ще раз!");
        pointsThird -= 1;
        globalmistakes++;
        pointsThirdT.innerHTML = `Очків:<br>${pointsThird}`;
    }
});

button43.addEventListener('click', function() {
    globaltries++;
    if (button43.innerText === currentIncorrectTranslation) {
        rightaudio.play();
        globalrightanswers++;
        pointsThird += 1;
        pointsThirdT.innerHTML = `Очків:<br>${pointsThird}`;
        currentIncorrectTranslation = randomWrong(); // Отримуємо новий неправильний переклад
    } else {
        wrongAnswer.play();
        alert("Спробуйте ще раз!");
        pointsThird -= 1;
        globalmistakes++;
        pointsThirdT.innerHTML = `Очків:<br>${pointsThird}`;
    }
});

// Third mode
ChoosethewrongBTN.addEventListener('click', function() {
    
    for (let g = 0; g < A.length; g++) {
        let someString = A[g][1];
        count_words(someString);
        if (k > 3) {
            let turninstring = [A[g][0], stringToMassiv(A[g][1])];
            let RepeatedChecker = B.some(item => item[0] === turninstring[0]);
            if (!RepeatedChecker) {
                B.push(turninstring);
            }
        }
    }


    if (B.length < 2) {
        thirdTestBlock.style.display = 'block';
    }
    if (B.length > 2) {
        console.log(B)
        Choosethewrong.style.display = 'block';
        menuB.style.display = 'none';
        currentIncorrectTranslation = randomWrong(); // Починаємо тест із випадковим перекладом
    }
});


// Moving to practise mode
trainBtn.addEventListener('click', function(){
    if (A.length < 4) {
        notenoughB.style.display = 'block';
    }
    else {
        trainYourKnowlegeBlock.style.display = 'block';
        menuB.style.display = 'none'
        counterP.innerText = 'Слово '+ counterforWord + '/'+(A.length-1);
    }
});

wordS.addEventListener('click', function(){
    wordT.style.opacity = '0';
    wordT.style.transform = 'translateX(-300px)';
    wordT.style.transition = '.5s';
    setTimeout(function() {
        wordT.style.opacity = '1';
        wordT.style.transform = 'translateX(0)'
        wordT.innerHTML = A[counterforWord][0];
}, 200);
})

translateS.addEventListener('click', function() {

    TwordT.style.opacity = '0';
    TwordT.style.transform = 'translateX(300px)';
    TwordT.style.transition = 'opacity .5s, transform .5s';


    setTimeout(function() {
        TwordT.innerHTML = A[counterforWord][1];
        TwordT.style.opacity = '1';
        TwordT.style.transform = 'translateX(0)';
    }, 200);
});

Previousbtn.addEventListener('click', function(){
    if (counterforWord <= 0) {
        wrongAnswer.play();
        counterP.innerText = 'Це перше слово!';
    } else {
        TwordT.style.transition = 'opacity .5s, transform .5s';
        TwordT.style.opacity = '0';
        TwordT.style.transform = 'translateX(300px)';
        wordT.style.transition = 'opacity .5s, transform .5s';
        wordT.style.opacity = '0';
        wordT.style.transform = 'translateX(-300px)';

        setTimeout(function() {
            counterforWord--;
            counterP.innerText = 'Слово ' + counterforWord + '/' + (A.length - 1);
            wordT.innerText = A[counterforWord][0];
            TwordT.innerText = A[counterforWord][1];
        }, 500);
    }
});

NextWbtn.addEventListener('click', function(){
    if (counterforWord >= A.length - 1) {
        counterP.innerText = 'Більше немає слів в списку!';
        wrongAnswer.play();
    } else {
        TwordT.style.transition = 'opacity .5s, transform .5s';
        TwordT.style.opacity = '0';
        TwordT.style.transform = 'translateX(300px)';
        wordT.style.transition = 'opacity .5s, transform .5s';
        wordT.style.opacity = '0';
        wordT.style.transform = 'translateX(-300px)';

        setTimeout(function() {
            counterforWord++;
            counterP.innerText = 'Слово ' + counterforWord + '/' + (A.length - 1);
            wordT.innerText = A[counterforWord][0];
            TwordT.innerText = A[counterforWord][1];
        }, 500);
    }
});

