import { useState } from "react";

function useUser(arrList) {
  const [arrData, setArrData] = useState(arrList);

  const handleClick = (input) => {
    let dataUser = [].concat(arrData)
    if (dataUser.findIndex(value => value === input) !== -1){
      dataUser.splice(dataUser.findIndex(value => value === input), 1)
    }
    setArrData(dataUser)
  }

  return { arrData, handleClick };
}
export default useUser;
