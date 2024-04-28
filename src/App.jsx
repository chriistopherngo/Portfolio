import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  const [msg, setMsg] = useState();

  const newMsg = () => {
    setMsg("dette kosta meg 95kr");
  };

  return (
    <>
      <ChakraProvider>
        <h1>halla</h1>
        <Button colorScheme="red" onClick={() => newMsg()}>
          Button
        </Button>

        {msg && 
          <p>{msg}</p>
        }
      </ChakraProvider>
    </>
  );
}

export default App;
