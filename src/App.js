import CakeComponent from "./components/CakeComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeComponent from "./components/HooksCakeComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeComponent />
        <CakeComponent />
      </div>
    </Provider>
  );
}

export default App;
