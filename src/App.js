import CakeComponent from "./components/CakeComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeComponent from "./components/HooksCakeComponent";
import IcecreamComponent from "./components/IcecreamComponent";
import HookIcecreamComponent from "./components/HookIcecreamComponent";
import FishComponent from "./components/FishComponent";
import HooksFishComponent from "./components/HooksFishComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeComponent />
        <CakeComponent />

        <HookIcecreamComponent />
        <IcecreamComponent />

        <HooksFishComponent />
        <FishComponent />
      </div>
    </Provider>
  );
}

export default App;
