// src/components/Contact/Contact.jsx
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.dataContainer}>
      <ul className={css.dataInfo}>
        <li>
          <FaUser />
          {name}
        </li>
        <li>
          <FaPhone />
          {number}
        </li>
      </ul>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
