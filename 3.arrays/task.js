function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  let filteredPeople = users.filter(item => item.gender === gender);
  let averageAge = filteredPeople.map(item => item.age).reduce((acc, curr) => acc + curr, 0) / filteredPeople.length;
  return filteredPeople.length === 0 && ! filteredPeople.includes(gender) ? 0 : averageAge;
}