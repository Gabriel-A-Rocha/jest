function addField(field) {
  const data = { one: 1 };
  data[field] = 2;
  //console.log(data);
  return data;
}

module.exports = addField;
