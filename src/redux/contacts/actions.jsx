import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

export const deleteContact = createAction("contacts/delete");

export const changeFilter = createAction("contacts/filter");

/*export const addContact = (name, number) => ({
  type: "phoneBook/addContact",
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = (contactId) => ({
  type: "phoneBook/deleteContact",
  payload: contactId,
});

export const changeFilter = (value) => ({
  type: "phoneBook/changeFilter",
  payload: value,
});*/
