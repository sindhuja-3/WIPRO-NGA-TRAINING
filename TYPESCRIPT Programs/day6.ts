interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

class ContactManager {
  private contacts: Contact[] = [];

  addContact(contact: Contact): void {
    let exists = false;
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === contact.id) {
        exists = true;
        break;
      }
    }

    if (exists) {
      console.error(`Error: Contact with id ${contact.id} already exists.`);
      return;
    }

    this.contacts.push(contact);
    console.log(`Contact "${contact.name}" added successfully.`);
  }

  viewContacts(): Contact[] {
    if (this.contacts.length === 0) {
      console.log("No contacts found.");
    }
    return this.contacts.slice();
  }

  modifyContact(id: number, updatedContact: Partial<Contact>): void {
    let index = -1;
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.error(`Error: Contact with id ${id} not found.`);
      return;
    }

    const current = this.contacts[index];
    this.contacts[index] = {
      id: current.id,
      name: updatedContact.name !== undefined ? updatedContact.name : current.name,
      email: updatedContact.email !== undefined ? updatedContact.email : current.email,
      phone: updatedContact.phone !== undefined ? updatedContact.phone : current.phone,
    };

    console.log(`Contact with id ${id} modified successfully.`);
  }

  deleteContact(id: number): void {
    let index = -1;
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.error(`Error: Contact with id ${id} not found.`);
      return;
    }

    const removedContact = this.contacts.splice(index, 1)[0];
    console.log(`Contact "${removedContact.name}" deleted successfully.`);
  }
}

const manager = new ContactManager();


manager.addContact({ id: 1, name: "Prasana", email: "Prasana@example.com", phone: "1234567890" });
manager.addContact({ id: 2, name: "sana", email: "sana.@examplecom", phone: "0987654321" });


console.log("All contacts:", manager.viewContacts());


manager.modifyContact(1, { phone: "1112223333" });


manager.modifyContact(3, { name: "Charlie" });


manager.deleteContact(2);


manager.deleteContact(5);


console.log("Final contacts:", manager.viewContacts());
