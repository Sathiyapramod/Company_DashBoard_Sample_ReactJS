import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";

function Buttons() {
  return (
    <div>
      <Typography variant="h4">Buttons</Typography>
      <div className="d-flex flex-row">
        <Paper
          sx={{ width: "50%", padding: 2, margin: 5 }}
          className="shadow rounded-2"
        >
          <Button>
            <Typography
              color="primary"
              variant="h6"
              align="left"
              className="bg-light mb-2"
            >
              Types of Buttons
            </Typography>
          </Button>
          <Typography align="left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel
          </Typography>
          <br />
          <Divider />
          <Typography align="left">
            Types of Buttons <br />
            <br />
            {["outlined", "contained", "filled"].map((element, index) => {
              return (
                <Button variant={element} key={index}>
                  {element}
                </Button>
              );
            })}
            <br />
            <br />
            Sizes of Different buttons
            <br />
            <br />
            <Divider />
            {["small", "medium", "large"].map((element, index) => {
              return (
                <Button variant="contained" key={index} size={element}>
                  {element}
                </Button>
              );
            })}
            <br />
            <Divider />
            <br />
            Colors of Different buttons
            <br />
            {["primary", "secondary", "error"].map((element, index) => {
              return (
                <Button variant="contained" key={index} color={element}>
                  {element}
                </Button>
              );
            })}
            <br />
          </Typography>
        </Paper>
        <Paper
          sx={{ width: "50%", padding: 2, margin: 5 }}
          className="shadow rounded-2"
        >
          <Button>
            <Typography
              color="primary"
              variant="h6"
              align="left"
              className="bg-light mb-2"
            >
              Types of Buttons
            </Typography>
          </Button>
          <Typography align="left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel
          </Typography>
          <br />
          <Divider />
          <Typography align="left" variant="h6">
            Use of Icon Buttons <br />
            <br />
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
              <DeleteIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="add an alarm">
              <AlarmIcon />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
            <br />
            <br />
            Sizes of Different buttons
            <br />
            <br />
            <Divider />
            {["small", "medium", "large"].map((element, index) => {
              return (
                <Button variant="contained" key={index} size={element}>
                  {element}
                </Button>
              );
            })}
            <br />
            <Divider />
          </Typography>
        </Paper>{" "}
      </div>
    </div>
  );
}

export default Buttons;
