var ContactManager = /** @class */ (function () {
    function ContactManager() {
        this.contacts = [];
    }
    ContactManager.prototype.addContact = function (contact) {
        var exists = false;
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id === contact.id) {
                exists = true;
                break;
            }
        }
        if (exists) {
            console.error("Error: Contact with id ".concat(contact.id, " already exists."));
            return;
        }
        this.contacts.push(contact);
        console.log("Contact \"".concat(contact.name, "\" added successfully."));
    };
    ContactManager.prototype.viewContacts = function () {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        }
        return this.contacts.slice();
    };
    ContactManager.prototype.modifyContact = function (id, updatedContact) {
        var index = -1;
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id === id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            console.error("Error: Contact with id ".concat(id, " not found."));
            return;
        }
        var current = this.contacts[index];
        this.contacts[index] = {
            id: current.id,
            name: updatedContact.name !== undefined ? updatedContact.name : current.name,
            email: updatedContact.email !== undefined ? updatedContact.email : current.email,
            phone: updatedContact.phone !== undefined ? updatedContact.phone : current.phone,
        };
        console.log("Contact with id ".concat(id, " modified successfully."));
    };
    ContactManager.prototype.deleteContact = function (id) {
        var index = -1;
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].id === id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            console.error("Error: Contact with id ".concat(id, " not found."));
            return;
        }
        var removedContact = this.contacts.splice(index, 1)[0];
        console.log("Contact \"".concat(removedContact.name, "\" deleted successfully."));
    };
    return ContactManager;
}());
var manager = new ContactManager();
manager.addContact({ id: 1, name: "Prasana", email: "Prasana@example.com", phone: "1234567890" });
manager.addContact({ id: 2, name: "sana", email: "sana.@examplecom", phone: "0987654321" });
console.log("All contacts:", manager.viewContacts());
manager.modifyContact(1, { phone: "1112223333" });
manager.modifyContact(3, { name: "Charlie" });
manager.deleteContact(2);
manager.deleteContact(5);
console.log("Final contacts:", manager.viewContacts());
