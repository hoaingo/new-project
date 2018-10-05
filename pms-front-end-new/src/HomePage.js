import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
// import PerfectScrollbar from 'perfect-scrollbar';
import Main from './Main';
import './i18n'
import { I18n } from 'react-i18next';
import path from './components/path_variable';
import store from './MainStore';
import './index.css'
import 'react-select/dist/react-select.css'
import { urlLocation } from './components/path_variable';
import { observer } from 'mobx-react';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            menu: [],
            submenu: [],
            breadcrumb: '',
            notification: [],
            noti_count: 0,
            MenuIdClicked: 0
        };
    }

    handleClickLogout = () => {
        event.preventDefault();
        let swRegistration = null;
        var context_path = $("meta[name=context-path]").attr("content");
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register(context_path + 'js/sw.js')
                .then(function (swReg) {
                    swRegistration = swReg;
                    swRegistration.update();
                    unsubscribe();
                })
                .catch(function (error) {
                    console.error("Service Worker Error", error);
                });
        }
        else {
            console.warn("Push messaging is not supported");
        }
        function unsubscribe() {
            var endpoint = null;
            swRegistration.pushManager
                .getSubscription()
                .then(function (subscription) {
                    if (subscription) {
                        endpoint = subscription.endpoint;
                        return subscription.unsubscribe();
                    }
                })
                .catch(function (error) {
                    console.error("Error unsubscribing", error);
                })
                .then(function () {
                    sendEndpointToServerThenDeleteSub(endpoint);
                });
        }
    }

    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    // fetchDataNotification = () => {
    //     fetch(path.notification.GET_LIST_NOTIFICATION_BY_STATUS + 0, {
    //         credentials: 'include'
    //     })
    //         .then(this.handleErrors)
    //         .then(response => response.redirected ? window.location.reload() : response.json())
    //         .then((data) => {
    //             this.setState({
    //                 notification: data,
    //                 noti_count: data.length
    //             })
    //         }).catch(error => {

    //         })
    // }

    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    componentWillMount() {
        fetch(path.account.GET_DETAIL, {
            credentials: 'include'
        })
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    user: data
                })
                store.loginAccount = data;
                store.rolesAccount = data.roles;

            })
        fetch('/get-menu-list', {
            credentials: 'include'
        })
            // .then(this.handleErrors)
            .then(response => response.json())
            // .then(response => response.json())
            .then((data) => {
                this.setState({
                    menu: data
                })
                data.map(item => {
                    if (item.cardMenu.length > 0) {
                        mainStore.allMenu = item.cardMenu;
                    }
                })
            }).catch(error => {
                console.log("asd", error)
            })

    }

    componentDidMount() {
        // this.fetchDataNotification();
    }

    updateNotificationStatus = (data) => {
        const { noti_count } = this.state;
        this.setState({
            noti_count: noti_count - 1
        }, () => { console.log("Update Notification: ", this.state.noti_count) })

        var form_data = {
            id: data.id,
            notificationStatus: 1,
        };

        var url = path.notification.UPDATE_NOTIFICATION_STATUS;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(form_data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            credentials: 'include'
        })
            .then(this.handleErrors)
            .then(response => response.redirected ? window.location.reload() : response.json())
            .then(() => {
                this.fetchDataNotification();
            })
            .catch(() => {
            })
    }

    test = (e, cardMenu) => {
        this.props.store.cardMenu = cardMenu
    }

    getNotification() {
        let notifications = [];
        const { notification } = this.state;
        notifications.push(
            notification && notification.map(data => {
                return (
                    <Link key={data.id} to={urlLocation + `/list-notification/${data.notificationType}/${data.prId}/${data.id}`} onClick={() => this.updateNotificationStatus(data)} className="dropdown-item">
                        <div className="text d-flex justify-content-between"><strong>{data.notificationName}</strong><span>{data.notificationType}</span></div>
                        <div className="progress">
                            <div role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" className="progress-bar dashbg-1"></div>
                        </div>
                    </Link>
                )
            }))
        return notifications;
    }

    expandedMenu = (parentId) => {
        var element = "#" + parentId;

        $(element).attr('aria-expanded', 'true');
        $(element).removeClass("collapsed");
        var element2 = "#collapse" + parentId;

        $(element2).attr('aria-expanded', 'true');
        $(element2).addClass("in");
    }

    getMenuItems() {
        let items = [];
        items.push(
            
                    <li key="20">
                        <NavLink
                            exact to="/"
                            key="20"
                            activeClassName="active"
                        >
                            <i className="fa fa-home" />
                            <p>Home</p>
                        </NavLink>
                    </li>
             
        );

        items.push(
            this.state.menu &&
            this.state.menu.map(data => {
                if (data.subMenu.length > 0) {
                    return (
                        
                                <li key={data.menuId}>
                                    <a
                                        href={`#collapse${data.menuId}`}
                                        aria-expanded="false"
                                        data-toggle="collapse"
                                        id={data.menuId}
                                    >
                                        <i className={data.menuClass} />
                                        <p>{data.menuTitle}<b className="caret"></b></p>
                                    </a>
                                    <ul
                                        id={`collapse${data.menuId}`}
                                        className="collapse nav"
                                    >
                                        {data.subMenu.map(data => {
                                            return (
                                                <li key={data.menuId}>
                                                    <NavLink
                                                        exact
                                                        to={data.menuPath}
                                                        key={data.menuId}
                                                        activeClassName="active in"
                                                        isActive={this.expandedMenu(data.parentId)}
                                                    >

                                                        <i className={data.menuClass} />
                                                        <p>
                                                            {data.menuTitle}
                                                        </p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                    );
                } else if (data.cardMenu.length > 0) {
                    return (
                        
                                <li key={data.menuId}>
                                    <NavLink
                                        exact
                                        to={data.menuPath}
                                        onClick={e => {
                                            this.test(e, data.cardMenu);
                                        }}
                                        key={data.menuId}
                                        activeClassName="active"
                                    >
                                        <i className={data.menuClass} />
                                        <p>{data.menuTitle}</p>
                                    </NavLink>
                                </li>
                           
                    );
                } else {
                    return (
                       
                                <li key={data.menuId}>
                                    <NavLink
                                        exact
                                        to={data.menuPath}
                                        key={data.menuId}
                                        activeClassName="active"
                                    >
                                        <i className={data.menuClass} />
                                        <p>{data.menuTitle}</p>
                                    </NavLink>
                                </li>
                           
                    );
                }
            })
        );
        return items;
    }

    handleToggle = (e) => {
        let targetNode = $($(e.currentTarget).data('target'));
        targetNode && targetNode.toggle('fast');
    }

    //     scrollbar = () => {
    //         if ($('script[src="/js/perfect-scrollbar.jquery.min.js"]').length) { 
    //             isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    //             if (isWindows && !$('body').hasClass('sidebar-mini')) {
    //                 // if we are on windows OS we activate the perfectScrollbar function
    //                 $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

    //                 $('html').addClass('perfect-scrollbar-on');
    //             } else {
    //                 $('html').addClass('perfect-scrollbar-off');
    //             }
    //         }
    //     }

    //     componentDidUpdate() {
    //         // const container = document.querySelector('#root');
    //         // const ps = new PerfectScrollbar(container);

    //         // this.scrollbar()
    //         const ps = new PerfectScrollbar('.wrapper', {
    //             wheelSpeed: 2,
    //             wheelPropagation: true,
    //             minScrollbarLength: 1
    //         });
    //         // ps.update();
    //     }
    //     componentWillMount(){
    //         const ps = new PerfectScrollbar('#root', {
    //             wheelSpeed: 2,
    //             wheelPropagation: true,
    //             minScrollbarLength: 20
    //         });
    //         // ps.update();
    //     }
    //     componentDidMount(){
    //         const ps = new PerfectScrollbar('#root', {
    //             wheelSpeed: 2,
    //             wheelPropagation: true,
    //             minScrollbarLength: 20
    //         });
    //         // ps.update();
    //         const s = new PerfectScrollbar('.wrapper', {
    //             wheelSpeed: 2,
    //             wheelPropagation: true,
    //             minScrollbarLength: 20
    //         });
    //         // s.update();
    //         console.log(ps.reach.x); // => 'start' or 'end' or null
    // console.log(ps.reach.y); // => 'start' or 'end' or null
    //     }

    render() {
        const menuItems = this.getMenuItems();
        // const notificationItems = this.getNotification();
        const Breadcrumbs = () => <Route path="*" render={props => {
            let parts = props.location.pathname.split("/");
            const place = parts[parts.length - 1];
            parts = parts.slice(1, parts.length - 1);
            return (<p className="navbar-brand">{parts.map(crumb)} / {place.replace(/\_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}  </p>)
        }} />
        const crumb = (part, partIndex, parts) => {
            const path = ['', ...parts.slice(0, partIndex + 1)].join("/");
            return (<Link key={path} to={path}>  /  {part.replace(/\_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</Link>)
        }

        const adminSystem = []

        this.state.menu.length > 0 ? this.state.menu.map(item => {
            if (item.menuId == this.state.MenuIdClicked) {
                adminSystem.push(item)
            }
        }) : [];

        return (
            <div>
                <div className="wrapper">
                    <div className="sidebar" data-active-color="rose" data-background-color="black" data-image="/img/sidebar-1.jpg">
                        {/* <!--
                    Tip 1: You can change the color of active element of the sidebar using: data-active-color="purple | blue | green | orange | red | rose"
                    Tip 2: you can also add an image using data-image tag
                    Tip 3: you can change the color of the sidebar with data-background-color="white | black"
                --> */}
                        <div className="logo">
                            <a href=" " className="simple-text logo-mini">
                                {/* <img id="mini-logo" alt="logo" src="https://drive.google.com/open?id=1V5Q3Yiy6aw_dkSaqfS3el-yA453iUHAm/view" style={{ width: "400%", visibility: "hidden" }} /> */}
                            </a>
                            <a href=" " className="simple-text logo-normal">
                                {/* <img alt="logo" src="https://drive.google.com/open?id=1V5Q3Yiy6aw_dkSaqfS3el-yA453iUHAm/view" style={{ width: "60%" }} /> */}
                            </a>
                        </div>
                        <div className="sidebar-wrapper ps-container ps-theme-default ps-active-y">
                            <div className="user">
                                <div className="photo">
                                    <img src="https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg" />
                                </div>
                                <div className="info">
                                    <a data-toggle="collapse" href="#collapseExample" className="collapsed">
                                        <span>
                                            {store.loginAccount.fullName}
                                            <b className="caret"></b>
                                        </span>
                                    </a>
                                    <div className="clearfix"></div>
                                    <div className="collapse" id="collapseExample">
                                        <ul className="nav">
                                            <li>
                                                <a href="#">
                                                    <span className="sidebar-mini"> MP </span>
                                                    <span className="sidebar-normal"> My Profile </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="sidebar-mini"> EP </span>
                                                    <span className="sidebar-normal"> Edit Profile </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={urlLocation+"login"}>
                                                    <span className="sidebar-mini"> L </span>
                                                    <span className="sidebar-normal"> Log out </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Section Menu --> */}
                            <ul className="nav">
                                {menuItems}
                            </ul>
                            {/* <!-- /Section Menu --> */}

                            {/* <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}><div className="ps-scrollbar-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div></div><div className="ps-scrollbar-y-rail" style={{ top: "0px", height: "587px", right: "0px" }}><div className="ps - scrollbar - y" tabIndex="0" style={{ top: "0px", height: "530px" }}></div></div> */}
                        </div>
                        <div className="sidebar-background" style={{ backgroundImage: "url(/img/sidebar-1.jpg)" }}></div>
                    </div>
                    <div className="main-panel ps-container ps-theme-default ps-active-y">
                        <nav className="navbar navbar-transparent navbar-absolute">
                            <div className="container-fluid">
                                <div className="navbar-minimize">
                                    <button id="minimizeSidebar" className="btn btn-round btn-white btn-fill btn-just-icon">
                                        <i className="material-icons visible-on-sidebar-regular">more_vert</i>
                                        <i className="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
                                        <div className="ripple-container"></div>
                                    </button>
                                </div>
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <Breadcrumbs />
                                </div>
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="material-icons">dashboard</i>
                                                <p className="hidden-lg hidden-md">Dashboard</p>
                                            </a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="material-icons">notifications</i>
                                                <span className="notification">5</span>
                                                <p className="hidden-lg hidden-md">
                                                    Notifications
                                <b className="caret"></b>
                                                </p>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="#">Mike John responded to your email</a>
                                                </li>
                                                <li>
                                                    <a href="#">You have 5 new tasks</a>
                                                </li>
                                                <li>
                                                    <a href="#">You're now friend with Andrew</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another Notification</a>
                                                </li>
                                                <li>
                                                    <a href="#">Another One</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="material-icons">person</i>
                                                <p className="hidden-lg hidden-md">Profile</p>
                                            </a>
                                        </li>
                                        <li className="separator hidden-lg hidden-md"></li>
                                    </ul>
                                    <form className="navbar-form navbar-right" role="search">
                                        <div className="form-group form-search is-empty">
                                            <input type="text" className="form-control" placeholder=" Search " />
                                            <span className="material-input"></span>
                                            <span className="material-input"></span>
                                        </div>
                                        <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                            <i className="material-icons">search</i>
                                            <div className="ripple-container"></div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        <div className="content">
                            <div className="container-fluid">
                                <Main
                                    store={this.props.store}
                                    userName={this.state.user.userName}
                                    roles={this.state.user.roles}
                                    permission={this.state.user.permissions}
                                />
                            </div>
                        </div>
                        <footer className="footer">
                            <div className="container-fluid">
                                <nav className="pull-left">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Company</a>
                                        </li>
                                        <li>
                                            <a href="#">Portofolio</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                        </li>
                                    </ul>
                                </nav>
                                <p className="copyright pull-right">&copy;<script>document.write(new Date().getFullYear())</script><Link key={3010} to={"/home"}>SCM</Link>, made with profession for a better future</p>
                            </div>
                        </footer>
                        {/* <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "-200px" }}><div className="ps - scrollbar - x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div></div><div className="ps-scrollbar-y-rail" style={{ top: "200px", right: "0px", height: "662px" }}><div className="ps - scrollbar - y" tabIndex="0" style={{ top: "80px", height: "264px" }}></div></div> */}
                    </div >
                </div >
                <div className="fixed-plugin">
                    <div className="dropdown show-dropdown">
                        <a href="#" data-toggle="dropdown">
                            <i className="fa fa-cog fa-2x"> </i>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header-title"> Sidebar Filters</li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger active-color">
                                    <div className="badge-colors text-center">
                                        <span className="badge filter badge-purple" data-color="purple"></span>
                                        <span className="badge filter badge-blue" data-color="blue"></span>
                                        <span className="badge filter badge-green" data-color="green"></span>
                                        <span className="badge filter badge-orange" data-color="orange"></span>
                                        <span className="badge filter badge-red" data-color="red"></span>
                                        <span className="badge filter badge-rose active" data-color="rose"></span>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="header-title">Sidebar Background</li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger background-color">
                                    <div className="text-center">
                                        <span className="badge filter badge-white" data-color="white"></span>
                                        <span className="badge filter badge-black active" data-color="black"></span>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Sidebar Mini</p>
                                    <div className="togglebutton switch-sidebar-mini">
                                        <label>
                                            <input type="checkbox" unchecked="" />
                                        </label>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="adjustments-line">
                                <a href="javascript:void(0)" className="switch-trigger">
                                    <p>Sidebar Image</p>
                                    <div className="togglebutton switch-sidebar-image">
                                        <label>
                                            <input type="checkbox" checked="" />
                                        </label>
                                    </div>
                                    <div className="clearfix"></div>
                                </a>
                            </li>
                            <li className="header-title">Images</li>
                            <li className="active">
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/img/sidebar-1.jpg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/img/sidebar-2.jpg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/img/sidebar-3.jpg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a className="img-holder switch-trigger" href="javascript:void(0)">
                                    <img src="/img/sidebar-4.jpg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}
