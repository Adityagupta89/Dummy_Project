import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
function Home() {
  const paragraph: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
    magni, atque quod ratione fugiat ducimus dolorem placeat perferendis
    expedita`;
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
      <Card
        btncolor="#e9e91b"
        heading="Show in Turkey Brings Travel Woes"
        onClick={() => console.log("you clicked the button")}
        paragraph={paragraph}
      />
      <Footer color='white' text='Footer' />
    </>
  );
}
export default Home;
