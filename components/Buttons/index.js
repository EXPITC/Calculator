import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";
import { ButtonStyle, Row, Textstyle, Wrapper } from './button.styled'
import { calculator ,print} from "../Machine/calculator";
const Buttons = ({refresh}) => {
    // calculator('c')
    // print()
    return (
        <Wrapper>
        <Row>
            <ButtonStyle g
                onPress={() => {
                    calculator('c');
                    refresh();
                }}
            >
                <Textstyle b>C</Textstyle>
            </ButtonStyle>
            <ButtonStyle g
                onPress={() => {
                    calculator('+/-');
                    refresh();
                }}
            >
                <Textstyle b>+/-</Textstyle>
            </ButtonStyle>
            <ButtonStyle g
                onPress={() => {
                    calculator('%');
                    refresh();
                }}
            >
                <Textstyle b>%</Textstyle>
            </ButtonStyle>
            <ButtonStyle y
                onPress={() => {
                    calculator('/');
                    refresh();
                }}
            >
                <Textstyle>/</Textstyle>
            </ButtonStyle>
         </Row>
         
        <Row>
            <ButtonStyle 
                onPress={() => {
                    calculator('num','7');
                    refresh();
                }}
            >
                <Textstyle>7</Textstyle>
            </ButtonStyle>
            <ButtonStyle 
                onPress={() => {
                    calculator('num','8');
                    refresh();
                }}
            >
                <Textstyle>8</Textstyle>
            </ButtonStyle>
            <ButtonStyle 
                onPress={() => {
                    calculator('num', '9')
                    refresh()
                }}
            >
                <Textstyle>9</Textstyle>
            </ButtonStyle>
            <ButtonStyle y
                onPress={() => {
                    calculator('X');
                    refresh();
                }}
            >
                <Textstyle>X</Textstyle>
            </ButtonStyle>
         </Row>
        <Row>
            <ButtonStyle 
                onPress={() => {
                    calculator('num','4');
                    refresh();
                }}
            >
                <Textstyle>4</Textstyle>
            </ButtonStyle>
            <ButtonStyle 
                onPress={() => {
                    calculator('num','5');
                    refresh();
                }}
            >
                <Textstyle>5</Textstyle>
            </ButtonStyle>
            <ButtonStyle 
                onPress={() => {
                    calculator('num','6');
                    refresh();
                }}
            >
                <Textstyle>6</Textstyle>
            </ButtonStyle>
            <ButtonStyle y
                onPress={() => {
                    calculator('-');
                    refresh();
                }}
            >
                <Textstyle>-</Textstyle>
            </ButtonStyle>
         </Row>
        <Row>
             <ButtonStyle 
                onPress={() => {
                    calculator('num','1');
                    refresh();
                }}
            >
                <Textstyle>1</Textstyle>
            </ButtonStyle>
            <ButtonStyle 
                onPress={() => {
                    calculator('num','2');
                    refresh();
                }}
            >
                <Textstyle>2</Textstyle>
            </ButtonStyle>
            <ButtonStyle 
                onPress={() => {
                    calculator('num','3');
                    refresh();
                }}
            >
                <Textstyle>3</Textstyle>
            </ButtonStyle>
            <ButtonStyle y
                 onPress={() => {
                    calculator('+')
                    refresh()
                }}
            >
                <Textstyle>+</Textstyle>
            </ButtonStyle>
         </Row>
         <Row>
             <ButtonStyle long
                onPress={() => {
                    calculator('num','0');
                    refresh();
                }}
            >
                <Textstyle left >0</Textstyle>
            </ButtonStyle>
            <ButtonStyle y
                onPress={() => {
                    calculator('num','.');
                    refresh();
                }}
            >
                <Textstyle>.</Textstyle>
            </ButtonStyle>
            <ButtonStyle y
                onPress={() => {
                    calculator('=');
                    refresh();
                }}
            >
                <Textstyle>=</Textstyle>
            </ButtonStyle>
         </Row>
        </Wrapper>
    )
}

export default Buttons