abstract class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age =age;
    }
     abstract display(): void; 
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

