import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AuthRedirect from '../../hoc';

import { pushMessageCreator} from '../../redux/dialogs-page-reducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
return {
  dialogsPage: state.dialogsPage
}
}

let mapDispatchToProps = (dispatch) => {
  return {
    pushMessage: (messageBody) => {
      
     
      dispatch(pushMessageCreator(messageBody));
    }
  }
}



export default compose(connect(mapStateToProps, mapDispatchToProps), AuthRedirect)(Dialogs)