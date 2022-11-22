import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => { },
    removeFavourite: (id) => { }
});


function FavouritesContextProvider({ children }) {

    const [favid, setFavid] = useState([]);

    function addFavourite(id) {
        setFavid((currentid) => [...currentid, id])
    }



    const value = {
        ids: favid,
        addFavourite: addFavourite,
    }

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}



export default FavouritesContextProvider;