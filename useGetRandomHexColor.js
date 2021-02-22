import {useState,useEffect} from "react";

/* 
    How works it?

    Step 1:
    we create the state for return hexa color and set this value

    step 2:
    we create array with letters and numbers for hex and function Generator here we're picking out numbers randoms and after we're set the HexString       

    step 3: 
     we execute the function below into the hook useEffect without array dependencies 


*/


const useGenerateRandomHex = ()=>{
    //https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Hexadecimal_multiplication_table.svg/2000px-Hexadecimal_multiplication_table.svg.png
    const [HexString,setHexString] = useState("");
    let letters = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    const GenerateChar = ()=>{
        let hexRandom = ["#"];
        for(let i =0; i<=5; i++){
            let random = Math.ceil(Math.random()*15);
            hexRandom.push(letters[random])
        }
        let toStr = hexRandom.join("");
        setHexString(toStr)
    }
    useEffect(()=>{
        GenerateChar();     
    },[])
    return [HexString];
}
export default useGenerateRandomHex;

