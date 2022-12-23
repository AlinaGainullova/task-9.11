
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionsOutput').innerText = initPerson.professions;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
};

document.getElementById('btnGenerate').addEventListener('click', function () {
 window.onload();
})

document.getElementById('btnCancel').addEventListener('click', function () {
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('patronymicOutput').innerText = "";
    document.getElementById('professionsOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
})