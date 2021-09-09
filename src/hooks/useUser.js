import { useState } from "react";

function useUser(arrList) {
  const [arrData, setArrData] = useState(arrList);

  const handleClick = (input) => {
    let dataUser = [].concat(arrData)
    const index = dataUser.indexOf(input);
    if (index > -1) {
      dataUser.splice(index, 1);
    }
    setArrData(dataUser)
  }

  return { arrData, handleClick };
}
export default useUser;
