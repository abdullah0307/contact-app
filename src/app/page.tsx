"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactItem from "@/components/ui/tableitem";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Function to delete the contact from the list
  const handleDelete = (contactToDelete) => {
    const updatedContacts = contacts.filter(
      (contact) => contact !== contactToDelete
    );
    setContacts(updatedContacts);
  };

  // Function to add the Contact in the list
  const addContact = () => {
    if (name && email) {
      const newContact = { name, email };
      setContacts([...contacts, newContact]);
      setName("");
      setEmail("");
    }
  };

  // Function to filter the contact from the list
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Here is the code for the Contact list
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24 md:w-auto">
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-600 border-red-500">
        <div>
          <div>
            <h1 className="flex text-slate-900 text-2xl tracking-tight font-extrabold dark:text-white">
              Contact App
            </h1>
            <div className="flex flex-col">
              <Input
                className="border-gray-300 focus:border-blue-400 ..."
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                className="border-gray-300 focus:border-blue-400 ..."
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={addContact}>Add Contact</Button>
            </div>
          </div>
          <div>
            <h2 className="flex text-slate-900 tracking-tight font-extrabold sm:text-2xl dark:text-white">
              Contact List
            </h2>
            <Input
              className="enabled:hover:border-gray-400 disabled:opacity-75"
              type="text"
              placeholder="Search contacts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Display the Table of the Contacts */}
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-600 border-red-500">
              <Table>
              <TableCaption>Table of Contacts</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.map((contact, index) => (
                    <ContactItem key={index} contact={contact} onDelete={handleDelete}/> // Use the ContactItem component
                  ))}
                </TableBody>
              </Table>
            </figure>
          </div>
        </div>
      </figure>
    </main>
  );
}
