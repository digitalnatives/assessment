import React from 'react';
import './style.css';

export default function App() {
  let textInput = React.createRef();
  function NumberTow() {
    var n = textInput.current.value;
    var numberRed = n.toString(),
      start,
      end,
      lengths,
      len,
      res,
      ints,
      first,
      sec,
      third,
      i,
      w,
      ww,
      and = 'and';
    if (parseInt(numberRed) === 0) {
      return 'zero';
    }

    first = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
    sec = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];
    third = ['', 'thousand', 'million', 'billion'];
    start = numberRed.length;
    lengths = [];
    while (start > 0) {
      end = start;
      lengths.push(numberRed.slice((start = Math.max(0, start - 3)), end));
    }
    len = lengths.length;
    if (len > third.length) {
      return '';
    }
    ww = [];
    for (i = 0; i < len; i++) {
      res = parseInt(lengths[i]);
      console.log(res);
      if (res) {
        ints = lengths[i].split('').reverse().map(parseFloat);
        if (ints[1] === 1) {
          ints[0] += 10;
        }
        if ((w = third[i])) {
          ww.push(w);
        }

        if ((w = first[ints[0]])) {
          ww.push(w);
        }
        if ((w = sec[ints[1]])) {
          ww.push(w);
        }

        if (ints[0] || ints[1]) {
          if (ints[2] || (!i && len > 1)) {
            ww.push(and);
          }
        }
        if ((w = first[ints[2]])) {
          ww.push(w + ' hundred');
        }
      }
    }

    const output = ww.reverse().join(' ');
    console.log(output);
  }
  return (
    <div>
      <h1>Number to string!</h1>
      <form>
        <input
          type="text"
          id="depositedAmount"
          maxLength={9}
          ref={textInput}
          pattern="[+-]?\d+(?:[.,]\d+)?"
          placeholder="Enter amount"
        />
        <input type="button" value="click" onClick={NumberTow} />
      </form>
    </div>
  );
}
