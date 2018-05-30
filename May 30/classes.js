// class
class student {
    constructor(name, rollno, marks) {
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
    }
    printAllValues() {
        console.log(this.name, this.marks, this.rollno);
    }
}
var student1 = new student('Nitin', 12330, 50);
var student2 = new student('Amit', 122340, 50);
student2.printAllValues();
// Access specifiers
// public - default - anyone (derived classes, instances) can access 
// protected - only derived classes can access but not instances
// private - only base class access
export var m1;
(function (m1) {
    class school {
        // private schoolName;
        constructor(name) {
            this.schoolName = name;
        }
    }
    m1.school = school;
})(m1 || (m1 = {}));
//# sourceMappingURL=classes.js.map