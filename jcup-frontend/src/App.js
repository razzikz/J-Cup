import React from "react"
import Minerals from "./components/Minerals"
import Logs from "./components/Logs"
import Model3D from "./components/3D"

class App extends React.Component {
    
    render() {
        return (<div className="container">
            <div className="left">
                <Minerals />
                <Logs />
            </div>
            <Model3D />
        </div>
        )
    }
}

export default App