import React from 'react';
import ReactDOM from 'react-dom';
import { Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { FormWithConstraints, FieldFeedback } from 'react-form-with-constraints';
import { FormGroup, FieldFeedbacks, FormControlLabel, FormControlInput } from 'react-form-with-constraints-bootstrap4';
import path from '../path_variable';
import { observer } from 'mobx-react';
import MyNotification from '../MyNotification';

@observer
export default class OptionMain extends React.Component {
    constructor(props) {
        super(props);
    }
    toggleInsert = () => {
        this.refs.modalInsert.toggleInsert();
    }
    render() {
        return (
            <div>
                <ModalInsert ref="modalInsert" store={this.props.store} />
                <div className="public-user-block block" style={{padding : 'none'}}>
                    <div className="row d-flex align-items-center">                   
                        <Button color="primary" onClick={this.toggleInsert} disabled={this.props.store.isdeny}  ><i className="fa fa-plus" aria-hidden="true"></i> New Permission</Button>
                    </div>
                </div>
            </div>
        )
    }
};
// @observer
// class ModalInsert extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             modalInsert: false,
//             submitButtonDisabled: false
//         };
//     }
//     handleErrors = (response) => {
//         if (!response.ok) {
//             throw Error(response.statusText);
//         }
//         return response;
//     }
//     toggleInsert = () => {
//         this.setState({
//             modalInsert: !this.state.modalInsert,
//         },()=>{
//             if(this.state.modal == false)
//             {
//                 this.props.store.permission_obj = {};
//             }
//         });
//     }
//     handleChange = (e) => {
//         const target = e.currentTarget;
//         this.form.validateFields(target);
//         this.props.store.updateBodyPermission({
//             ...this.props.store.permission_obj,
//             [target.name]: target.value
//         })
//         this.setState({
//             submitButtonDisabled: !this.form.isValid(),
//         });
//     }
//     handleInsert = (e) => {
//         e.preventDefault();
//         fetch(path.permission.INSERT_PERMISSION, {
//             method: 'POST',
//             body: JSON.stringify(this.props.store.permission_obj),
//             headers: new Headers({
//                 'Content-Type': 'application/json'
//             }),
//             credentials: 'include'
//         })
//             .then(this.handleErrors)
//             .then(response => response.json())
//             .then(data => {
//                 if(data)    
//                 {
//                     this.props.store.fetchData();
//                     MyNotification.alertSuccess('Insert Permission successfully!','');
//                 }
//                 else
//                 {
//                     MyNotification.alertError('Insert Permission address false!','');
//                 } 
//             }).catch((error) => {
//                 MyNotification.alertError('Insert Permission address false!','');
//             })
//             this.toggleInsert();
//     }
//     render() {
//         const PERMISSION_NAME = !!this.props.store.listPerName?this.props.store.listPerName.slice():[];
//         return (
//             <div>
//                 <Modal isOpen={this.state.modalInsert} toggle={this.toggleInsert} onSubmit={this.handleInsert}>
//                     <FormWithConstraints ref={formWithConstraints => (this.form = formWithConstraints)}>
//                         <ModalHeader style={{ background: 'linear-gradient(to right, #1c3a94 , #7a99d9)', color: 'white' }}>New Permission</ModalHeader>
//                         <ModalBody>
//                             <FormGroup for="permissionName">
//                                 <FormControlLabel htmlFor="permissionName">Name</FormControlLabel>
//                                 <FormControlInput
//                                     type="text"
//                                     id="permissionName"
//                                     name="permissionName"
//                                     defaultValue={this.props.store.permission_obj.permissionName}
//                                     onChange={this.handleChange}
//                                     required
//                                     minLength={3}
//                                 />
//                                 <FieldFeedbacks for="permissionName">
//                                     <FieldFeedback when="tooShort">Too short. Please insert more than 3 characters!</FieldFeedback>
//                                     <FieldFeedback when="*" />
//                                     <FieldFeedback when={value => value = PERMISSION_NAME.includes(value.toLowerCase())}>Permission name already exists!</FieldFeedback>
//                                 </FieldFeedbacks>
//                             </FormGroup>
//                             <FormGroup for="permissionDescription">
//                                 <FormControlLabel htmlFor="permissionDescription">Permission Description</FormControlLabel>
//                                 <FormControlInput
//                                     type="text"
//                                     id="permissionDescription"
//                                     name="permissionDescription"
//                                     defaultValue={this.props.store.permission_obj.permissionDescription}
//                                     onChange={this.handleChange}
//                                     required
//                                     minLength={3}
//                                 />
//                                 <FieldFeedbacks for="permissionDescription">
//                                     <FieldFeedback when="tooShort">Too short. Please insert more than 3 characters!</FieldFeedback>
//                                     <FieldFeedback when="*" />
//                                 </FieldFeedbacks>
//                             </FormGroup>
//                         </ModalBody>
//                         <ModalFooter>
//                             <Button color="danger"  onClick={this.toggleInsert}>Cancel</Button>
//                             <Button color="primary" disabled={this.state.submitButtonDisabled} >Save changes</Button>
//                         </ModalFooter>
//                     </FormWithConstraints>
//                 </Modal>
//             </div>
//         );
//     }
// }
