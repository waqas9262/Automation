class Helpers {
  getUsersByAge(response, ageMin, ageMax) {
    const users = response.users.filter(
      (user) => user.age >= ageMin && user.age <= ageMax
    );

    return users.map((user) => user.name);
  }

  getUsersByRole(response, role) {
    const users = response.users.filter((user) => user.role === role);

    return users.map((user) => user.name);
  }

  getUsersByCountry(response, country) {
    const users = response.users.filter((user) => user.country === country);

    return users.map((user) => user.name);
  }

  getUsersByBalance(response, minBalance, maxBalance) {
    const users = response.users.filter(
      (user) => user.balance >= minBalance && user.balance <= maxBalance);
    return users.map((user) => user.name);
  }
}

export default new Helpers();
