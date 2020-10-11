import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import * as redux from 'react-redux'
import CardMessage from './card-message';
import moment from 'moment';
import {setNewMessage} from "../../../store/actions/general-actions";


describe('Home', () => {

    let component;
    let useEffect;
    let store;

    const mockUseEffect = () => {
        useEffect.mockReturnValue(() => f => f());
    };

    beforeEach(() => {

        store = configureStore()({
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
        
            }]
        });

        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect();
        mockUseEffect();
    
        jest
          .spyOn(redux, "useSelector")
          .mockImplementation(() => store.getState());
    
        jest
          .spyOn(redux, "useDispatch")
          .mockImplementation(() => async(dispatch) => store.dispatch(dispatch));

        component = shallow(
            <CardMessage store={store} />
        );
    });


    describe("Question 5", () => {

        test("Failure to edit a comment after the specified time", () => {
            let rightNow = moment('2020-11-10 10:02:39', "YYYY-DD-MM HH:mm:ss");
            let dateTime = moment(store.getState().messages[0].time, "YYYY-DD-MM HH:mm:ss");
            let duration = moment.duration(dateTime.diff(rightNow));
           
          expect(duration.asMinutes()).toBe(8)
        });

        test("NOT Failure to edit a comment after the specified time", () => {
            let rightNow = moment('2020-11-10 10:09:39', "YYYY-DD-MM HH:mm:ss");
            let dateTime = moment(store.getState().messages[0].time, "YYYY-DD-MM HH:mm:ss");
            let duration = moment.duration(dateTime.diff(rightNow));
           
          expect(duration.asMinutes()).toBe(1)
        });

    });
});