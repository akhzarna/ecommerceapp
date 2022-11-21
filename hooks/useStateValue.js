import { createContext, useContext, useReducer } from "react";
const State = createContext()
const StateProvider = ({ state, reducer, children }) => (
    <State.Provider value={useReducer(reducer, state)}>
        {children}
    </State.Provider>
)

const useStateValue = () => useContext(State);

export default useStateValue;
export { StateProvider }