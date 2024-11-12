const startB = document.querySelector('.mainblock');
const ChooseB = document.querySelector('.ChooseWBlock');
const PWord = document.querySelector('.thatword');
const PwordSecond = document.querySelector('.thatwordSecond');
const thirdTestBlock = document.querySelector('.noteenoughmeanings');
const menuB = document.querySelector('.menublock');
const infoB = document.querySelector('.infoBlock');
const img = document.querySelector('.imgWord');
const notenoughB = document.querySelector('.notenoughArray');
const addWordBlock = document.querySelector('.addWordBlock');
const choosetheDificult = document.querySelector('.choosethedifficult');
const Choosethewrong = document.querySelector('.Choosethewrong');
const testBlock = document.querySelector('.testBlock');
let n_del = document.querySelector('#n_del');
let ok_del = document.querySelector('#ok_del');
const TranslateTheword = document.querySelector('.TranslateTheword');

// Statistics
let globaltries = 0;
let globalmistakes = 0;
let globalrightanswers = 0;
let averageInfo = document.querySelector('#averageInfo');


let globaltriesText = document.querySelector('.amountofTries');
let globalmistakesText = document.querySelector('.amountofWan');
let globalrightText = document.querySelector('.amountofRan');
let averageInfoText = document.querySelector('.averageAn');

// variables for third game
const PwordWrong = document.querySelector('.thatwordWRONG');
let AllradiousOfthird = document.querySelector('.radioThird')
const testBlockWRONG = document.querySelector('.testBlockWRONG');
// с// The word that a person writes in input of second game
const TranslateThewordInput = document.querySelector('.TranslateThewordInput')

// lables for inputs

let wordInputP = document.querySelector('.wordInputP');
let wordInputPT = document.querySelector('.wordInputPT');


let NumUm;

// the number of phase in the table
let d = 0;

// the array of TR
let TR = [];

// the number of rows in the array
let n_row = 4;

// inputs in addBlock
let wordInput = document.querySelector('.wordInput')
let TranslatewordInput = document.querySelector('.TranslatewordInput')

// radio inputs
const radio1 = document.querySelector('#radio1');
const radio2 = document.querySelector('#radio2');
const radio3 = document.querySelector('#radio3');
const radio4 = document.querySelector('#radio4');
const generalRadio = document.querySelector('.radio')

// label text
const ans1 = document.querySelector('.ans1');
const ans2 = document.querySelector('.ans2');
const ans3 = document.querySelector('.ans3');
const ans4 = document.querySelector('.ans4');
const generalans = document.querySelector('ans');

let CorrectWord;
let points = 0;
let pointsSecond = 0;
let pointsThird = 0;
const pointP = document.querySelector('.points');
const pointPSecond = document.querySelector('.pointsSecond');
const pointsThirdT = document.querySelector('.pointsthird');
let mainBlockIMG = document.querySelector('.mainBlockIMG')

// radio inputs(thirdGame)
const radio13 = document.querySelector('#option1');
const radio23 = document.querySelector('#option2')
const radio33 = document.querySelector('#option3')
const radio43 = document.querySelector('#option4')

// lables for radio of third game
const button13 = document.querySelector('#option1Lable')
const button23 = document.querySelector('#option2Lable')
const button33 = document.querySelector('#option3Lable')
const button43 = document.querySelector('#option4Lable')



// table with a list of words
let table = document.querySelector('.addWordTable');

// buttons
const chooseWordBTN = document.querySelector('.chooseBTN')
const checkBTN = document.querySelector('.check');
const checkBTNsecond = document.querySelector('.checkSecond')
const startBTN = document.querySelector('.startBTN');
const infoBTN = document.querySelector('.info');
const getmainBTN = document.querySelector('.backmain')
const getmain1BTN = document.querySelector('.backmain1');
const getmain2BTN = document.querySelector('.backmain2');
const removeNotenoughB = document.querySelector('.backmain3');
const getmain5BTN = document.querySelector('.backmain5');
const getmain6BTN = document.querySelector('.backmain6');
const getmain7BTN = document.querySelector('.backmain7');
const getmain8BTN = document.querySelector('.backmain8');
const addbtn = document.querySelector('.addbtn');
const addToA = document.querySelector('.addToA');
const easyLVL = document.querySelector('.easy');
const mediumLVL = document.querySelector('.medium');
const hardLVL = document.querySelector('.hard');
const finishaddingword = document.querySelector('.finishadding')
const addbtnNot = document.querySelector('.addbtnNot'); 
const chooseBTNSecond = document.querySelector('.chooseBTNSecond');
const ChoosethewrongBTN = document.querySelector('.ChoosethewrongBTN');
const AddMeaning = document.querySelector('.addbtnMeanning');
const checkerThirdGame = document.querySelector('#checkerThirdGame');
const trainBtn = document.querySelector('.trainBtn');
// sounds
let wrongAnswer = new Audio('sounds/wrongAnswer.mp3');
let rightaudio = new Audio('sounds/rightanswer.mp3');


// variables for Practise mode
let trainYourKnowlegeBlock = document.querySelector('.trainYourKnowlege');
let counterforWord = 0;
let wordT = document.querySelector('.wordT');
let TwordT = document.querySelector('.translateWordT');

const NextWbtn = document.querySelector('.nextT');
const Previousbtn = document.querySelector('.backT');

const wordS = document.querySelector('.wordShow');
const translateS = document.querySelector('.TranslateShow');

let counterP = document.querySelector('.counterP');

