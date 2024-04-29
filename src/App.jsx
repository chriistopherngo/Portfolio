import { useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="layout">
        <ChakraProvider>
          <Button colorScheme="red" onClick={() => handleToggle()}>
            knapp
          </Button>

          {toggle && <h1>halla</h1>}
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
