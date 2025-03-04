import { ReactNode, useState } from "react";

import {someThingContext} from "./context";


const SomethingProvider = ({ children }: { children: ReactNode }) => {
      const [temp, setTemp] = useState<string>("");
    
      return (
        <someThingContext.Provider value={{ temp, setTemp }}>
          {children}
        </someThingContext.Provider>
      );
    };
    
    export default SomethingProvider;