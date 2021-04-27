import React from 'react';
import styles from "./App.module.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomePage, SignInPage, RegisterPage,DetailPage} from "./pages";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    {/*Route的component属性会默认传递三个数据：history、location、match*/}
                    <Route path="/signIn" component={SignInPage}/>
                    <Route path={'/register'} component={RegisterPage}/>
                    {/*restful风格path设置比较特殊*/}
                    <Route path='/detail/:touristRouteId' component={DetailPage}/>
                    <Route render={() => <h1>404 not found 页面去火星了 ！</h1>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
