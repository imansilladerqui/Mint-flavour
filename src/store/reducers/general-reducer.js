import * as actionType from "../actions/types";

// DATOS MOCKEADOS HASTA QUE HAYA UNA API A CONSULTAR

const GENERAL_STATE = {
    user: {
        name: 'Ignacio Mansilla Derqui',
        profileImg: 'https://picsum.photos/200/300'
    },
    statusUser: true,
    messages: [{
      user:{
        name: 'Tina Bolton',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 10:10:39',
      message: 'Sodales venenatis consectetur dui curae id, vel rutrum nibh feugiat laoreet, egestas proin pellentesque suspendisse'

    },{
      user:{
        name: 'Tianna Nielsen',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 08:57:39',
      message: 'Pellentesque condimentum aenean integer ante euismod, torquent praesent eu senectus blandit, donec dapibus fusce nisl'

    },{
      user:{
        name: 'Rebekah Lynn (Becca)',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 10:10:39',
      message: 'Senectus ipsum aliquam himenaeos risus ut sociosqu egestas'

    },{
      user:{
        name: 'Elsie Gallagher',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 08:57:39',
      message: 'Elit urna aptent porttitor nulla tempus cras nibh'

    },{
      user:{
        name: 'Aleena Armstrong',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 08:57:39',
      message: 'Facilisis aptent quis bibendum hendrerit sodales conubia'

    },{
      user:{
        name: 'Bailey Arnold',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 10:10:39',
      message: 'Habitant libero tempus donec etiam iaculis lorem feugiat ut'

    },{
      user:{
        name: 'Carrie Pope',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 08:57:39',
      message: 'Dictum ligula curabitur potenti aenean eleifend nisl condimentum'

    },{
      user:{
        name: 'Hafsah Downs',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 08:57:39',
      message: 'Molestie interdum aliquam euismod fames sit nunc est dictum suscipit egestas'

    },{
      user:{
        name: 'Rosemary Williams',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 08:57:39',
      message: 'Senectus ipsum aliquam himenaeos risus ut sociosqu egestas'

    },{
      user:{
        name: 'Stacey Sullivan',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 10:24:39',
      message: 'Elit urna aptent porttitor nulla tempus cras nibh'

    },{
      user:{
        name: 'Stacey Sullivan',
        profileImg: 'https://picsum.photos/200/300'
      },
      time:'2020-11-10 09:26:39',
      message: 'Facilisis aptent quis bibendum hendrerit sodales conubia'

    },]
};

export default (state = GENERAL_STATE, action) => {
    switch (action.type) {
      case actionType.GET_USER:
        return {
          ...state
        };
      case actionType.GET_STATUS_USER:
        return {
          ...state
        };
      case actionType.GET_MESSAGES:
        return {
          ...state
        };

      case actionType.DELETE_MESSAGE:
        state.messages.splice(action.payload, 1)
        return {
          ...state
        };

      case actionType.SET_NEW_MESSAGE:
        state.messages.push(action.payload);
        return {
          ...state
        };
      default:
        return state;
    }
};