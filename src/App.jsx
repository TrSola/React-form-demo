import "./App.css";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { useEffect } from "react";
import { useState } from "react";
// import Select from "./assets/Select";
import axios from "axios";
import Checkbox from "./assets/Checkbox";
function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});
  const onSubmit = (data) => console.log(data);
  // const { addressData, setAddressData } = useState([]);
  const checkbox = [
    { id: "checkList1", checkboxText: "item1" },
    { id: "checkList2", checkboxText: "item2" },
    {
      id: "checkList3",
      checkboxText: "item3",
      rules: {
        required: {
          value: true,
          message: "至少勾選一項",
        },
      },
    },
    // { id: "checkList4", checkboxText: "item4" },
  ];
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get("./assets/taiwan.json");
  //     console.log(result);
  //     setAddressData(result.data);
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 left">
          <Input
            register={register}
            errors={errors}
            id="username"
            labelText="Username"
            type="text"
            rules={{
              required: {
                value: true,
                message: "必填",
              },
            }}
          />
        </div>
        <div className="mb-3"></div>
        <div className="mb-3 left">
          <Input
            register={register}
            errors={errors}
            id="email"
            labelText="Email"
            type="email"
            rules={{
              required: {
                value: true,
                message: "必填",
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "格式錯誤",
              },
            }}
          />
        </div>
        <div className="mb-3"></div>
        <div className="mb-3 left">
          <Input
            register={register}
            errors={errors}
            id="tel"
            labelText="Tel"
            type="tel"
            rules={{
              required: {
                value: true,
                message: "必填",
              },
              minLength: {
                value: 8,
                message: "至少8碼",
              },
              maxLength: {
                value: 12,
                message: "不超過12碼",
              },
            }}
          />
        </div>
        <div className="row mb-3 g-3">
          <div className="col-6">
            {/* <Select
            id="city"
            labelText="縣市"
            errors={errors}
            register={register}
            rules={{ required: "縣市必填" }}
          >
            <option value="">請選擇縣市</option>
            {addressData.map((city) => {
              return (
                <option value={city.CityName} key={city.CityEngName}>
                  {city.CityName}
                </option>
              );
            })}
          </Select> */}
          </div>
        </div>

        <div className="mb-3">
          <Input
            id="address"
            labelText="Address"
            type="address"
            errors={errors}
            register={register}
            rules={{
              required: "地址不可留白",
            }}
          />
        </div>
        <div className="mb-3">
          {checkbox.map((checkbox) => (
            <Checkbox
              key={checkbox.id}
              register={register}
              errors={errors}
              type="checkbox"
              name="like"
              id={checkbox.id}
              checkboxText={checkbox.checkboxText}
              rules={checkbox.rules}
            />
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
