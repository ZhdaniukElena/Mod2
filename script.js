/*
   Есть три курорта: taba, sharm или hurgada.
   
   Необходимо через prompt попросить ввести число, от 1 до 3-х.
   
   В тексте prompt необходимо написать какое число соотвествует
   какому курорту, на ваш выбор.
   
   После этого вывести сообщение о том, что пользователь 
   выбрал такой-то курорт или сообщение о том, что введено
   число, варианта курорта для которого не было.
*/
let egyptTaba = 'Taba';
let egyptSharm = 'Sharm';
let egyptHurgada = 'Hurgada';

let res;
const questionary = prompt('Введите номер курорта от 1 до 3 (1 - Taba, 2 - Sharm, 3 - Hurgada):', '1');

switch (questionary) {
  case '1': res = alert( `Вы выбрали курорт ${egyptTaba}` ); break;
  case '2': res = alert( `Вы выбрали курорт ${egyptSharm}` ); break;
  case '3': res = alert( `Вы выбрали курорт ${egyptHurgada}` ); break;
  case null: res = ''; break;
  default: res = alert( 'Данное число не соответствует никакому курорту' );
}