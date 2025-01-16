class Person {
    constructor(name, age, cpf, email, phone, profession) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
        this.email = email;
        this.phone = phone;
        this.profession = profession;
    }
}

class PersonManager {
    constructor() {
        this.people = JSON.parse(localStorage.getItem('people')) || [];
        this.render();
    }

    addPerson(person) {
        this.people.push(person);
        this.save();
    }

    editPerson(index, updatedPerson) {
        this.people[index] = updatedPerson;
        this.save();
    }

    deletePerson(index) {
        this.people.splice(index, 1);
        this.save();
    }

    save() {
        localStorage.setItem('people', JSON.stringify(this.people));
        this.render();
    }

    render() {
        const list = document.getElementById('personList');
        list.innerHTML = '';
        this.people.forEach((person, index) => {
            const personDiv = document.createElement('div');
            personDiv.className = 'person';
            personDiv.innerHTML = `
                <p><strong>Nome:</strong> ${person.name}</p>
                <p><strong>Idade:</strong> ${person.age}</p>
                <p><strong>CPF:</strong> ${person.cpf}</p>
                <p><strong>Email:</strong> ${person.email}</p>
                <p><strong>Telefone:</strong> ${person.phone}</p>
                <p><strong>Profissão:</strong> ${person.profession}</p>
                <button onclick="personManager.edit(${index})">Editar</button>
                <button onclick="personManager.delete(${index})">Excluir</button>
            `;
            list.appendChild(personDiv);
        });
    }
}

const personManager = new PersonManager();

document.getElementById('personForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const profession = document.getElementById('profession').value;

    const person = new Person(name, age, cpf, email, phone, profession);
    personManager.addPerson(person);

    this.reset();
});

PersonManager.prototype.edit = function (index) {
    const person = this.people[index];
    document.getElementById('name').value = person.name;
    document.getElementById('age').value = person.age;
    document.getElementById('cpf').value = person.cpf;
    document.getElementById('email').value = person.email;
    document.getElementById('phone').value = person.phone;
    document.getElementById('profession').value = person.profession;

    this.deletePerson(index);
};

PersonManager.prototype.delete = function (index) {
    this.deletePerson(index);
};
