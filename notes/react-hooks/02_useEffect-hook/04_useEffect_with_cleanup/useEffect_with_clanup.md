## means mimic componentWillUnmount

```js
//1st parameter of useEffect hook takes a function (which run when component renders or re-renders, mimic componentDidMount and componentDisUpdate) and return a function which mimic componentWillUnmount

useEffect(() => {
  //some operation

  return () => {
    //componentWillUnmount
  };
});
```
