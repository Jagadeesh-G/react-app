import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "Bangalore",
    "Chennai",
    "San Francisco",
    "Santa Clara",
    "London",
    "New York",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  const alertText = "Alert!";

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <s> jn</s>
      <Alert>
        Hello World! <span>{alertText}</span>
      </Alert>

      <s> jn</s>

      {alertVisible && (
        <Alert>
          Hello World! <span>{alertText}</span>
          <Button
            name=""
            color="close"
            onClick={() => setAlertVisibility(false)}
          ></Button>
        </Alert>
      )}
      <Button name="Button" onClick={() => setAlertVisibility(true)} />
    </div>
  );
}

export default App;
