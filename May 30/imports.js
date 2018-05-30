// import { m1 } from './classes';
import * as myClassFile from './classes';
class classes extends myClassFile.m1.school {
    constructor(standard, strength, school) {
        super(school);
        this.standard = standard;
        this.strength = strength;
    }
    printSchoolName() {
        console.log(this.schoolName);
    }
}
var ninthClass = new classes(9, 30, 'ABC school');
ninthClass.printSchoolName();
//# sourceMappingURL=imports.js.map