// переходимо в меню вибору
startBTN.addEventListener('click', turnChoosemenu)

// перевіряємо слово по натисанню
checkBTN.addEventListener('click',checkChooseW);

// переходимо в тест по кнопці
chooseWordBTN.addEventListener('click', turnChooseW)

// додаємо фон при наведені
startBTN.addEventListener('mouseenter', function() {
    mainBlockIMG.style.transform = 'translateY(-100px)';
});

// забираємо фон при відведені
startBTN.addEventListener('mouseleave', function() {
    mainBlockIMG.style.transform = 'translateY(400px)';;
});