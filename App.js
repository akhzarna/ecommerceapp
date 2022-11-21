import { StateProvider } from "./hooks/useStateValue";
import Screens from "./src/components/Screens";
import reducer from "./utils/reducer";
import state from "./utils/state";

export default function App() {
  return (
    <StateProvider state={state} reducer={reducer}>
      <Screens />
    </StateProvider>
  );
}
