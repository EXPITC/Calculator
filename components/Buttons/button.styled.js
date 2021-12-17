import styled from 'styled-components/native'
import { Dimensions } from 'react-native'


const screen = Dimensions.get('window')

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
// const round = calc(100% * 1/2)
export const ButtonStyle = styled.TouchableOpacity`
    ${props => props.y ? 'background-color: #f09a36' : 'background-color: #333333' }
    ${props => props.g ? 'background-color: #a6a6a6' : null }
    width: ${props => props.long? '170px':'80px'};
    height: 80px;
    border-radius:  30px;
    margin: 5px;
`
export const Textstyle = styled.Text`
 text-align: ${props => props.left ? 'left': 'center'};
 /* padding:5px; */
 ${props=> props.left? 'padding-left: 15px;' : null } 
 color: ${props => props.b? '#060606' : '#fff'} ;
 font-size: 50px;
 justify-content: center;
 align-items: center;

`

export const Wrapper = styled.View`
    width:90%;
    margin-bottom: 10px;
    display:flex;
    justify-content: space-between;
`