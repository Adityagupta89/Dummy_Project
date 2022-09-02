import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FormModal from "../components/FormModal";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";
import { useState } from "react";
import Table from "../components/Table";

const paragraph: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
magni, atque quod ratione fugiat ducimus dolorem placeat perferendis
expedita`;

function Home() {
  const theadData: string[] = ["First_Name", "Last_Name", "Email", "Gender"];
  interface users {
    first_name: string;
    last_name: string;
    email: string;
    age: number;
    gender: string;
    contact: number;
  }
  const [user, setUser] = useState<users>({
    first_name: "",
    last_name: "",
    email: "",
    age: 0,
    gender: "",
    contact: 0,
  });
  type bodyData = {
    id: string;
    items: string[];
  };

  const [users, setUsers] = useState<users[]>([]);

  const tbodyData: bodyData[] = users.map((user, index) => ({
    id: index.toString(),
    items: [user.first_name, user.last_name, user.email, user.gender],
  }));

  const handleChange = (e: any) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const formHandler = () => {
    console.log("Aditya");
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <Navbar Nheads={[]} />
      <div style={{ display: "flex" }}>
        <Sidebar Nheads={["Home", "About", "Contact"]} />
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            marginTop: "2rem",
          }}
        >
          <FormModal
            btnText="Click here"
            onClick={formHandler}
            width="700px"
            height="81%"
            top="50%"
            left="50%"
          >
            <>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography>First Name</Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    name="first_name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Last Name</Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="last_name"
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>What is your age?</Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    name="age"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>What is your gender?</Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      placeholder="Please Select"
                      labelId="demo-simple-select-label"
                      name="gender"
                      onChange={handleChange}
                      id="demo-simple-select"
                      //   onChange={handleChange}
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Typography>Contact Number?</Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="contact"
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Email Address?</Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    name="email"
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Are you currently taking any medication?
                  </Typography>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography>Do you have any medication allergies?</Typography>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                      <FormControlLabel
                        value="Not sure"
                        control={<Radio />}
                        label="Not Sure"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Do you use any kind of tobacco or have you ever used them?
                  </Typography>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography>
                    Do you use any kind of illegal drugs or have you ever used
                    them?
                  </Typography>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography>How often do you consume alcohol</Typography>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Daily"
                        control={<Radio />}
                        label="Daily"
                      />
                      <FormControlLabel
                        value="Weekly"
                        control={<Radio />}
                        label="Weekly"
                      />
                      <FormControlLabel
                        value="Monthly"
                        control={<Radio />}
                        label="Monthly"
                      />
                      <FormControlLabel
                        value="Occasionally"
                        control={<Radio />}
                        label="Occasionally"
                      />
                      <FormControlLabel
                        value="Never"
                        control={<Radio />}
                        label="Never"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </>
          </FormModal>
          <Table
            thead={theadData}
            tdata={tbodyData}
            height="10vh"
            width="85vw"
          />
        </div>
      </div>

      <Footer color="white" text="Footer" />
    </>
  );
}
export default Home;
