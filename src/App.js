import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { connect } from 'react-redux';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import './App.css';
import { setCurrentUser } from './redux/user/user.actions';


class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfile(userAuth)
        userRef.onSnapshot(user => {
          this.props.setCurrentUser({
            currentUser: {
              id: user.id,
              ...user.data()
            }
          })
          console.log(this.state)
        })
      }
      
      this.props.setCurrentUser(userAuth)
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUp />
              )
            }
          />
          {/* {
            this.props.currentUser == null ? 
            (<Route path="/signin" component={SignInSignUp} />)
            :
            (<Route exact path="/" component={HomePage} />)
            
          } */}
          {/* <Route path="/:test" component={Test} /> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>(
  {
    currentUser: state.user.currentUser
  }
)
const mapDispatchToProps = (dispatch)=>(
  {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(App);

