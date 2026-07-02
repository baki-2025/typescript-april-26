class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age =age;
    }
    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

class Student extends User{
 studentId: number;


 constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }


}

let student1 = new Student("momin", 37, 1209987);
student1.display();

let user1 = new User("Aminul Islam", 29);
user1.display();