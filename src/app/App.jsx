import Page1 from "./client/Page1";
import Page2 from "./client/Page2";
import Page3 from "./client/Page3";
import Page4 from "./client/Page4";
import Background from "./layout/Background";
import Loading from "./layout/Loading";
import MyFooter from "./partial/MyFooter";
import MyForm from "./partial/MyForm";
import MyNav from "./partial/MyNav";

export default function App() {
  return (
    <>
      <Background />

      <Loading />

      <MyNav />

      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />

      <MyForm />

      <MyFooter />
    </>
  )
};
