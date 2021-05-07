import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/actions";
import { getFilter } from '../../redux/contacts/selectors'
import PropTypes from "prop-types";
import style from "./Filter.module.css";

const Filter = ({ value, onChange }) => (
  <>
    <h3>Find Contacts By Name</h3>
    <label className={style.label}>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

Filter.defaultProps = {
  value: "",
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
