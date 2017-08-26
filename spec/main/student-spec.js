'use strict';
const checkStudent = require('../../main/checkStudent');
const Student = require('../../main/student');

describe('student', () => {
    const studentStr = `yjli,213,a班,数学:100,英语:100,语文:100`;
    const errorStudentStr = `yjli,a班,数学:100,英语,100,语文:100`;

    it('return Student when given student String ,the format is correct', () => {
        let result = checkStudent(studentStr);
        let student = new Student("yjli", "213", "a班",[{"course":"数学", "score":100}, {"course":"英语","score":100}, {"course":"语文","score":100}]);
        expect(student).toEqual(result);
    });

    it('return Student when given student String ,wrong format', () => {
        let result = checkStudent(errorStudentStr);
        expect(-1).toEqual(result);
    });
});