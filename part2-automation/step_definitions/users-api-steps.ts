const { usersProxy } = inject();

Before(() => {
  state = {};
});

When("the employee gets data from usersApi", async () => {
  await usersProxy.getUsers(state);
});

When("the employee creates a new user", async (dataTable: any) => {
  const userToCreate = mapUserToCreate(dataTable);
  const email = `${new Date().getTime()}@test.com`;

  // Call proxy to create user
  // await usersProxy.createUser(
  //   userToCreate.name,
  //   email,
  //   userToCreate.gender,
  //   userToCreate.status,
  //   state
  // );
});

Then("data should be provided in the response", () => {
  usersProxy.validateGetUsersReponse(state);
});

const mapUserToCreate = (
  dataTable: any
): { name: string; gender: string; status: string } => {
  const user = dataTable.parse().rawData[1];
  return {
    name: user[0],
    gender: user[1],
    status: user[2],
  };
};
