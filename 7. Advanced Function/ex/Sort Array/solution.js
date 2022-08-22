function filterEmployees(data, criteria) {
  let array = JSON.parse(data);

  let searchByValue = criteria.split("-")[0];
  let value = criteria.split("-")[1];

  let  index  = 0;
  switch (searchByValue){

      case "all":
          array.forEach(obj => console.log(`${index++}. ${obj.first_name} ${obj.last_name} - ${obj.email}`));
          break;

      case "first_name":
          array.filter(obj => obj.first_name === value)
              .forEach(obj => console.log(`${index++}. ${obj.first_name} ${obj.last_name} - ${obj.email}`));
          break;

      case "last_name":
          array.filter(obj => obj.last_name === value)
              .forEach(obj => console.log(`${index++}. ${obj.first_name} ${obj.last_name} - ${obj.email}`));
          break;

      case "gender":
          array.filter(obj => obj.gender === value)
              .forEach(obj => console.log(`${index++}. ${obj.first_name} ${obj.last_name} - ${obj.email}`));
          break;

      case "id":
          array.filter(obj => obj.id === Number(value))
              .forEach(obj => console.log(`${index++}. ${obj.first_name} ${obj.last_name} - ${obj.email}`));
          break;

      case "email":
          array.filter(obj => obj.email === value)
              .forEach(obj => console.log(`${index++}. ${obj.first_name} ${obj.last_name} - ${obj.email}`));
          break;

  }

}

filterEmployees('[{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"}, {"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"}, {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"},{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"}]', 'last_name-Johnson')