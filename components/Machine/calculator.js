import { useEffect, useState } from 'react'

export let result = 0
let last = null;
let second = 0;
let value = ({
    valueI: null,
    operator: null,
    valueII: null
}) 
export const calculator = (state , number) => {
    const logicHandler = () => {
        switch (value.operator) {
            case '+':
                return (
                    value = ({
                        ...value,
                        valueI: `${parseFloat(value.valueI) + parseFloat(value.valueII)}`
                    })
                )
            case '-':
                return (
                    value = ({
                        ...value,
                        valueI: `${parseFloat(value.valueI) - parseFloat(value.valueII)}`
                    })
                )
            case 'X':
                return (
                    value = ({
                        ...value,
                        valueI: `${parseFloat(value.valueI) * parseFloat(value.valueII)}`
                    })
                )
            case '-':
                return (
                    value = ({
                        ...value,
                        valueI: `${parseFloat(value.valueI) - parseFloat(value.valueII)}`
                    })
                )
            case '/':
                return (
                    value = ({
                        ...value,
                        valueI: `${parseFloat(value.valueI) / parseFloat(value.valueII)}`
                    })
                )

        }
    }
    const numHandler = () => {
        let temporary = number;
        if (value.operator != null) return (
            value.valueII ? number = value.valueII + number : null,
            value = ({
                ...value,
               valueII: number
            }),
            result = last + ' ' + number
        )
        value.valueI ? number=value.valueI + number: console.log(value.valueI)
        value = ({
            ...value,
            valueI: number
        })
        result = value.valueI
        last = result
    }
    const operatorHandler = () => {
        value.operator != null ? (
            value.valueI === 'NaN' ? second = second :
            second = value.valueI,
            logicHandler(),
            value = {
            ...value,
            valueII : null
        }): null
        switch (state) {
            case '+':
                return (
                    value = ({
                        ...value,
                        operator: state,
                    })
                )
            case '-':
                return (
                    value = ({
                        ...value,
                        operator: state,
                    })
                )
                    
            case 'X':
                return (
                    value = ({
                        ...value,
                        operator: state,
                    })
                )
            case '/':
                return (
                    value = ({
                        ...value,
                        operator: state,
                    })
                )
            case '%':
                return (
                    value = ({
                        ...value,
                        operator: state,
                    })
                )
                    
        }
    }
    
    if (state === 'num') return numHandler()
    if (state === 'c') return (
        value = ({
            valueI: null,
            operator: null,
            valueII: null
        }),
        result = 0
    )
    if (state === '+/-') return (
        value = ({
            valueI: `${parseFloat(value.valueI)*-1}`,
            operator: null,
            valueII: null
        }),
        result = value.valueI
    )
    if (state === '%') return (
        value = ({
            valueI: `${parseFloat(value.valueI)* 0.01}`,
            operator: null,
            valueII: null
        }),
        result = value.valueI
    )
    if (value.valueI != null) {
        operatorHandler()
        if (value.valueI[value.valueI.length - 1] === ".") {
            value = {
                ...value,
                valueI: value.valueI.slice(0,-1)
            }
        }
        value.valueII ? (
            last = result,
            result = last + value.operator
            )
            :
            result = result + ' ' + value.operator
            last = result
            // second = false
    }

    if (state === '=') {
        value = {
            ...value,
            operator: null,
            valueII: null
        }
        if (value.valueI === 'NaN') return result = second
        result = value.valueI
    }
}

export const print = () => {
    console.log('from cal')
}