import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
const screen = Dimensions.get('window')

export const Bg = styled.View`
    flex: 1;
    background-color: #202020;
    align-items: center;
    justify-content: flex-end;
    width:100%;
    max-width: ${screen.width}px;
    padding-right: 5px;
`
    
export const OutputDisplay = styled.Text`
    color: #fff;
    font-size: 75px;
    text-align: right;
    width: 90%;
    /* margin-right: 20px; */
    margin-bottom: 10px;
    /* border:1px solid red; */
`
