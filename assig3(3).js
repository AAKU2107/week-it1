const studentRecords = {
  101: {
    name: "Aarav Mehta",
    age: 16,
    grade: "10th",
    subjects: ["Math", "Science", "English"],
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001"
    }
  },
  102: {
    name: "Sneha Kulkarni",
    age: 17,
    grade: "11th",
    subjects: ["Biology", "Chemistry", "English"],
    address: {
      city: "Pune",
      state: "Maharashtra",
      pincode: "411001"
    }
  },
  103: {
    name: "Rahul Sharma",
    age: 15,
    grade: "9th",
    subjects: ["Math", "History", "Geography"],
    address: {
      city: "Nagpur",
      state: "Maharashtra",
      pincode: "440001"
    }
  }
};

function addStudent(id, name, age, grade, subjects, address) {
  studentRecords[id] = { name, age, grade, subjects, address };
}

function updateStudent(id, updates) {
  if (studentRecords[id]) {
    Object.assign(studentRecords[id], updates);
  }
}

function deleteStudent(id) {
  delete studentRecords[id];
}

function listStudents() {
  Object.keys(studentRecords).forEach(id => {
    console.log(id, studentRecords[id]);
  });
}

function searchByCity(city) {
  Object.values(studentRecords).forEach(student => {
    if (student.address.city.toLowerCase() === city.toLowerCase()) {
      console.log(student);
    }
  });
}

function studentsInSubject(subject) {
  Object.values(studentRecords).forEach(student => {
    if (student.subjects.includes(subject)) {
      console.log(student.name);
    }
  });
}

function averageAge() {
  const total = Object.values(studentRecords).reduce((sum, s) => sum + s.age, 0);
  const avg = total / Object.keys(studentRecords).length;
  console.log(avg.toFixed(2));
}

addStudent(104, "Isha Deshmukh", 16, "10th", ["Math", "English"], {
  city: "Mumbai",
  state: "Maharashtra",
  pincode: "400002"
});

updateStudent(101, { age: 17, grade: "11th" });

deleteStudent(102);

listStudents();

searchByCity("Mumbai");

studentsInSubject("Math");

averageAge();
