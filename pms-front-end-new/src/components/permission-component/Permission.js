import React from 'react';
import {Alert} from 'reactstrap'
import OptionMain from "./OptionMain";
import PermissionTable from './PermissionTable'
import path from '../path_variable';
import store from './PermissionStore';
import 'babel-polyfill';

export default class Permission extends React.Component{

    componentWillMount(){
        store.fetchData();
    }

    render(){
        return(
            <ErrorBoundary>
                <div>
                    {/* <OptionMain store={store} />
                    <br /> */}
                    <PermissionTable store={store} />
                </div>
            </ErrorBoundary>
        )
    }
}

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        errorInfo: null
      };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  
    render() {
      if (this.state.error) {
        return (
          <div>
            <h2>{"Oh-no! Something went wrong"}</h2>
            <p className="red">
              {this.state.error && this.state.error.toString()}
            </p>
          </div>
        );
      }
      return this.props.children;
    }
}