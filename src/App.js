import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext";
import Store from "./Utils/Store";
import {Provider} from 'react-redux'
const AppLayout = () => {
	
	
	
	return (
		<>
		{/* now my app component can use the redux store  */}
		<Provider store={Store}>
		
		
		<UserContext.Provider value={{name:"abhishek"}}>
			<Header />
				
			<Outlet />
					
			</UserContext.Provider >
			</Provider>	
		</>
	);
};

export default AppLayout;
