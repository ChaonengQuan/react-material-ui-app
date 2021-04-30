import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { useState } from "react";

function App() {
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className="App">
            <Header className="boxHeader" />
            <Body
                className="boxBody"
                tabValue={tabValue}
                handleTabChange={handleTabChange}
            />
        </div>
    );
}

export default App;
