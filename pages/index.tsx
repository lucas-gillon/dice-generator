import React from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const Home: React.FC<{}> = () => {
  const [number, setNumber] = React.useState(0);
  const [randomNumber, setRandomNumber] = React.useState(0);
  const [visible, setVisible] = React.useState(false);
  const handleChange = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    setNumber(e.target.value);
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setRandomNumber(Math.floor(Math.random() * (number - 1)) + 1);
    setVisible(true);
    console.log(randomNumber);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={{ marginTop: "2em" }}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Choose a number :&nbsp;&nbsp;&nbsp;&nbsp;</label>
              </td>
              <td>
                <input
                  className="message-input"
                  type="text"
                  placeholder="choose a number..."
                  onChange={handleChange}
                />
              </td>
              <td>
                <Button className="send-button" onClick={handleSubmit}>
                  Submit &rarr;
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {visible ? <h1>{randomNumber}</h1> : ""}
    </div>
  );
};

export default Home;
