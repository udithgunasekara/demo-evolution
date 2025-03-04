import { createContext } from "react";

type SomethingContextType = {
      temp: string;
      setTemp: React.Dispatch<React.SetStateAction<string>>;
    };
    

export const someThingContext = createContext<SomethingContextType | undefined>(undefined);