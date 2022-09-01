import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const paragraph: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
magni, atque quod ratione fugiat ducimus dolorem placeat perferendis
expedita`;

function Home() {
  const theadData: string[] = ["Name", "Email", "Date"];

  type bodyData = {
    id: string;
    items: string[];
  };

  const tbodyData: bodyData[] = [
    {
      id: "1",
      items: ["John", "john@email.com", "01/01/2021"],
    },
    {
      id: "2",
      items: ["Sally", "sally@email.com", "12/24/2020"],
    },
    {
      id: "3",
      items: ["Maria", "maria@email.com", "12/01/2020"],
    },
  ];

  return (
    <>
      <Navbar Nheads={[]} />
      <Sidebar Nheads={["Home", "About", "Contact"]} />
      <Footer color="white" text="Footer" />
    </>
  );
}
export default Home;
