import { useRecoilState } from "recoil";
import { userState } from "store/user";

const Home: React.FC = () => {
  const [{ id, name, email }, setUser] = useRecoilState(userState);

  console.log(id, name, email);

  const onClick = () => {
    setUser({
      id: "updated",
      name: "updated-name",
      email: "updated-email",
    });
    return;
  };

  return <button onClick={onClick}>更新</button>;
};

export default Home;
