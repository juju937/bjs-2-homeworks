function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function (...marks) {
    if (!this.marks || this.marks.length === 0) {
      this.marks = [...marks]; 
    } else {
        this.marks.push(...marks);
    }
  }
  
  Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length === 0) {
      return 0;
    }
    return this.marks.reduce((previousMark, nextMark) => previousMark + nextMark, 0 ) / this.marks.length;
  }
  
  Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subjectName;
    this.excluded = reason;
  }
