import React, { useState } from "react";
import useRegister from "./store/register";
const Form = () => {
  const state = useRegister((state) => state.state);
  const [img, setImg] = useState<Buffer | null>(null);
  const [key, setKey] = useState<string>("");
  function onChange(event: any) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      //@ts-ignore
      const data = Buffer.from(event.target.result, "base64");
      setImg(data);
    };

    reader.readAsDataURL(file);
  }
  function onKChange(event: any) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
      //@ts-ignore
      setKey(event.target.result);
    };

    reader.readAsText(file);
  }
  const register = useRegister((state) => state.register);
  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      header: { value: string };
    };
    if(img && key && target.header.value){
      register(key,img,target.header.value);
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <br />
        <label>Key</label>

        <br />
        <input disabled={state} type="file" onChange={onKChange} />
        <h1></h1>
        <br />
        <label>Image (in .jpg format)</label>

        <br />
        <input disabled={state} type="file" onChange={onChange} />
        <h1></h1>
        <br />
        <label>Header</label>

        <br />
        <input disabled={state} type="text" name="header" />
        <h1></h1>
        <button disabled={state} type="submit">Submit</button>
      </form>
      {state ? <h1>Data is uploading wait for a minute </h1>: null}
    </div>
  );
};
export default Form;
