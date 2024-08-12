import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ id, name, numer }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.div}>
      <ul className={css.ul}>
        <li className={css.li}>
          {name}: {numer}
          <button
            className={css.btn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
