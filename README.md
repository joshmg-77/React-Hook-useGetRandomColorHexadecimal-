## React-Hook-useGetRandomHexColor 

### UseGetRandomColorHex
        
The hook UseGetRandomColorHex is very easy,this hook does not recive any arguments is just for return the hex color, you just execute it hook and that is it
,this hook does not receive any arguments, it is only to return the hexadecimal color. 

example:


```javascript
    const [randomColor] = useGenerateRandomHex();
    const [optionColor,setOptionColor] = useState(randomColor||"#547bc9");

    useEffect(()=>{
      setOptionColor(randomColor)
    },[randomColor])
```

 <span style="color:#0f9" >I'll do a refactoring using the hook useCallback()</span>

##### just copy and paste
