import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Table from "../components/Table";
function Home() {
  const paragraph: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
    magni, atque quod ratione fugiat ducimus dolorem placeat perferendis
    expedita`;
    const theadData:string[] = ["Name", "Email", "Date"];
    type bodyData={
        id:string,
        items:string[],
    }
    const tbodyData:bodyData[] = [
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
      <div></div>
      <Button
        text="Click here"
        width="135px"
        height="45px"
        radius="5px"
        onClick={() => console.log("you clicked the button")}
        bcolor="rgb(27, 131, 179)"
        color="white"
      />
      {/* <Card
        btncolor="#e9e91b"
        heading="Show in Turkey Brings Travel Woes"
        onClick={() => console.log("you clicked the button")}
        paragraph={paragraph}
      /> */}
      <Table  thead={theadData} tdata={tbodyData}/>
      <Footer color='white' text='Footer' />
    </>
  );
}
export default Home;
