let studentList = [];

const nameInput = document.querySelector('.nameInput');
const emailInput = document.querySelector('.emailInput');
const phoneInput = document.querySelector('.phoneInput');
const addressInput = document.querySelector('.addressInput');
const genderInput = document.querySelector('.gender');
const saveButton = document.querySelector('.Save');
const searchInput = document.querySelector('.searching');
const searchingButton = document.querySelector('.search');
const sortButton = document.querySelector('.apha-b');
const studentTable = document.querySelector('.studentTable ');

saveButton.addEventListener('click', function () {
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const address = addressInput.value;
    const gender = genderInput.value;

    const student = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        gender: gender
    };

    studentList.push(student);

    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';

    displayStudentList();
});

function displayStudentList() {
    studentTable.innerHTML = '';

    studentList.forEach((student, index) => {
        const listAll = document.createElement('tr');
        listAll.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.address}</td>
      <td>${student.gender}</td>
      <td>
        <button class="edit" onclick="editStudent(${index})">Sửa</button>
        <button class="delete" onclick="deleteStudent(${index})">Xóa</button>
      </td>
    `;
        studentTable.appendChild(listAll);
    });
}

searchingButton.addEventListener('click', function () {
    const word = searchInput.value.toLowerCase();

    const listStudents = studentList.filter(student => {
        return (
            student.name.toLowerCase().includes(word) 
        )
    });

    displayFilteredStudentList(listStudents);
});

function displayFilteredStudentList(listStudents) {
    studentTable.innerHTML = '';

    listStudents.forEach((student, index) => {
        const listAll = document.createElement('tr');
        listAll.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.address}</td>
      <td>${student.gender}</td>
      <td>
        <button class="edit" onclick="editStudent(${index})">Sửa</button>
        <button class="delete" onclick="deleteStudent(${index})">Xóa</button>
      </td>
    `;
        studentTable.appendChild(listAll);
    });
}
sortButton.addEventListener('click', function () {
    studentList.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    displayStudentList();
});

function deleteStudent(index) {
    studentList.splice(index, 1);

    displayStudentList();
}

function editStudent(index) {
    const student = studentList[index];


    nameInput.value = student.name;
    emailInput.value = student.email;
    phoneInput.value = student.phone;
    addressInput.value = student.address;
    genderInput.value = student.gender;


    deleteStudent(index);
}