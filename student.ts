export class Student {
    code: string;
    id_number: number;
    age: number;
    address: string;
    phone_number: number;
  
    constructor(code: string, id_number:number, age:number, address:string, phone_number:number) {
      this.code = code;
      this.id_number = id_number;
      this.age = age;
      this.address = address;
      this.phone_number = phone_number;
    }
  }