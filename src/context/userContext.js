import React, {createContext, Component} from 'react';
import axios from 'axios';

export const userContext = createContext();

class UserContextProvider extends Component {
    state = {
        userData : null
    }

    componentDidMount = () => {
        axios.get(`https://api.springrole.com/api/v2/profile/kartik`)
        .then(res => {
            console.log("API response", res);
            const userData = res.data;
            this.setState({ userData });
        })
    }

    render() {
        return(
            <userContext.Provider value={{...this.state}}>
                {this.props.children}
            </userContext.Provider>
        )
    }
}

export default UserContextProvider;