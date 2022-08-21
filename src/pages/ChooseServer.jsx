import React from "react";
import { useState } from "react";
import "../custom_styles/server.css";
//importing the custom made card component
import Card from "../components/SeerverCard";
import ShowCase from "../components/ShowcaseCard";
import TextField from "@mui/material/TextField";

const ChooseServer = () => {
  const serverInfo = [
    {
      index: 1,
      name: "Discord",
      image:
        "data:image/png;base64,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",
    },
    {
      index: 2,
      name: "Telegram",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpzhEfs2sKZFmD2_wNLJOVf_siMU9I_QRbg&usqp=CAU",
    },
    {
      index: 3,
      name: "Slack",
      image:
        "data:image/png;base64,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",
    },
  ];
  const [parts, setParts] = useState([true, false, false, false]);

  return (
    <div className="containor vh-100 pt-5 pb-5 d-flex justify-content-center align-items-center">
      <div
        className={`containor-form p-2 ${
          parts[0] == true ? "d-flex" : "d-none"
        } justify-content-around align-items-center bg-light w-75 flex-column border-0 rounded`}
      >
        <h2 className="text-dark p-2 mt-3">Choose Your Personalized Bot</h2>
        <div className="card d-flex flex-row w-100 p-3 justify-content-around align-items-center border-0 bg-light flex-wrap">
          {serverInfo.map((element, index) => {
            return <Card key={index} image={element.image} />;
          })}
        </div>
        <div className="containor-next w-100 p-3 d-flex justify-content-end align-items-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              setParts([false, true, false, false]);
            }}
          >
            Next Step
          </button>
        </div>
      </div>
      {/* second page for the input of contract address  */}
      <div
        className={`p-3 ${
          parts[1] == true ? "d-flex" : "d-none"
        } justify-content-around align-items-center bg-light mw-50 flex-column border-0 rounded border`}
      >
        <h2 className="text-dark p-2 mt-3">
          Fill in your details of your personal contract
        </h2>
        <div className="containorTextField w-100 p-2 d-flex justify-content-around align-items-center">
          <TextField
            sx={{
              width: 310,
            }}
            id="outlined-basic"
            label="Contract Address"
            variant="outlined"
          />
          <TextField
            sx={{
              width: 310,
            }}
            id="outlined-basic"
            label="Telegram Token"
            type="password"
            variant="outlined"
          />
        </div>
        <div className="containorABI mt-3 p-2 w-100 d-flex justify-content-center align-items-center">
          <TextField
            sx={{
              width: { sm: 400, md: 650 },
              "& .MuiInputBase-root": {
                width: 650,
              },
            }}
            id="outlined-basic"
            multiline
            rows={7}
            label="ABI"
            variant="outlined"
          />
        </div>
        <div className="containor-next w-100 p-3 d-flex justify-content-end align-items-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              setParts([false, false, true, false]);
            }}
          >
            Next Step
          </button>
        </div>
      </div>
      {/* Third SCreen  */}
      <div
        className={`showcase p-3 ${
          parts[2] == true ? "d-flex" : "d-none"
        } justify-content-around align-items-center bg-light w-75 flex-column border-0 rounded border`}
      >
        <h2>Functions</h2>
        <div className="containorFunctions d-flex justify-content-around w-75 align-items-center flex-wrap">
          <ShowCase functionName="createTask" />
          <ShowCase functionName="createTask" />
          <ShowCase functionName="createTask" />
        </div>
        <div className="containor-next w-50 p-3 mt-4 d-flex justify-content-between align-items-center">
          <button
            className="btn btn-success"
            onClick={() => {
              setParts([false, true, false, false]);
            }}
          >
            Previous
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              setParts([false, false, false, true]);
            }}
          >
            Next Step
          </button>
        </div>
      </div>
      {/* Fourth Screen */}
      <div
        className={`showcase p-3 ${
          parts[3] == true ? "d-flex" : "d-none"
        } justify-content-around align-items-center bg-light w-75 flex-column border-0 rounded border`}
      >
        <h2>Events</h2>
        <div className="containorFunctions d-flex justify-content-around w-75 align-items-center flex-wrap">
          <ShowCase functionName="createTask" type="event" />
          <ShowCase functionName="createTask" type="event" />
          <ShowCase functionName="createTask" type="event" />
          <ShowCase functionName="createTask" type="event" />
          <ShowCase functionName="createTask" type="event" />
          <ShowCase functionName="createTask" type="event" />
        </div>
        <div className="containor-next w-50 p-4 mt-4 d-flex justify-content-between align-items-center">
          <button
            className="btn btn-info"
            onClick={() => {
              setParts([false, false, true, false]);
            }}
          >
            Previous
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              alert("Submitted");
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseServer;
