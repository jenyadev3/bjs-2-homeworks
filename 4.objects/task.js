function Student(name, gender, age) {
  this.marks = []
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if(this.excluded) {
    return;
  }
  if(!Array.isArray(this.marks)) {
    this.marks = [];
  }
  this.marks.push(...marksToAdd); 
}

Student.prototype.getAverage = function () {
  if(!Array.isArray(this.marks) || this.marks.length === 0 ) {
    return 0;
  }
  let sum = this.marks.reduce((acc, curr) => acc + curr, 0);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
