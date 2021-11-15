const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Hosuston",
      age: 21,
    },
  ],
  // 1. A method called “findPerson” that takes two arguments, a type (either a student or teacher), and an id. It will return a particular object of that person.
  findPerson : function (typeOfPerson, id){ 
    const person = this[typeOfPerson].find(person => person.id == id);
    return person;
  },
  //2. A method called “assignStudent” that takes two arguments, a student’s id and a subject. 
  // Assign all of the students to the first available teacher who teaches that subject and who is not in full capacity. If all of the teachers are in full capacity log to the console “Sorry, no available teachers left”.
  
  assignStudent : function (id, subject){
    // find the teacher who teaches this subject
    const teacher = this["teachers"].find(teacher => teacher.subjects.find(sub => sub === subject.toLowerCase()));
    // find if there is any room left 
    // if no log to console
    if (teacher.capacityLeft < 1) return "Sorry, no available teachers left";
    else {
        //  assign the student to the teachers list
        teacher.students.push(this.findPerson("students",id).name);
    }
  },
  //  A method called “assignTeachersSubject” that takes two arguments, the teacher’s id, a new subject.
  // Assign the new subject to that particular teacher if that subject doesn’t exist in their array of subjects
  assignTeachersSubject: function(id, newSub){
    // find the teacher
    const teacher = this.findPerson("teachers",id);
    // check if the subject exist in the array of subjects
    if (!teacher.subjects.includes(newSub)) teacher.subjects.push(newSub);

  }
};


