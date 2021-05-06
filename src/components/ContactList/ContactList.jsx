import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/actions";
// import PropTypes from "prop-types";
import style from "./ContactList.module.css";

const ContactList = ({ items, onDeleteContact }) => {
  return (
    items.length > 0 && (
      <ul className={style.contact__container}>
        {items.map(({ id, name, number }) => {
          return (
            <li className={style.contact_list} key={id}>
              {name}: {number}
              <button
                type="button"
                onClick={() => onDeleteContact(id)}
                className={style.button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
};
const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);
  return { items: visibleContacts };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

/*ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};*/
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
