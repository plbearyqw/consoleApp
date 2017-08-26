class Student{
          constructor(name, no, klass,results){
                    this.name = name;
                    this.no = no;
                    this.klass = klass;
                    this.results = results;
                    this.totalScore = callTotalScore(results);
                    this.averageScore = callAverageScore(results);
          }
}

function callAverageScore(results){
          return (callTotalScore(results) / results.length) * 100 / 100;
}

function callTotalScore(results){
          return results.reduce((sum, result) =>{
                    return sum + result.score;
          }, 0.0);
}

module.exports = Student;