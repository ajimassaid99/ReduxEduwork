import { Provider } from "react-redux";
import Counter from "./redux/counter";
import store from "../app/store"

const Redux = () => {
  return (
    <div>
      <Provider store={ store }>
        <Counter/>
      </Provider>
    </div>
  )
}

export default Redux;