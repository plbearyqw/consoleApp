'use strict';
const checkStudent = require('../../main/checkStudent');
const printConsole = require('../../main/printConsole');

describe('result', () => {
    const student = `yjli,213,1班,数学:80,语文:100,英语:90`;
    const student1 = `yjchen,214,1班,数学:70,语文:80,英语:60`;
    const student2 = `yjliu,215,1班,数学:70,语文:90,英语:80`;
    const student3 = `yjlin,216,1班,数学:70,语文:80,英语:90`;
    let students = [];

    beforeEach(() => {
        students.push(checkStudent(student));
        students.push(checkStudent(student1));
        students.push(checkStudent(student2));
        students.push(checkStudent(student3));
    });

    it('return transcript when given student no,the format is correct', () => {
        let noStr = "213,214";
        let result = printConsole(students, noStr);
        expect(`成绩单
姓名|数学|语文|英语|平均分|总分
========================
yjli|80|100|90|90|270
yjchen|70|80|60|70|210
========================
全班总分平均数：240
全班总分中位数：225`).toEqual(result);
    });


});