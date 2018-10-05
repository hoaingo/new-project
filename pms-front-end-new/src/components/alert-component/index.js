import React from 'react';
import { AlertList } from "react-bs-notifier";
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component {
    constructor(props){
        super(props);
    }

    onAlertDismissed(alert){
        const {store} = this.props;
        let alerts = store.alert.alerts.slice(); 

		// find the index of the alert that was dismissed
		const idx = alerts.indexOf(alert);

		if (idx >= 0) {
            const new_alerts = [...alerts.slice(0, idx), ...alerts.slice(idx + 1)];
			store.alert = {
                ...store.alert,
                alerts: new_alerts
            }
		}
	}

    render(){
        const {store} = this.props;
        const {alert} = store;
        const alerts = alert.alerts.slice();
        // console.log(alerts);
        return(
            <AlertList
                type={alert.type || 'success'}
                position={alert.position || 'top-right'}
                alerts={alerts || []}
                timeout={alert.timeout || 1000}
                onDismiss={this.onAlertDismissed.bind(this)}
            />
            
        )
    }
}