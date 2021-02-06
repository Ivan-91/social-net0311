import React from 'react';

import { connect } from 'react-redux';
import * as axios from 'axios'

import { follow, setCurrentPage, setTotalCount, setUsers, unfollow, toogleIsFetching, toogleIsFollow, getUsersThunk } from '../../redux/users-page-reducer';
import Users from './UsersPage';
import getUsers from '../../api';
import preloader from '../../assets/preloader/preloader.gif'

export let Preloader = () =>{
  return <div><img src= {preloader}/></div>
}

class usersPageApi extends React.Component  {

  componentDidMount() {
    this.props.toogleIsFetching(true)
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    
  }
    
  onPageChanged=(pageNumber)=>{

    this.props.setCurrentPage(pageNumber)
    this.props.toogleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page= ${pageNumber}`,{
      withCredentials:true
    }).then(response => {
      this.props.toogleIsFetching(false)
      this.props.setUsers(response.data.items)
      console.log(response.data.items)
      
    
    } )
  }
    
  render() {
    
    return <>
      { this.props.isFetching ? <Preloader/>:null}
     <Users itemsCount={this.props.itemsCount}
    pageSize={this.props.pageSize}
    currentPage= {this.props.currentPage}
    onPageChanged={this.onPageChanged}
    users={this.props.users}  
    unfollow={this.props.unfollow}
    follow={this.props.follow} 
    followInProgress={this.props.followInProgress}
    toogleIsFollow= {this.props.toogleIsFollow}     /></>}
  }



let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pages: state.usersPage.pages,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    itemsCount: state.usersPage.itemsCount,
    isFetching: state.usersPage.isFetching,
    followInProgress: state.usersPage.followInProgress
  }
}


export default connect(mapStateToProps, 
                      {setTotalCount, follow, unfollow, setUsers, setCurrentPage, toogleIsFetching,
                        getUsersThunk, toogleIsFollow })(usersPageApi)

