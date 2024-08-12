import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSelectors";
import Contact from "../Contact/Contacts";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.div}>
      <ul className={css.ul}>
        {contacts.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
