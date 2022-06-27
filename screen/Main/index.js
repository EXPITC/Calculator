import React,{useState} from 'react'
import { Bg, OutputDisplay } from './main.Styled'
import Buttons from '../../components/Buttons'
import { result } from '../../components/Machine/calculator'

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