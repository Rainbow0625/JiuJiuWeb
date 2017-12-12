export class User {
  id:number;
  username:string;
  password:string;
}

export class Auth {
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
}
