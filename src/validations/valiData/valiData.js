function valiData(data) {
  let today = new Date();
  let dateInput = new Date(data);
  if (data == "" || dateInput > today) {
    return {
      valido: false,
      msg: "Insira uma data válida!",
    };
  } else {
    return {
      valido: true,
      msg: "",
    };
  }
}

export default valiData;
