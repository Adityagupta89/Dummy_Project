import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FormModal from "../components/FormModal";
import { Grid } from "@mui/material";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import Table from "../components/Table";
import Card from "../components/Card";
import classes from "../styles/Home.module.css";
import TextInput from "../components/TextInput";

function Home() {
  const theadData: string[] = ["First_Name", "Last_Name", "Email", "Gender"];
  const [user, setUser] = useState<users>({
    first_name: "",
    last_name: "",
    email: "",
    age: 0,
    gender: "",
    contact: 0,
  });

  const [users, setUsers] = useState<users[]>([]);

  const tbodyData: bodyData[] = users.map((user, index) => ({
    id: index.toString(),
    items: [user.first_name, user.last_name, user.email, user.gender],
  }));

  const handleChange = (event: any) => {
    setUser((prev) => ({ ...prev, [event.name]: event.value }));
  };
  const formHandler = () => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <Navbar Nheads={[]} />
      <div style={{ display: "flex", overflow: "scroll", height: "90%" }}>
        <Sidebar Nheads={["Home", "About", "Contact"]} />
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "2rem",
              marginTop: "2rem",
            }}
          >
            <FormModal btnText="Click here" onClick={formHandler}>
              <>
                <div className={classes.header}>
                  <h1>Patience Details</h1>
                </div>
                <div className={classes.children}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <h3>First Name</h3>
                      <TextInput name="first_name" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <h3>Last Name</h3>
                      <TextInput name="last_name" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <h3>What is your age?</h3>
                      <TextInput name="age" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <h3>What is your gender?</h3>
                      <Dropdown
                        placeholder="Please Select"
                        name="gender"
                        onChange={handleChange}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Dropdown>
                    </Grid>
                    <Grid item xs={6}>
                      <h3>Contact Number?</h3>
                      <TextInput name="contact" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={6}>
                      <h3>Email Address?</h3>
                      <TextInput name="email" onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                      <h3>Are you currently taking any medication?</h3>
                      <Dropdown
                        placeholder="Please Select"
                        name="select1"
                        onChange={handleChange}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Dropdown>
                    </Grid>
                    <Grid item xs={12}>
                      <h3>Do you have any medication allergies?</h3>
                      <Dropdown
                        placeholder="Please Select"
                        name="select2"
                        onChange={handleChange}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="not sure">Not Sure</option>
                      </Dropdown>
                    </Grid>
                    <Grid item xs={12}>
                      <h3>
                        Do you use any kind of tobacco or have you ever used
                        them?
                      </h3>
                      <Dropdown
                        placeholder="Please Select"
                        name="select3"
                        onChange={handleChange}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Dropdown>
                    </Grid>
                    <Grid item xs={12}>
                      <h3>
                        Do you use any kind of illegal drugs or have you ever
                        used them?
                      </h3>
                      <Dropdown
                        placeholder="Please Select"
                        name="select4"
                        onChange={handleChange}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Dropdown>
                    </Grid>
                    <Grid item xs={12}>
                      <h3>How often do you consume alcohol</h3>
                      <Dropdown
                        placeholder="Please Select"
                        name="select1"
                        onChange={handleChange}
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="Occasionally">Occasionally</option>
                        <option value="Never">Never</option>
                      </Dropdown>
                    </Grid>
                  </Grid>
                </div>
              </>
            </FormModal>
          </div>
          <Table
            thead={theadData}
            tdata={tbodyData}
            className={classes.table}
          />
          <Card className={classes.card}>
            <FormModal
              btnText="Click"
              btnclass={classes.btn}
              modalclass={classes.modal}
            >
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, consequuntur blanditiis mollitia obcaecati ipsam
                harum debitis, molestiae perspiciatis expedita quas repellat
                quis, a ut iusto dolorum esse alias magnam aperiam.
              </h4>
            </FormModal>

            <h1>Card Contant</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique, consequuntur blanditiis mollitia obcaecati ipsam harum
              debitis, molestiae perspiciatis expedita quas repellat quis, a ut
              iusto dolorum esse alias magnam aperiam.
            </p>
          </Card>
        </div>
      </div>
      <Footer color="white" className={classes.layoutfooter}>
        <p>Footer</p>
      </Footer>
    </>
  );
}

interface users {
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  gender: string;
  contact: number;
}

type bodyData = {
  id: string;
  items: string[];
};

export default Home;
