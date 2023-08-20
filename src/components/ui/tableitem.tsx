import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import React from "react";
import { Button } from "./button";
import { TableCell, TableRow } from "./table";

const ContactItem = ({ contact, onDelete }) => (
  <TableRow>
    <TableCell>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </TableCell>
    <TableCell>{contact.name}</TableCell>
    <TableCell>{contact.email}</TableCell>
    <TableCell>
      <Button onClick={() => onDelete(contact)}>Delete</Button>
    </TableCell>
  </TableRow>
);

export default ContactItem;
