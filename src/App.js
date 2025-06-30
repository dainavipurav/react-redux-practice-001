import CakeComponent from "./components/CakeComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeComponent from "./components/HooksCakeComponent";
import IcecreamComponent from "./components/IcecreamComponent";
import HookIcecreamComponent from "./components/HookIcecreamComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeComponent />
        <CakeComponent />

        <HookIcecreamComponent />
        <IcecreamComponent />
      </div>
    </Provider>
  );
}

export default App;
