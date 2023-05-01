import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "store/user";

const Home: React.FC = () => {
  const [{ id, name, email }, setUser] = useRecoilState(userState);

  console.log(id, name, email, setUser);

  return <div></div>;
};

export default Home;
