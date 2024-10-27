<template>
  <div class="calculator-container">
    <h1>Calculadora Aritmética</h1>
    <div class="calculator">
      <input
        type="number"
        v-model.number="number1"
        @input="calculate"
        placeholder="Digite o primeiro número"
      />
      <select v-model="operation" @change="calculate">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        v-model.number="number2"
        @input="calculate"
        placeholder="Digite o segundo número"
      />
      <p class="result">Resultado: {{ result }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0,
      operation: "+",
      result: 0,
    };
  },
  methods: {
    calculate() {
      switch (this.operation) {
        case "+":
          this.result = this.number1 + this.number2;
          break;
        case "-":
          this.result = this.number1 - this.number2;
          break;
        case "*":
          this.result = this.number1 * this.number2;
          break;
        case "/":
          this.result = this.number2 !== 0 ? this.number1 / this.number2 : "Erro: Divisão por zero";
          break;
      }
    },
  },
  watch: {
    number1: "calculate",
    number2: "calculate",
    operation: "calculate",
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
