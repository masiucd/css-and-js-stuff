class User {
  public name: string;
  private _age: number;
  protected email: string;

  constructor(name: string) {
    this.name = name;
    this._age = 22;
    this.email = `${this.name}@example.com`;
  }

  get age(): number {
    return this._age;
  }

  set mutateAge(newAge: number) {
    this._age = newAge;
  }
  get myEmail() {
    return this.email;
  }
}

const alan = new User("Alan");

// console.log(alan.myEmail);
// console.log(alan.name);
// console.log(alan.age);
// alan.mutateAge = 55;
// console.log(alan.age);
