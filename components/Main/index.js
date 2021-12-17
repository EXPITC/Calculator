import React,{useState} from 'react'
import { Bg, OutputDisplay } from './main.Styled'
import Buttons from '../Buttons'
import { result } from '../Machine/calculator'

const Main = () => {
    const [refresh, setRefresh] = useState(false)
    return (
        <Bg>
            <OutputDisplay>{result}</OutputDisplay>
            <Buttons refresh={()=> setRefresh(!refresh)}/>
        </Bg>
    )
}

export default Main