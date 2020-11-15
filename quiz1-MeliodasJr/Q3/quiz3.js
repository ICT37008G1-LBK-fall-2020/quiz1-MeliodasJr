function getTopStudents(studentsArray1, studentsArray2) {
    const gaertianebuliMasivebi = [...studentsArray1, ...studentsArray2];
  
    const dalagebuliStudentebi = gaertianebuliMasivebi.sort((studentebi1, studentebi2) => {
      return studentebi2.gpa - studentebi1.gpa;
    });
  
    while (dalagebuliStudentebi.length > 5) {
      dalagebuliStudentebi.pop();
    }
  
    return dalagebuliStudentebi;
  }
  
  console.log(getTopStudents
    (
      [
        { id: 0, name: "nana", gpa: 1.3 },
        { id: 1, name: "luka", gpa: 2 },
        { id: 2, name: "gio", gpa: 2.5 },
      ],
      [
        { id: 0, name: "nukri", gpa: 2.4 },
        { id: 1, name: "ana", gpa: 2.5 },
        { id: 2, name: "lasha", gpa: 3.9 },
      ]
    )
  );

  //ბოლო მოთხოვნა ვერ შევასრულე