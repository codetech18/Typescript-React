
import Alert from "./Components/Alert";
import ListGroup from "./Components/ListGroup";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "san Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      { alertVisible &&  <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}> My button</Button>  
    </div>
  );
}

export default App;
