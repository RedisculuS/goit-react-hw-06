import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <p className={css.searchDescr}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.searchInput}
      />
    </div>
  );
}
