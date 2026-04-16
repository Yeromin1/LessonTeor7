import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../../redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../../redux/operations";
import s from "./Home.module.css";
import { AppBar } from "../../AppBar/AppBar";
import { TaskForm } from "../../TaskForm/TaskForm";
import { TaskList } from "../../TaskList/TaskList";

const Home = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
};

export default Home;
