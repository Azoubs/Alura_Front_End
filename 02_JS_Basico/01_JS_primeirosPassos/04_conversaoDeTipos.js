console.log("\nConversão de Tipos\n");

console.log(`"ano" + 2020 = ${"ano" + 2020}`);
console.log(`"2" + "2" = ${"2" + "2"}`);
console.log(`parseInt("2") + parseInt("2") = ${parseInt("2") + parseInt("2")}`)

// Multiplicação e divisão tenta converter automaticamente
console.log(`"7" / "2" = ${"7" / "2"}`);
console.log(`"7" * "2" = ${"7" * "2"}`);

// Não consegue converter "Ricardo" para número, retorna NaN
console.log(`"Ricardo" / "2" = ${"Ricardo" / "2"}`); // Not a Number (NaN)
console.log(6.5);
console.log(6,7);