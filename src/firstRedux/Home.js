import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, isLogged } from "./action";

export const Home = () => {
  const count = useSelector((state) => state.counter);
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>counter : {count}</h1>
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>subtract</button>
      {login && <div>Valuable info i mus not seen if not loggedin</div>}
      <div>
        <button onClick={() => dispatch(isLogged())}>Login</button>
      </div>
    </div>
  );
};
