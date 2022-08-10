function verificarPali(string) {
  if (!string) return "Inexistente";

  return string.split("").reverse().join("") === string;
}

console.log(verificarPali("amor"));
