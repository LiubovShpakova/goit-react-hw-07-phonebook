import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { getAllContacts } from '../../redux/contacts/selectors'
import { v4 as uuidv4 } from "uuid";
import style from "./Form.module.css";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  createContact = () => {
    const { name, number } = this.state;
    const { onSubmit, items } = this.props;

    const sameName = items.find(
      (el) => el.name.toLowerCase() === name.toLowerCase()
    );
    const sameNumber = items.find((el) => el.number === number);
    if (sameName || sameNumber) {
      alert(`${name} or ${number} is already in contacts`);
    
    return;
  }
    else {onSubmit(name, number);}
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.createContact();
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={style.label}>
          Name
          <input
            type="text"
            id={this.nameInputId}
            className={style.input}
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="enter contact name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label htmlFor={this.numberInputId} className={style.label}>
          Number
          <input
            type="text"
            id={this.numberInputId}
            className={style.input}
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            placeholder="enter contact number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12  цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>

        <button type="submit" className={style.button}>
          Add contact
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  items: getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Form);
Form.propTypes = { onSubmit: PropTypes.func.isRequired };
