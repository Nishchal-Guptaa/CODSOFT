function appendValue(value) {
    document.getElementById('display').value += value;
  }

  function appendOperator(operator) {
    document.getElementById('display').value += operator;
  }

  function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').innerText = '';
  }

  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('result').innerText = '= ' + result;
    } catch (error) {
      document.getElementById('result').innerText = 'Error';
    }
  }