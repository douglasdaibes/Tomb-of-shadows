let hero = document.querySelector('.hero');
let moveby = 1;
let Vidas = 3;
let MapCheck = 0
let spikes = [];
let walls = [];
let collision1 = [];
let collision2 = [];
let collision3 = [];
let collision4 = [];
let chaves = [];
let portas = [];
let butoes = [];
let Teleportes = [];
let hidden = false;
var heroPosition = {x: 10, y: 11};
var heroPosition2 = {x: 24,y: 1};
var heroPosition3 = {x: 28,y: 30};
var keyPosition1 =  {x: 6, y: 5};
var dorPosition1 = {x: 12, y: 1};
var keyPosition2 =  {x: 5, y: 21};
var dorPosition2 = {x: 28, y: 26};
var keyPosition3 =  {x: 56, y: 30};
var dorPosition3 = {x: 1, y: 30};
var butaoPosition2 = {x: 9, y: 14};
var butaoPosition3 = {x: 56, y: 5};
var TelePosition31 = {x: 28, y: 23};
var TelePosition32 = {x: 28, y: 36};
var TelePosition33 = {x: 24, y: 30};
var TelePosition34 = {x: 32, y: 30};
var matrix = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 100, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 14, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 1],
  [1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 90, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];

  var matrix2 = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,3,3,3,3,3,3,3,3,3,3,3,0,3,0,0,0,0,0,0,3,3,3,3,3,3,0,0,1],
    [1,0,3,3,3,0,0,0,0,0,3,0,3,0,3,0,0,0,0,0,0,3,3,3,3,3,3,0,0,1],
    [1,0,3,3,3,0,0,3,0,0,3,0,3,0,0,0,0,0,0,0,3,3,3,3,3,3,3,0,0,1],
    [1,0,0,0,3,78,0,3,0,3,0,0,3,0,3,0,0,0,0,0,100,14,100,0,0,0,0,0,0,1],
    [1,3,3,0,3,3,3,3,0,3,0,3,3,0,3,0,0,0,0,0,3,3,3,3,3,3,3,0,0,1],
    [1,3,0,0,0,0,0,0,0,3,0,0,0,0,1,0,0,0,0,0,3,3,3,3,3,3,3,0,0,1],
    [1,3,3,3,3,3,3,3,3,3,1,1,1,1,100,100,100,100,1,1,1,1,1,3,3,3,3,100,100,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,0,0,0,0,0,0,0,1,3,3,3,3,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,3,3,3,3,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,3,3,3,3,3,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,3,3,3,3,3,3,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,3,3,3,3,3,3,3,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,3,3,3,3,3,3,3,3,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,3,3,3,3,3,3,3,3,3,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,3,0,,0,3,0,100,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,3,0,3,0,3,0,3,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,3,0,3,0,3,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,0,3,0,3,0,3,0,3,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,3,0,3,0,3,0,3,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,3,0,3,0,3,0,3,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,3,0,3,0,3,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
    [1,2,3,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,3,3,3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,3,3,3,3,3,3,3,3,3,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,90,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];

  var matrix3 = [ 
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,90,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,3,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,3,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,3,0,0,0,3,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,3,0,3,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,3,0,3,3,3,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,3,0,3,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,3,3,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,7,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,2,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,7,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,3,0,0,0,0,0,0,3,0,0,0,0,3,0,0,0,3,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,3,3,3,0,3,3,3,3,0,3,0,0,3,0,3,0,0,0,3,3,3,3,3,3,3,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,3,0,0,0,3,0,0,3,0,3,0,3,3,0,3,0,3,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,3,0,3,3,3,0,0,3,0,3,0,0,3,0,0,0,3,0,3,0,3,3,3,4,3,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1],
  [1,0,0,3,0,0,0,0,0,3,0,3,3,0,3,3,3,0,3,0,3,0,3,0,3,0,3,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,3,0,3,3,0,0,0,3,3,3,0,3,0,3,0,3,0,3,0,1,3,0,3,1,0,0,0,1,1,3,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1],
  [1,0,0,3,3,3,3,3,3,3,0,3,3,3,3,0,0,0,3,0,3,0,3,0,3,0,3,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1],
  [1,0,0,3,0,0,0,0,0,0,0,0,0,3,3,3,3,0,3,0,3,0,3,0,3,0,3,0,1,0,0,0,1,0,0,0,1,0,3,3,3,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1],
  [1,0,0,3,0,3,3,0,3,3,0,3,0,0,0,0,0,0,3,0,0,0,3,0,3,0,3,0,1,3,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1],
  [1,0,0,3,0,3,3,0,3,3,0,3,3,3,3,3,3,3,3,3,3,3,3,0,3,0,3,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1],
  [1,0,0,3,0,3,3,0,0,3,0,0,0,0,0,0,0,3,3,3,3,0,3,0,3,0,3,0,1,0,0,3,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
  [1,0,0,3,0,3,0,3,0,3,3,3,3,3,3,3,0,0,0,0,0,0,3,0,3,0,3,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
  [1,0,0,3,0,3,0,3,0,3,0,0,3,3,3,3,3,3,3,3,3,0,3,0,3,0,3,0,1,0,3,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
  [1,0,3,3,0,3,3,3,0,3,0,0,3,0,0,0,0,0,0,0,3,0,3,0,3,0,3,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,3,0,0,0,0,0,0,3,0,0,3,0,3,3,3,3,0,3,3,0,3,0,3,0,3,0,1,3,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
  [1,0,3,0,3,3,3,3,3,3,3,3,0,0,3,0,0,3,0,0,3,0,3,0,3,0,3,0,1,0,0,3,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
  [1,0,3,0,3,0,0,0,0,0,0,0,0,0,3,0,0,3,3,0,3,0,3,0,3,0,3,0,1,0,3,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
  [1,0,3,3,3,0,3,3,3,3,3,3,3,3,3,0,0,3,0,0,3,0,3,0,3,0,3,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
  [1,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,3,0,3,3,0,3,0,3,0,3,0,1,3,0,3,1,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1],
  [1,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,3,0,3,0,3,0,1,3,0,3,1,1,1,1,1,1,1,100,1,1,1,1,1,1,1,100,1,1,1,1,1,0,1,1,1,1,3,1],
  [1,0,0,0,3,0,3,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,3,0,3,3,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1],
  [1,0,0,0,3,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,1,0,14,0,1,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,9,1,0,0,0,1],
  [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ];

 function CollectMatrix(){
//spikes
  for (let linha = 0; linha < matrix.length; linha++) {
    for (let coluna = 0; coluna < matrix[linha].length; coluna++) {
     let espinho = matrix[linha][coluna];
     if(espinho === 3){
      let spike = {
        x: linha,
        y: coluna
      };  
      spikes.push(spike);
     }
    };
  };

//key
  for (let linha = 0; linha < matrix.length; linha++) {
    for (let coluna = 0; coluna < matrix[linha].length; coluna++) {
     let key = matrix[linha][coluna];
     if(key === 14){
      let chave = {
        x: linha,
        y: coluna
      };  
      chaves.push(chave);
     }
    };
  };
  //door
  for (let linha = 0; linha < matrix.length; linha++) {
    for (let coluna = 0; coluna < matrix[linha].length; coluna++) {
     let door = matrix[linha][coluna];
     if(door === 90){
      let porta = {
        x: linha,
        y: coluna
      };
      portas.push(porta);
     }
    };
  };


  //colisao
  for (let linha = 0; linha < matrix.length; linha++) {
    for (let coluna = 0; coluna < matrix[linha].length; coluna++) {
     let ponto = matrix[linha][coluna];
     if(ponto === 1){
      let wall = {
        x: linha,
        y: coluna
      };
      walls.push(wall);
     }
    };
  };
 }

 function CollectMatrix2(){
//butões
  for (let linha = 0; linha < matrix2.length; linha++) {
    for (let coluna = 0; coluna < matrix2[linha].length; coluna++) {
     let butao = matrix2[linha][coluna];
     if(butao === 8){
      let button = {
        x: linha,
        y: coluna
      };  
      butoes.push(button);
     }
    };
  };
  //spikes
    for (let linha = 0; linha < matrix2.length; linha++) {
      for (let coluna = 0; coluna < matrix2[linha].length; coluna++) {
       let espinho = matrix2[linha][coluna];
       if(espinho === 3){
        let spike = {
          x: linha,
          y: coluna
        };  
        spikes.push(spike);
       }
      };
    };
  
  //key
    for (let linha = 0; linha < matrix2.length; linha++) {
      for (let coluna = 0; coluna < matrix2[linha].length; coluna++) {
       let key = matrix2[linha][coluna];
       if(key === 14){
        let chave = {
          x: linha,
          y: coluna
        };  
        chaves.push(chave);
       }
      };
    };
    //door
    for (let linha = 0; linha < matrix2.length; linha++) {
      for (let coluna = 0; coluna < matrix2[linha].length; coluna++) {
       let door = matrix2[linha][coluna];
       if(door === 90){
        let porta = {
          x: linha,
          y: coluna
        };
        portas.push(porta);
       }
      };
    };
  
  
    //colisao
    for (let linha = 0; linha < matrix2.length; linha++) {
      for (let coluna = 0; coluna < matrix2[linha].length; coluna++) {
       let ponto = matrix2[linha][coluna];
       if(ponto === 1){
        let wall = {
          x: linha,
          y: coluna
        };
        walls.push(wall);
       }
      };
    };
   }

   function CollectMatrix3(){
    //butões
      for (let linha = 0; linha < matrix3.length; linha++) {
        for (let coluna = 0; coluna < matrix3[linha].length; coluna++) {
         let butao = matrix3[linha][coluna];
         if(butao === 8){
          let button = {
            x: linha,
            y: coluna
          };  
          butoes.push(button);
         }
        };
      };
      //spikes
        for (let linha = 0; linha < matrix3.length; linha++) {
          for (let coluna = 0; coluna < matrix3[linha].length; coluna++) {
           let espinho = matrix3[linha][coluna];
           if(espinho === 3){
            let spike = {
              x: linha,
              y: coluna
            };  
            spikes.push(spike);
           }
          };
        };
      
      //key
        for (let linha = 0; linha < matrix3.length; linha++) {
          for (let coluna = 0; coluna < matrix3[linha].length; coluna++) {
           let key = matrix3[linha][coluna];
           if(key === 14){
            let chave = {
              x: linha,
              y: coluna
            };  
            chaves.push(chave);
           }
          };
        };
        //door
        for (let linha = 0; linha < matrix3.length; linha++) {
          for (let coluna = 0; coluna < matrix3[linha].length; coluna++) {
           let door = matrix3[linha][coluna];
           if(door === 90){
            let porta = {
              x: linha,
              y: coluna
            };
            portas.push(porta);
           }
          };
        };
        //Teleporte
        for (let linha = 0; linha < matrix3.length; linha++) {
          for (let coluna = 0; coluna < matrix3[linha].length; coluna++) {
           let tele = matrix3[linha][coluna];
           if(tele === 90){
            let teleporte = {
              x: linha,
              y: coluna
            };
            Teleportes.push(teleporte);
           }
          };
        };
      
      
        //colisao
        for (let linha = 0; linha < matrix3.length; linha++) {
          for (let coluna = 0; coluna < matrix3[linha].length; coluna++) {
           let ponto = matrix3[linha][coluna];
           if(ponto === 1){
            let wall = {
              x: linha,
              y: coluna
            };
            walls.push(wall);
           }
          };
        };
       }

  /////////////////////////////

  //up
  function colisao1(){
   if(MapCheck === 1){
    for(let i = 0; i < walls.length; i++){
      if(heroPosition.x - moveby === walls[i].x && heroPosition.y === walls[i].y){
        Keyboardevent.key = "w" === "p"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition.x - moveby;
       }
      }
    } else if(MapCheck === 2){
      for(let i = 0; i < walls.length; i++){
        if(heroPosition2.x - moveby === walls[i].x && heroPosition2.y === walls[i].y){
          Keyboardevent.key = "w" === "p"
          console.log("no");
          updateMatrix();
        } else{
          heroPosition2.x - moveby;
         }
        }
    } else if(MapCheck === 3){
      for(let i = 0; i < walls.length; i++){
        if(heroPosition3.x - moveby === walls[i].x && heroPosition3.y === walls[i].y){
          Keyboardevent.key = "w" === "p"
          console.log("no");
          updateMatrix();
        } else{
          heroPosition3.x - moveby;
         }
        }
    }
  }

  function colisao1Porta(){
    if(MapCheck === 1){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition.x - moveby === portas[i].x && heroPosition.y === portas[i].y){
        Keyboardevent.key = "w" === "p"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition.x - moveby;
       }
      }
  } else if(MapCheck === 2){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition2.x - moveby === portas[i].x && heroPosition2.y === portas[i].y){
        Keyboardevent.key = "w" === "p"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition2.x - moveby;
      }
    }
   } else if(MapCheck === 3){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition3.x - moveby === portas[i].x && heroPosition3.y === portas[i].y){
        Keyboardevent.key = "w" === "p"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition3.x - moveby;
       }
      }
  }
  }

  //left
  function colisao2(){
    if(MapCheck === 1){
    for(let i = 0; i < walls.length; i++){
      if(heroPosition.x === walls[i].x && heroPosition.y - moveby === walls[i].y){
        Keyboardevent.key = "w" === "p"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition.y - moveby;
       }
      }
  } else if(MapCheck === 2){
    for(let i = 0; i < walls.length; i++){
    if(heroPosition2.x === walls[i].x && heroPosition2.y - moveby === walls[i].y){
      Keyboardevent.key = "w" === "p"
      console.log("no");
      updateMatrix();
    } else{
      heroPosition2.y - moveby;
     }
    }
  } else if(MapCheck === 3){
    for(let i = 0; i < walls.length; i++){
    if(heroPosition3.x === walls[i].x && heroPosition3.y - moveby === walls[i].y){
      Keyboardevent.key = "w" === "p"
      console.log("no");
      updateMatrix();
    } else{
      heroPosition3.y - moveby;
     }
    }
  }
  }

  function colisao2Porta(){
    if(MapCheck === 1){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition.x === portas[i].x && heroPosition.y - moveby === portas[i].y){
        Keyboardevent.key = "w" === "p"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition.y - moveby;
       }
      }
  } else if(MapCheck === 2){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition2.x === portas[i].x && heroPosition2.y - moveby === portas[i].y){
        Keyboardevent.key = "w" === "p"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition2.y - moveby;
       }
      }
  } else if(MapCheck === 3){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition3.x === portas[i].x && heroPosition3.y - moveby === portas[i].y){
        Keyboardevent.key = "w" === "p"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition3.y - moveby;
       }
      }
  }
  }
    
  //down
  function colisao3(){
    if(MapCheck === 1){
    for(let i = 0; i < walls.length; i++){
      if(heroPosition.x + moveby === walls[i].x && heroPosition.y === walls[i].y){
        Keyboardevent.key = "s" === "u"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition.x + moveby;
      }
    }
  } else if(MapCheck === 2){
    for(let i = 0; i < walls.length; i++){
      if(heroPosition2.x + moveby === walls[i].x && heroPosition2.y === walls[i].y){
        Keyboardevent.key = "s" === "u"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition2.x + moveby;
      }
    }
  } else if(MapCheck === 3){
    for(let i = 0; i < walls.length; i++){
      if(heroPosition3.x + moveby === walls[i].x && heroPosition3.y === walls[i].y){
        Keyboardevent.key = "s" === "u"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition3.x + moveby;
      }
    }
  }
  }

  function colisao3Porta(){
    if(MapCheck === 1){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition.x + moveby === portas[i].x && heroPosition.y === portas[i].y){
        Keyboardevent.key = "s" === "u"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition.x + moveby;
      }
    }
  } else if(MapCheck === 2){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition2.x + moveby === portas[i].x && heroPosition2.y === portas[i].y){
        Keyboardevent.key = "s" === "u"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition2.x + moveby;
      }
    }
  } else if(MapCheck === 3){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition3.x + moveby === portas[i].x && heroPosition3.y === portas[i].y){
        Keyboardevent.key = "s" === "u"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition3.x + moveby;
      }
    }
  }
}

  //right
  function colisao4(){
    if(MapCheck === 1){
    for(let i = 0; i < walls.length; i++){
      if(heroPosition.x === walls[i].x && heroPosition.y + moveby === walls[i].y){
        Keyboardevent.key = "d" === "y"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition.y + moveby;
      }
    }
  } else if(MapCheck === 2){
    for(let i = 0; i < walls.length; i++){
      if(heroPosition2.x === walls[i].x && heroPosition2.y + moveby === walls[i].y){
        Keyboardevent.key = "d" === "y"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition2.y + moveby;
      }
    }
  } else if(MapCheck === 3){
    for(let i = 0; i < walls.length; i++){
      if(heroPosition3.x === walls[i].x && heroPosition3.y + moveby === walls[i].y){
        Keyboardevent.key = "d" === "y"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition3.y + moveby;
      }
    }
  }
  }

  function colisao4Porta(){
  if(MapCheck === 1){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition.x === portas[i].x && heroPosition.y + moveby === portas[i].y){
        Keyboardevent.key = "d" === "y"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition.y + moveby;
      }
    }
  } else if(MapCheck === 2){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition2.x === portas[i].x && heroPosition2.y + moveby === portas[i].y){
        Keyboardevent.key = "d" === "y"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition2.y + moveby;
      }
    }
  } else if(MapCheck === 3){
    for(let i = 0; i < portas.length; i++){
      if(heroPosition3.x === portas[i].x && heroPosition3.y + moveby === portas[i].y){
        Keyboardevent.key = "d" === "y"
        console.log("no");
        updateMatrix();
      } else{
        heroPosition3.y + moveby;
      }
    }
  }
}

function NextLevel(){
  if(MapCheck === 1){
    if(heroPosition.x === dorPosition1.x && heroPosition.y === dorPosition1.y){
      StartGame2();
    }
  } else if(MapCheck === 2){
    if(heroPosition2.x === dorPosition2.x && heroPosition2.y === dorPosition2.y){
      StartGame3();
    }
  } else if(MapCheck === 3){
    if(heroPosition3.x === dorPosition3.x && heroPosition3.y === dorPosition3.y){
      EndGame();
    }
  }
};


//movement keys
function player(){

window.addEventListener('keydown', (Keyboardevent) =>{

  if(MapCheck === 1){
     if(Keyboardevent.key === 'w' || Keyboardevent.key === 'W'){
    colisao1(),colisao1Porta(),spike(),heroPosition.x -= moveby,console.log(heroPosition),updateMatrix(),NextLevel();
     }
     else if(Keyboardevent.key === 's'|| Keyboardevent.key === 'S'){
     colisao3(),colisao3Porta(),spike2(),heroPosition.x += moveby,console.log(heroPosition),updateMatrix(),NextLevel();
     }
     else if(Keyboardevent.key === 'a'|| Keyboardevent.key === 'A'){
    colisao2(),colisao2Porta(),spike3(),heroPosition.y -= moveby,console.log(heroPosition),updateMatrix(),NextLevel();
     }
     else if(Keyboardevent.key === 'd'|| Keyboardevent.key === 'D'){ 
     colisao4(),colisao4Porta(),spike4(),heroPosition.y += moveby,console.log(heroPosition),updateMatrix(),NextLevel();
     }
     else if(Keyboardevent.key === 'i'|| Keyboardevent.key === 'I'){
     interacaoChave(),console.log("interaction")
     }
  } else if(MapCheck === 2){
    if(Keyboardevent.key === 'w' || Keyboardevent.key === 'W'){
      colisao1(),colisao1Porta(),spike(),heroPosition2.x -= moveby,console.log(heroPosition2),updateMatrix(),NextLevel();
       }
       else if(Keyboardevent.key === 's'|| Keyboardevent.key === 'S'){
       colisao3(),colisao3Porta(),spike2(),heroPosition2.x += moveby,console.log(heroPosition2),updateMatrix(),NextLevel();
       }
       else if(Keyboardevent.key === 'a'|| Keyboardevent.key === 'A'){
      colisao2(),colisao2Porta(),spike3(),heroPosition2.y -= moveby,console.log(heroPosition2),updateMatrix(),NextLevel();
       }
       else if(Keyboardevent.key === 'd'|| Keyboardevent.key === 'D'){ 
       colisao4(),colisao4Porta(),spike4(),heroPosition2.y += moveby,console.log(heroPosition2),updateMatrix(),NextLevel();
       }
       else if(Keyboardevent.key === 'i'|| Keyboardevent.key === 'I'){
       interacaoChave(),Butao(),console.log("interaction")
       }
  } else if(MapCheck === 3){
    if(Keyboardevent.key === 'w' || Keyboardevent.key === 'W'){
      colisao1(),colisao1Porta(),spike(),heroPosition3.x -= moveby,console.log(heroPosition3),updateMatrix(),teleporting(),NextLevel();
       }
       else if(Keyboardevent.key === 's'|| Keyboardevent.key === 'S'){
       colisao3(),colisao3Porta(),spike2(),heroPosition3.x += moveby,console.log(heroPosition3),updateMatrix(),teleporting(),NextLevel();
       }
       else if(Keyboardevent.key === 'a'|| Keyboardevent.key === 'A'){
      colisao2(),colisao2Porta(),spike3(),heroPosition3.y -= moveby,console.log(heroPosition3),updateMatrix(),teleporting(),NextLevel();
       }
       else if(Keyboardevent.key === 'd'|| Keyboardevent.key === 'D'){ 
       colisao4(),colisao4Porta(),spike4(),heroPosition3.y += moveby,console.log(heroPosition3),updateMatrix(),teleporting(),NextLevel();
       }
       else if(Keyboardevent.key === 'i'|| Keyboardevent.key === 'I'){
       interacaoChave(),Butao(),console.log("interaction")
       }
  }

});
  
}



//start le game
function StartGame1(){
    console.log(chaves)
    console.log(walls);
    

MapCheck = 1;

    hidden = !hidden;
    if(hidden) {
        document.getElementById('START').style.display = 'none';
    } else {
        document.getElementById('START').style.visibility = 'visible';
    }

    if(hidden) {
        document.getElementById('TUTORIAL').style.display = 'none';
    } else {
        document.getElementById('TUTORIAL').style.visibility = 'visible';
    }

    if(hidden) {
        document.getElementById('SAIR').style.display = 'none';
    } else {
        document.getElementById('SAIR').style.visibility = 'visible';
    }

    if(hidden) {
        document.getElementById('TITULO').style.display = 'none';
    } else {
        document.getElementById('TITULO').style.visibility = 'visible';
    }
    
    const nodeList = document.querySelectorAll(".AA");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.visibility = "hidden";
}

CollectMatrix();
Mapa1();

}

function StartGame2(){
clear();
ChaveColetada = 0;
MapCheck = 2;
walls = [];
portas = [];
chaves = [];
spikes = [];
heroPosition = 0;
dorPosition1 = 0;
keyPosition1 = 0;
for (let i = 0; i < matrix2.length; i++) {
  for (let j = 0; j < matrix2[i].length; j++) {
    if (matrix2[i][j] === 91) {
      matrix2[i][j] = 90;
    }
    matrix2[5][21] = 14;
  }
};
CollectMatrix2();
Mapa2();
};

function StartGame3(){
  clear();
  ChaveColetada = 0;
  MapCheck = 3;
  walls = [];
  portas = [];
  chaves = [];
  spikes = [];
  heroPosition2 = 0;
  dorPosition2 = 0;
  keyPosition2 = 0;
  for (let i = 0; i < matrix3.length; i++) {
    for (let j = 0; j < matrix3[i].length; j++) {
      if (matrix3[i][j] === 91) {
        matrix3[i][j] = 90;
      }
      matrix3[56][30] = 14; 
    }
  };
  CollectMatrix3();
  Mapa3();
  console.log(walls)
  }

function EndGame(){
  clear();
  MapCheck = 4;

  const DDList = document.querySelectorAll(".DD");
for (let i = 0; i < DDList.length; i++) {
  DDList[i].style.visibility = "visible";
}

const FFList = document.querySelectorAll(".FF");
for (let i = 0; i < FFList.length; i++) {
  FFList[i].style.visibility = "visible";
}
}


function Mapa1(){
  const table = document.getElementById("game-table");
  for (let y = 0; y < matrix.length; y++) {
  
    const row = document.createElement("tr");
  
    for (let x = 0; x < matrix[y].length; x++) {
  
      const cell = document.createElement("td");
  
      if (matrix[y][x] === 0) {
        cell.textContent = " ";
        cell.style.color = "white";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix[y][x] === 1) {
        cell.textContent = "*";
        cell.style.color = "#a7c957";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix[y][x] === 2) {
        cell.textContent = "&";
        cell.style.color = "#90e0ef";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix[y][x] === 14) {
        cell.textContent = "@";
        cell.style.color = "#ffd60a";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix[y][x] === 90) {
        cell.textContent = "D";
        cell.style.color = "#dee2e6";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix[y][x] === 91) {
        cell.textContent = "=";
        cell.style.color = "#6c584c";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix[y][x] === 3) {
        cell.textContent = "#";
        cell.style.color = "#2D2727";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix[y][x] === 100) {
        cell.textContent = "*";
        cell.style.color = "#6b705c";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      }

      row.appendChild(cell);
    }
  
    table.appendChild(row);
  }


}

function Mapa2(){
  const table = document.getElementById("game-table");
  for (let y = 0; y < matrix2.length; y++) {
  
    const row = document.createElement("tr");
  
    for (let x = 0; x < matrix2[y].length; x++) {
  
      const cell = document.createElement("td");
  
      if (matrix2[y][x] === 0) {
        cell.textContent = " ";
        cell.style.color = "white";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix2[y][x] === 1) {
        cell.textContent = "*";
        cell.style.color = "#a98467";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix2[y][x] === 2) {
        cell.textContent = "&";
        cell.style.color = "#537188";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix2[y][x] === 14) {
        cell.textContent = "@";
        cell.style.color = "#fca311";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix2[y][x] === 90) {
        cell.textContent = "D";
        cell.style.color = "#5C469C";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix2[y][x] === 91) {
        cell.textContent = "=";
        cell.style.color = "#231942";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix2[y][x] === 3) {
        cell.textContent = "#";
        cell.style.color = "#dad7cd";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix2[y][x] === 100) {
        cell.textContent = "*";
        cell.style.color = "#a98467";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix2[y][x] === 8) {
        cell.textContent = "O";
        cell.style.color = "#850000";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix2[y][x] === 13) {
        cell.textContent = "@";
        cell.style.color = "#fca311";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      }

      row.appendChild(cell);
    }
  
    table.appendChild(row);
  }


}

function Mapa3(){
  const table = document.getElementById("game-table");
  for (let y = 0; y < matrix3.length; y++) {
  
    const row = document.createElement("tr");
  
    for (let x = 0; x < matrix3[y].length; x++) {
  
      const cell = document.createElement("td");
  
      if (matrix3[y][x] === 0) {
        cell.textContent = " ";
        cell.style.color = "white";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 1) {
        cell.textContent = "*";
        cell.style.color = "#7A3E3E";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 2) {
        cell.textContent = "&";
        cell.style.color = "#537188";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 14) {
        cell.textContent = "@";
        cell.style.color = "#C07F00";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 90) {
        cell.textContent = "D";
        cell.style.color = "#5C469C";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 91) {
        cell.textContent = "=";
        cell.style.color = "pink";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 3) {
        cell.textContent = "#";
        cell.style.color = "#2D2727";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 100) {
        cell.textContent = "*";
        cell.style.color = "#7A3E3E";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 8) {
        cell.textContent = "O";
        cell.style.color = "#850000";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 13) {
        cell.textContent = "@";
        cell.style.color = "#C07F00";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 7) {
        cell.textContent = ">";
        cell.style.color = "green";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 9) {
        cell.textContent = "O";
        cell.style.color = "#5463FF";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      } else if (matrix3[y][x] === 4) {
        cell.textContent = "#";
        cell.style.color = "#2D2727";
        cell.style.width = 20 + 'px'
        cell.style.height = 20 + 'px'
      }

      row.appendChild(cell);
    }
  
    table.appendChild(row);
  }


}

const DDList = document.querySelectorAll(".DD");
for (let i = 0; i < DDList.length; i++) {
  DDList[i].style.visibility = "hidden";
}

const FFList = document.querySelectorAll(".FF");
for (let i = 0; i < FFList.length; i++) {
  FFList[i].style.visibility = "hidden";
}

const CCList = document.querySelectorAll(".CC");
for (let i = 0; i < CCList.length; i++) {
  CCList[i].style.visibility = "hidden";
}

const BBList = document.querySelectorAll(".BB");
for (let i = 0; i < BBList.length; i++) {
  BBList[i].style.visibility = "hidden";
}

const nodeList = document.querySelectorAll(".AA");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.visibility = "hidden";
}
function Tutorial(){
    const text = document.querySelectorAll(".AA");
    for (let i = 0; i < text.length; i++) {
      text[i].style.visibility = "visible";
   }
}
//sair
function Sair(){
    hidden = !hidden;
    if(hidden) {
        document.getElementById('START').style.display = 'none';
    } else {
        document.getElementById('START').style.visibility = 'visible';
    }

    if(hidden) {
        document.getElementById('TUTORIAL').style.display = 'none';
    } else {
        document.getElementById('TUTORIAL').style.visibility = 'visible';
    }

    if(hidden) {
        document.getElementById('SAIR').style.display = 'none';
    } else {
        document.getElementById('SAIR').style.visibility = 'visible';
    }

    if(hidden) {
        document.getElementById('TITULO').style.display = 'none';
    } else {
        document.getElementById('TITULO').style.visibility = 'visible';
    }
    
    const nodeList = document.querySelectorAll(".AA");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.visibility = "hidden";
}

const BBList = document.querySelectorAll(".BB");
for (let i = 0; i < BBList.length; i++) {
  BBList[i].style.visibility = "visible";
}

}
  
var ChaveColetada = 0
//interação de Portas e chaves
function interacaoChave(){
  if(MapCheck === 1){
  for(let i = 0; i < chaves.length; i++){
    if(chaves[i].x === heroPosition.x && chaves[i].y === heroPosition.y){
      console.log("Chave coletada");
      abrirPorta();
      ChaveColetada = 1;
      updateMatrix();
      
    }
  }
} else if(MapCheck === 2)
  for(let i = 0; i < chaves.length; i++){
  if(chaves[i].x === heroPosition2.x && chaves[i].y === heroPosition2.y){
    console.log("Chave coletada");
    abrirPorta();
    ChaveColetada = 1;
    updateMatrix();
  }
} else if(MapCheck === 3)
for(let i = 0; i < chaves.length; i++){
if(chaves[i].x === heroPosition3.x && chaves[i].y === heroPosition3.y){
  console.log("Chave coletada");
  abrirPorta();
  ChaveColetada = 1;
  updateMatrix();
}
}
}

function abrirPorta(){
  if(MapCheck === 1){
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 90) {
        matrix[i][j] = 91;
      }
    }
  }
 portas = [];
} else if(MapCheck === 2){
  for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
      if (matrix2[i][j] === 90) {
        matrix2[i][j] = 91;
      }
    }
  }
 portas = [];
}  else if(MapCheck === 3){
  for (let i = 0; i < matrix3.length; i++) {
    for (let j = 0; j < matrix3[i].length; j++) {
      if (matrix3[i][j] === 90) {
        matrix3[i][j] = 91;
      }
    }
  }
 portas = [];
}
}
///
//Interação do butão com o mapa
function ButaoPressionado(){
  if(MapCheck === 2){
  for (let i = 0; i < matrix2.length; i++) {
    for (let j = 0; j < matrix2[i].length; j++) {
      if (matrix2[i][j] === 78) {
        matrix2[i][j] = 13;
      }
    }
  }
} else if(MapCheck === 3){
    for (let i = 0; i < matrix3.length; i++) {
      for (let j = 0; j < matrix3[i].length; j++) {
        matrix3[55][29] = 0;
        matrix3[55][30] = 0;
        matrix3[55][31] = 0;
        }
      } for(let i = 0; i < walls.length; i++)
      {
        walls[749] = 0;
        walls[750] = 0;
        walls[751] = 0;
      }
    }
  }

function Butao(){
  if(MapCheck === 2){
    for(let i = 0; i < butoes.length; i++){
      if(heroPosition2.x === butoes[i].x && heroPosition2.y === butoes[i].y){
      ButaoPressionado();
      console.log("boom");
      updateMatrix();
      }
    }
  } else if(MapCheck === 3){
    for(let i = 0; i < butoes.length; i++){
      if(heroPosition3.x === butoes[i].x && heroPosition3.y === butoes[i].y){
      ButaoPressionado();
      console.log("boom");
      updateMatrix();
      }
    }
}
}

function updateMatrix() {
   if(MapCheck === 1){
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 2) {
          matrix[i][j] = 0; // posição anterior zerada
        }
      }
    }
  
  
    matrix[heroPosition.x][heroPosition.y] = 2; //nova posição
   if(ChaveColetada === 0){
    if(heroPosition.x === keyPosition1.x && heroPosition.y === keyPosition1.y) {
    matrix[heroPosition.x][heroPosition.y] = 2;
    }else {
    matrix[keyPosition1.x][keyPosition1.y] = 14;};
   } else if(ChaveColetada === 1){
    if(heroPosition.x === keyPosition1.x && heroPosition.y === keyPosition1.y) {
      matrix[heroPosition.x][heroPosition.y] = 2;
      }else {
      matrix[keyPosition1.x][keyPosition1.y] = 0;};
   }

    if(heroPosition.x === dorPosition1.x && heroPosition.y === dorPosition1.y) {
      matrix[heroPosition.x][heroPosition.y] = 2;
      }else if(ChaveColetada === 1){
      matrix[dorPosition1.x][dorPosition1.y] = 91;}
    
    clear();
    Mapa1();

  } else if(MapCheck === 2){
    for (let i = 0; i < matrix2.length; i++) {
      for (let j = 0; j < matrix2[i].length; j++) {
        if (matrix2[i][j] === 2) {
          matrix2[i][j] = 0; // posição anterior zerada
        }
      }
    }
  
    matrix2[heroPosition2.x][heroPosition2.y] = 2; //nova posição
   if(ChaveColetada === 0){
    if(heroPosition2.x === keyPosition2.x && heroPosition2.y === keyPosition2.y) {
    matrix2[heroPosition2.x][heroPosition2.y] = 2;
    }else {
    matrix2[keyPosition2.x][keyPosition2.y] = 14;};
   } else if(ChaveColetada === 1){
    if(heroPosition2.x === keyPosition2.x && heroPosition2.y === keyPosition2.y) {
      matrix2[heroPosition2.x][heroPosition2.y] = 2;
      }else {
      matrix2[keyPosition2.x][keyPosition2.y] = 0;};
   }

    if(heroPosition2.x === dorPosition2.x && heroPosition2.y === dorPosition2.y) {
      matrix2[heroPosition2.x][heroPosition2.y] = 2;
      }else if(ChaveColetada === 1){
      matrix2[dorPosition2.x][dorPosition2.y] = 91;}

    if(heroPosition2.x === butaoPosition2.x && heroPosition2.y === butaoPosition2.y) {
        matrix2[heroPosition2.x][heroPosition2.y] = 2;
        }else{
        matrix2[butaoPosition2.x][butaoPosition2.y] = 8;}
    
    clear();
    Mapa2();

  } else if(MapCheck === 3){
    for (let i = 0; i < matrix3.length; i++) {
      for (let j = 0; j < matrix3[i].length; j++) {
        if (matrix3[i][j] === 2) {
          matrix3[i][j] = 0; // posição anterior zerada
        }
      }
    }
  
    matrix3[heroPosition3.x][heroPosition3.y] = 2; //nova posição
   if(ChaveColetada === 0){
    if(heroPosition3.x === keyPosition3.x && heroPosition3.y === keyPosition3.y) {
    matrix3[heroPosition3.x][heroPosition3.y] = 2;
    }else {
    matrix3[keyPosition3.x][keyPosition3.y] = 14;};
   } else if(ChaveColetada === 1){
    if(heroPosition3.x === keyPosition3.x && heroPosition3.y === keyPosition3.y) {
      matrix3[heroPosition3.x][heroPosition3.y] = 2;
      }else {
      matrix3[keyPosition3.x][keyPosition3.y] = 0;};
   }

    if(heroPosition3.x === dorPosition3.x && heroPosition3.y === dorPosition3.y) {
      matrix3[heroPosition3.x][heroPosition3.y] = 2;
      }else if(ChaveColetada === 1){
      matrix3[dorPosition3.x][dorPosition3.y] = 91;}

    if(heroPosition3.x === butaoPosition3.x && heroPosition3.y === butaoPosition3.y) {
        matrix3[heroPosition3.x][heroPosition3.y] = 2;
        }else{
        matrix3[butaoPosition3.x][butaoPosition3.y] = 8;}

    if(heroPosition3.x === TelePosition31.x && heroPosition3.y === TelePosition31.y) {
        matrix3[heroPosition3.x][heroPosition3.y] = 2;
        }else{
        matrix3[TelePosition31.x][TelePosition31.y] = 7;}
    if(heroPosition3.x === TelePosition32.x && heroPosition3.y === TelePosition32.y) {
        matrix3[heroPosition3.x][heroPosition3.y] = 2;
        }else{
        matrix3[TelePosition32.x][TelePosition32.y] = 7;}
    if(heroPosition3.x === TelePosition33.x && heroPosition3.y === TelePosition33.y) {
        matrix3[heroPosition3.x][heroPosition3.y] = 2;
        }else{
        matrix3[TelePosition33.x][TelePosition33.y] = 7;}
    if(heroPosition3.x === TelePosition34.x && heroPosition3.y === TelePosition34.y) {
        matrix3[heroPosition3.x][heroPosition3.y] = 2;
        }else{
        matrix3[TelePosition34.x][TelePosition34.y] = 7;}
    
    clear();
    Mapa3();
  }
}
  function clear(){
    var table = document.getElementById("game-table");
    table.innerHTML = ""
  };

  var Marker = 0;
  function spike(){
    if(MapCheck === 1){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition.x - moveby === spikes[i].x && heroPosition.y === spikes[i].y){
        heroPosition = {x:7, y:7};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
      }
    }
  } else if(MapCheck === 2){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition2.x - moveby === spikes[i].x && heroPosition2.y === spikes[i].y){
        heroPosition2 = {x: 24,y: 1};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
        if(Vidas === 0){
          clear();
          const CCList = document.querySelectorAll(".CC");
for (let i = 0; i < CCList.length; i++) {
  CCList[i].style.visibility = "visible";
}
        MapCheck = 4;
        }
        Keyboardevent.key = "w" === "p";
      }
    }
  } else if(MapCheck === 3){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition3.x - moveby === spikes[i].x && heroPosition3.y === spikes[i].y){
        heroPosition3 = {x: 28,y: 30};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
        if(Vidas === 0){
          clear();
          const CCList = document.querySelectorAll(".CC");
for (let i = 0; i < CCList.length; i++) {
  CCList[i].style.visibility = "visible";
}
        MapCheck = 4;
        }
        Keyboardevent.key = "w" === "p";
      }
    }
  } 
}

function spike2(){
  if(MapCheck === 1){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition.x + moveby === spikes[i].x && heroPosition.y === spikes[i].y){
        heroPosition = {x:7, y:7};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
      }
    }
  } else if(MapCheck === 2){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition2.x + moveby === spikes[i].x && heroPosition2.y === spikes[i].y){
        heroPosition2 = {x: 24,y: 1};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
        if(Vidas === 0){
          clear();
          const CCList = document.querySelectorAll(".CC");
for (let i = 0; i < CCList.length; i++) {
  CCList[i].style.visibility = "visible";
}
MapCheck = 4;}
        Keyboardevent.key = "s" === "o"
      }
    }
  } else if(MapCheck === 3){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition3.x + moveby === spikes[i].x && heroPosition3.y === spikes[i].y){
        heroPosition3 = {x: 28,y: 30};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
        if(Vidas === 0){
          clear();
          const CCList = document.querySelectorAll(".CC");
for (let i = 0; i < CCList.length; i++) {
  CCList[i].style.visibility = "visible";
}
MapCheck = 4;}
        Keyboardevent.key = "s" === "o"
      }
    }
  }
}

  function spike3(){
    if(MapCheck === 1){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition.x === spikes[i].x && heroPosition.y - moveby === spikes[i].y){
        heroPosition = {x:7, y:7};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
      }
    }
  } else if(MapCheck === 2){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition2.x === spikes[i].x && heroPosition2.y - moveby === spikes[i].y){
        heroPosition2 = {x: 24,y: 1};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
        if(Vidas === 0){
          clear();
          const CCList = document.querySelectorAll(".CC");
for (let i = 0; i < CCList.length; i++) {
  CCList[i].style.visibility = "visible";
}
MapCheck = 4;}
        Keyboardevent.key = "a" === "u"
       }
     }
   } else if(MapCheck === 3){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition3.x === spikes[i].x && heroPosition3.y - moveby === spikes[i].y){
        heroPosition3 = {x: 28,y: 30};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
        if(Vidas === 0){
          clear();
          const CCList = document.querySelectorAll(".CC");
for (let i = 0; i < CCList.length; i++) {
  CCList[i].style.visibility = "visible";
}
MapCheck = 4;}
        Keyboardevent.key = "a" === "u"
       }
     }
   }
  }

  function spike4(){
    if(MapCheck === 1){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition.x === spikes[i].x && heroPosition.y + moveby === spikes[i].y){
        heroPosition = {x:7, y:7};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
      }
    }
  } else if(MapCheck === 2){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition2.x === spikes[i].x && heroPosition2.y + moveby === spikes[i].y){
        heroPosition2 = {x: 24,y: 1};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
        if(Vidas === 0){
          clear();
          const CCList = document.querySelectorAll(".CC");
for (let i = 0; i < CCList.length; i++) {
  CCList[i].style.visibility = "visible";
}
MapCheck = 4;}
        Keyboardevent.key = "d" === "y"
      }
    }
  } else if(MapCheck === 3){
    for(let i = 0; i < spikes.length; i++){
      if (heroPosition3.x === spikes[i].x && heroPosition3.y + moveby === spikes[i].y){
        heroPosition3 = {x: 28,y: 30};
        console.log("no");
        updateMatrix();
        Vidas = Vidas -= 1;
        console.log(Vidas);
        Marker = 1;
        if(Vidas === 0){
          clear();
          const CCList = document.querySelectorAll(".CC");
for (let i = 0; i < CCList.length; i++) {
  CCList[i].style.visibility = "visible";
}
MapCheck = 4;}
        Keyboardevent.key = "d" === "y"
      }
    }
  }
}

function teleporting(){
  if(heroPosition3.x === TelePosition31.x && heroPosition3.y === TelePosition31.y){ 
  heroPosition3 = {x: 33,y: 30};
  updateMatrix();
  } else if(heroPosition3.x === TelePosition34.x && heroPosition3.y === TelePosition34.y){
    heroPosition3 = {x: 28,y: 24};
  updateMatrix();
  } else if(heroPosition3.x === TelePosition32.x && heroPosition3.y === TelePosition32.y){
    heroPosition3 = {x: 23,y: 30};
  updateMatrix();
  } else if(heroPosition3.x === TelePosition33.x && heroPosition3.y === TelePosition33.y){
    heroPosition3 = {x: 28,y: 35};
  updateMatrix();
  }
}
