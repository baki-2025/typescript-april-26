"use strict";
class User {
    userName;
    age;
    constructor(userName, age) {
        this.userName = userName;
        this.age = age;
    }
}
class Student extends User {
    studentId;
    constructor(userName, age, studentId) {
        super(userName, age);
        this.studentId = studentId;
    }
}
let student1 = new Student("momin", 37, 1209987);
student1.display();
let user1 = new User("Aminul Islam", 29);
user1.display();
