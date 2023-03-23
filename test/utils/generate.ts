import fake from 'fake'




export function generateUserDate(override = {}) {
  return {
    id: fake.random.number(),
    firstName: fake.name.firstName(),
    lastName: fake.name.lastName(),
    email: fake.internet.email(),
    posts: [],
    comments: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override
  }
}

export function generateUsersDate(amount: number) {
  const usersArray = []
  for (let c = 0; c <= amount; c++) {
    usersArray.push(generateUserDate())
  };
  return usersArray
}




