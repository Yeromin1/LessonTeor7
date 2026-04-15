import { useDispatch, useSelector } from "react-redux";
import css from "./StatusFilter.module.css";
import { selectStatusFilter, setStatusFilter } from "../../redux/filterSlice";
import { Button } from "../Button/Button";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (value) => {
    dispatch(setStatusFilter(value));
  };

  const filters = ["all", "active", "completed"];

  return (
    <div className={css.wrapper}>
      {filters.map((item) => (
        <Button
          key={item}
          selected={filter === item}
          onClick={() => handleFilterChange(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};
