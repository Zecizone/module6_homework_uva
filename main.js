import './style.css'
import { displayNumberProperties } from './displayNumberProperties.js'
import { validatePromoCode } from './validatePromoCode.js'
import { calculateAge } from './calculateAge.js'
import { formattedAge } from './formattedAge.js'
import { calculateCredit } from './calculateCredit.js'
import { validatePalindrome } from './validatePalindrome.js'
import { removeDuplicates } from './removeDuplicates.js'
import { generateNumberArray } from './generateNumberArray.js'
import { printTicTacToeBoard } from './printTicTacToeBoard.js'
import { convertingArray } from './convertingArray.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Задачи из модуля 5 и 6 Skillfactory</h1>
      <h2>Задание 5.10.1</h2>
      <p>Напишите скрипт, который с помощью метода&nbsp;<code>prompt()</code>&nbsp;запрашивает у пользователя любое число. И после этого выводит на экран в методе&nbsp;<code>alert()</code>:</p>
      <ol>
        <li>в первой строке — само число;</li>
        <li>во второй строке — квадрат этого числа;</li>
        <li>в третьей строке — куб этого числа.</li>
      </ol>
      <p><b>Входные данные</b>: 3.</p>
      <p><b>Выходные данные</b>: 3, 9, 27</p>
      <button id="forNumberProperties" type="button">Кликни чтобы запустить</button>

      <h2>Задание 5.10.2</h2>
      <p>На сайте имеется поле для ввода промокода. Пользователь может заполнить его и получить скидку, если промокод верен.</p>
      <p>Ваша задача написать проверку для промокода: «скидка». Используйте&nbsp;<code>prompt()</code>&nbsp;для получения значений, а&nbsp;<code>alert()</code>&nbsp;для вывода фразы «Промокод применён» или «Промокод не работает». Учитывайте случаи когда пользователь может ввести «скиДка», «Скидка», «СКИДКА».</p>
      <p><b>Входные данны</b>е: СкиДкА</p>
      <p><b>Выходные данные</b>: Промокод применён</p>
      <button id="promoCodeValidation" type="button">Кликни чтобы запустить</button>

      <h2>Задание 5.10.3</h2>
      <p>
          С помощью метода&nbsp;<code>prompt()</code>&nbsp;получите от пользователя его имя, а затем год рождения.
        </p>
        <p>
          Сохраните эти данные в переменные.
        </p>
        <p>
          Затем вычислите возраст пользователя и выведите с помощью&nbsp;<code>alert()</code>&nbsp;сообщение вида: «Владимир: 25».
        </p>
        <p>
          Используйте для решения шаблонные строки.
        </p>
        <p>
        <b>Входные данные:</b> Игорь и 2000
        </p>
        <p>
        <b>Выходные данные:</b> Игорь: 23
        </p>
      <button id="ageCalculation" type="button">Кликни чтобы запустить</button>

      <h2>Задание 5.10.4</h2>
      <p>
        Перепишите задание 5.10.3.
      </p>
      <p>
        Определите остаток от деления количества лет на 10. В зависимости от этого выведите в алерт «Антон: 21 год» или «Антон: 24 года», или «Антон: 25 лет» и т.д. То есть для всех чисел с остатком 1 должно быть «_год», для чисел с остатком 2, 3, 4 – «_года», а для всех остальных – «_лет».
      </p>
      <p>
        Вы можете использовать для этого условные конструкции&nbsp;<code>if-else</code>&nbsp;или&nbsp;<code>switch-case</code>.
      </p>
      <p>
      <b>Входные данные:</b> Игорь и 2000.
      </p>
      <p>
      <b>Выходные данные:</b> Игорь: 23 года
      </p>
      <button id="formattedAge" type="button">Кликни чтобы запустить</button>

      <h2>Задание 5.10.5</h2>
      <p>
        Напишите программу, которая будет сообщать пользователю, на какую сумму он может взять кредит. Сумма кредита зависит от возраста пользователя.
      </p>
      <p>
        Клиент может получить только сумму, кратную 1000.
      </p>
      <p>
        В программе должна присутствовать проверка на вводимое пользователем значение. Допускаются только значения типа&nbsp;<code>number</code>.
      </p>
      <p>
        Для ввода значения пользователем используйте функцию&nbsp;<code>prompt()</code>. Для информационного сообщения используйте функцию&nbsp;<code>alert()</code>.
      </p>
          <div class="border">
          <h3>Кредитный калькулятор</h3>
          <ul>
            <li>если клиенту нет 18 лет, то кредит он не получит</li>
            <li>если клиенту от 18 до 21, то он может получить максимум 50000</li>
            <li>если клиенту от 22 до 35, то он сможет получить максимум 400000</li>
            <li>если клиенту от 36 до 65, то ему одобрят максимум 1000000</li>
            <li>кредит могут выдавать суммами кратными 10000.</li>
          </ul>
          <button id="creditCalculation" type="button">Кликни чтобы рассчитать</button>
          </div>

      <h2>Задание 6.6.1</h2>
      <p>
        Напишите проверку, которая позволит определить, является слово палиндромом или нет.
      </p>
      <p>
        Если является, то выведите в консоль фразу «Слово &lt;слово&gt; является палиндромом». Если нет — «Слово &lt;слово&gt; не является палиндромом».
      </p>
      <i>Пример №1:</i>
      <p>
      <b>Входные данные</b>:&nbsp;Довод
      </p>
      <p>
      <b>Выходные данные</b>:&nbsp;Слово Довод является палиндромом
      </p>
      <i>Пример №2:</i>
      <p>
      <b>Входные данные</b>:&nbsp;Сантимент
      </p>
      <p>
      <b>Выходные данные</b>:&nbsp;Слово Сантимент не является палиндромом
      </p>
      <button id="palindromeValidation" type="button">Кликни чтобы проверить</button>

      <h2>Задание 6.6.2</h2>
        <p>
          Есть массив:
        </p>
        <pre>    const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
        </pre>
        <p>
          Создайте новый массив и запишите в него только уникальные значения из массива&nbsp;<code>arr</code>. Выведите получившийся массив в консоль.
        </p>
        <p>
          Входящие значения:
        </p>
        <pre>    const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
        </pre>
        <p>
          Выходные данные:
        </p>
        <pre>    [1, 2, 3, 5, 4, 'they', 'don\'t', 'know', 'that', 'we'];</pre>
        <h3 class="read-the-docs">Вывод алертом</h3>
      <button id="duplicateRemoval" type="button">Кликни чтобы запустить</button>

      <h2>Задание 6.6.3</h2>
      <p>
        Запросите у пользователя любое число. На основании ответа создайте массив и заполните его числами от нуля до введённого числа. Не забудьте привести полученное от пользователя значение к типу&nbsp;<code>number</code>.
      </p>
      <p>
        Входные данные:&nbsp;5
      </p>
      <p>
        Выходные данные:&nbsp;[0, 1, 2, 3, 4, 5]
      </p>
      <h3 class="read-the-docs">Вывод алертом</h3>
      <button id="numberArrayGeneration" type="button">Кликни чтобы запустить</button>

      <h2>Задание 6.6.4</h2>
      <p>
        С помощью цикла нарисуйте в консоли заполненное поле для игры «Крестики-нолики». Выведите результат в консоль.
      </p>
      <p>
      <b>Выходные данные:</b><br>
        x o x<br>
        o x o<br>
        x o x
      </p>
      <h3 class="read-the-docs">Вывод алертом</h3>
      <button id="ticTacToeBoardPrinting" type="button">Кликни чтобы запустить</button>

      <h2>Задание 6.6.5</h2>
      <p>
        Есть объект&nbsp;<code>obj</code>. В одном из ключей объекта — массив. Добавьте в новый массив&nbsp;<code>arrValues</code>&nbsp;значения всех ключей объекта. Если значение — массив, добавьте каждый элемент в массив&nbsp;<code>arrValues</code>.
      </p>
      <p>
        Выведите получившийся массив в консоль.
      </p>
      <p>
        Входные данные:
      </p>
      <pre>    const obj = {
              some: 'some',
              dom: 'text',
              arr: [1, 2, 3, 4, 5],
              tom: 'there'
          };
      </pre>
      <p>
        Выходные данные:&nbsp;<code>["some", "text", 1, 2, 3, 4, 5, "there"]</code>
      </p>
      <h3 class="read-the-docs">Вывод алертом</h3>
      <button id="arrayConverting" type="button">Кликни чтобы запустить</button>
    
    <p class="read-the-docs text-align">
      Спасибо что проверили ^_^
    </p>
  </div>
`

function setupEventListener(button, action) {
    button.addEventListener("click", action);
  }
  
  setupEventListener(document.querySelector('#forNumberProperties'), displayNumberProperties);
  setupEventListener(document.querySelector('#promoCodeValidation'), validatePromoCode);
  setupEventListener(document.querySelector('#ageCalculation'), calculateAge);
  setupEventListener(document.querySelector('#formattedAge'), formattedAge);
  setupEventListener(document.querySelector('#creditCalculation'), calculateCredit);
  setupEventListener(document.querySelector('#palindromeValidation'), validatePalindrome);
  setupEventListener(document.querySelector('#duplicateRemoval'), removeDuplicates);
  setupEventListener(document.querySelector('#numberArrayGeneration'), generateNumberArray);
  setupEventListener(document.querySelector('#ticTacToeBoardPrinting'), printTicTacToeBoard);
  setupEventListener(document.querySelector('#arrayConverting'), convertingArray);