export class IUser {
  id?: string
  name?: string
  email?: string
  password?: string
  address?: string
  phone?: string
  profile?: string
  roleString?: string
}

export class User implements IUser {
  constructor(
      public id?: string,
      public name?: string,
      public email?: string,
      public password?: string,
      public address?: string,
      public phone?: string,
      public profile?: string,
      public roleString?: string
  ) {}
}
