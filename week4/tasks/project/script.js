class ContactManager {
    constructor() {
        this.contacts = [];
        this.renderContacts();
    }

    addContact(name, phone) {
        const contact = {
            name,
            phone,
            dateAdded: new Date()
        };
        this.contacts.push(contact);
        this.renderContacts();
    }

    editContact(index, name, phone) {
        if (this.contacts[index]) {
            this.contacts[index].name = name;
            this.contacts[index].phone = phone;
            this.renderContacts();
        }
    }

    deleteContact(index) {
        if (index >= 0 && index < this.contacts.length) {
            this.contacts.splice(index, 1);
            this.renderContacts();
        }
    }

    searchContacts(query) {
        return this.contacts.filter(c =>
            c.name.toLowerCase().includes(query.toLowerCase()) ||
            c.phone.includes(query)
        );
    }

    sortContacts(by) {
        if (by === 'name') {
            this.contacts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (by === 'dateAdded') {
            this.contacts.sort((a, b) => a.dateAdded - b.dateAdded);
        }
        this.renderContacts();
    }

    renderContacts() {
        const contactList = document.getElementById('contactList');
        contactList.innerHTML = '';
        this.contacts.forEach((contact, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="default.png" alt="Contact" class="contact-img"> <!-- Ensure you have a default image -->
                <span>${contact.name} - ${contact.phone}</span>
                <button onclick="contactManager.deleteContact(${index})">Delete</button>
            `;
            contactList.appendChild(li);
        });
    }
}

const contactManager = new ContactManager();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    contactManager.addContact(name, phone);
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});

function searchContacts() {
    const query = document.getElementById('search').value;
    const filteredContacts = contactManager.searchContacts(query);
    contactManager.contacts = filteredContacts;
    contactManager.renderContacts();
}

function sortContacts() {
    const by = document.getElementById('sort').value;
    contactManager.sortContacts(by);
}
