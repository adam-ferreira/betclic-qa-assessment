const { I } = inject();

class UsersProxy {
  private token: string =
    "";
  private headers = {
    Accept: "*/*",
    Authorization: `Bearer ${this.token}`,
  };
  private usersApiUrlPath = "https://gorest.co.in/public/v2/users";

  public async getUsers(state: any): Promise<void> {
    const response: any = await I.sendGetRequest(
      this.usersApiUrlPath,
      this.headers
    );

    state.code = response.status;
    state.users = response.users;
  }

  public validateGetUsersReponse(state: any): void {
    I.assertEqual(state.code, 200);
    for (const user of state.users) {
      this.validateUserData(user);
    }
  }

  public validateCreateUserReponse(state: any): void {
    I.assertEqual(state.code, 201);
    this.validateUserData(state.user);
  }

  private validateUserData(user: {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }): void {
    I.assertToBeA(user.id, "number");
    I.assertToBeA(user.name, "string");
  }
}

export = new UsersProxy();
