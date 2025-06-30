import CakeComponent from "./components/CakeComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeComponent from "./components/HooksCakeComponent";
import IcecreamComponent from "./components/IcecreamComponent";
import HookIcecreamComponent from "./components/HookIcecreamComponent";
import FishComponent from "./components/FishComponent";
import HooksFishComponent from "./components/HooksFishComponent";
import NewCakeComponent from "./components/NewCakeComponent";
import ItemComponent from "./components/ItemComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemComponent cake />
        <ItemComponent />

        <HooksCakeComponent />
        <CakeComponent />

        <HookIcecreamComponent />
        <IcecreamComponent />

        <HooksFishComponent />
        <FishComponent />

        <NewCakeComponent />
      </div>
    </Provider>
  );
}

export default App;
