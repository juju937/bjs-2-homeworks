function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every((element, index) => {
      if (element === arr2[index]) {
        return true;
      }
      return false;
    });
  }
  return false;
}

function getUsersNamesInAgeRange(users, gender) {
  const usersFound = people.filter((user) => user.gender === gender);
    if (usersFound.length === 0 || users.length === 0) {
        return 0;
        }
  return usersFound.reduce((prev, user) => prev + user.age, 0) / usersFound.length;
}
