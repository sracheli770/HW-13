import { Utils } from './utils.js';
function greet(person) {
    return "Hello " + person.name;
}
const me = { name: 'racheli', age: 22 };
console.log(me);
console.log(me.name + me.age);
console.log(greet(me));
function isTruthy(val) {
    if (val) {
        console.log(val + " is Truthy");
    }
    else {
        console.log(val + " is falsy");
    }
}
isTruthy(true); //true
isTruthy({}); //t
isTruthy([]); //t
isTruthy(42); //t
isTruthy("0"); //t
isTruthy("false"); //t
isTruthy(new Date()); //t
isTruthy(-42); //t
isTruthy(12n); //t
isTruthy(3.14); //t
isTruthy(-3.14); //t
isTruthy(Infinity); //t
isTruthy(-Infinity); //t
isTruthy(0); //f
isTruthy(""); //f
isTruthy(false); //f
isTruthy(NaN); //f
isTruthy(null); //f
isTruthy(undefined); //f
/*const contactExample = document.getElementById('contact-example') as HTMLDivElement;
let contacts2: Contact[] = [];
const p1 = { fName: 'Moe', lName: 'Levi', phone: '54987456321' };
const p2 = { fName: 'Dana', lName: 'Israel', phone: '54867656341' };
 contacts2.push(p1);
contacts2.push(p2);
contacts2.forEach(c => {
    contactExample.innerHTML += `First Name: ${c.firstName}, Last Name: ${c.lastName}, Phone Number: ${c.phone} <br>`
}) */
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const phone = document.getElementById('phone');
const btn = document.getElementById('btn');
const contactsDiv = document.getElementById('contact');
class Contact {
    firstName;
    lastName;
    phone;
    timeStamp;
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.timeStamp = Utils.currentDateString();
    }
    toString() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Phone Number: ${this.phone}`;
    }
}
const contacts = [];
//save new
btn.addEventListener('click', () => {
    const c = new Contact(firstName.value, lastName.value, phone.value);
    contacts.push(c);
    const newContact = document.createElement('div');
    newContact.innerText = c.toString();
    //remove when click
    newContact.addEventListener('click', () => {
        newContact.remove();
        let index = contacts.findIndex(a => a.timeStamp === c.timeStamp);
        contacts.splice(index, 1);
        localStorage.setItem('contacts', JSON.stringify(contacts));
    });
    contactsDiv.appendChild(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
});
function loadDocument() {
    const str = localStorage.getItem('contacts') ?? "";
    const obj = JSON.parse(str);
    obj.forEach(o => {
        const c = new Contact(o.firstName, o.lastName, o.phone);
        contacts.push(c);
        const write = document.createElement('div');
        write.innerText = c.toString();
        write.addEventListener('click', () => {
            write.remove();
            let index = contacts.findIndex(a => a.timeStamp === c.timeStamp);
            contacts.splice(index, 1);
            localStorage.setItem('contacts', JSON.stringify(contacts));
        });
        contactsDiv.appendChild(write);
    });
}
loadDocument();
