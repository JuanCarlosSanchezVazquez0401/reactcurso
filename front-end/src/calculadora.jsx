import { useState } from 'react';

export function Calculadora({ operacion }) {
  const [op, setOP] = useState('');
  const [multiplicar, setMultiplicar] = useState('*');
  const [dividir, setDividr] = useState('/');
  const [sumar, setSumar] = useState('+');
  const [restar, setRestar] = useState('-');
}
