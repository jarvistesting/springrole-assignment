import React, {createContext, Component} from 'react';
import axios from 'axios';

export const githubContext = createContext();

class GithubContextProvider extends Component {
    state = {
        githubData : null
    }

    componentDidMount = () => {
        axios.get(`https://event-service.springrole.com/enrichment?vanity=kartik`)
        .then(res => {
            console.log("API response", res);
            const githubData = res.data.github;
            this.setState({ githubData });
        })
    }

    render() {
        console.log("render", this.state.githubData);
        return(
            <githubContext.Provider value={{...this.state}}>
                {this.props.children}
            </githubContext.Provider>
        )
    }
}

export default GithubContextProvider;