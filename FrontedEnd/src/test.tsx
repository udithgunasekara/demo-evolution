import React, { useEffect } from 'react'
import { corsTest } from './service/api';



const Test = () => {

      const fetchInfor = async () => {
            console.log("Trying to fetch");

            try{
                  const result = await corsTest();
                  console.log(result.data);
            }catch (err){
                  console.error("Error fetching posts:", err);
            }
            try{
                  const tempResult = await corsTest();
                  console.log("Printing 2nd" ,tempResult.data);
            }catch (err) {
                  console.error("Error in 2nd");
            }

      }

      useEffect(()=>  {
            console.log("We print cors pass");
            fetchInfor();
            const apiUrl = import.meta.env.VITE_BASE_URL;
console.log("env connection", apiUrl);
      })

      
  return (
    <div>
      
      <h1 className="text-3xl font-bold underline text-red-800">
    Hello world!
  </h1>
  
</div>
  )
}

export default Test