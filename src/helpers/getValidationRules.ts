export const getValidationRules = (startValue: number, maxValue: number, currentValue: number) => {
    const isStartValueInputError = startValue < 0 || startValue >= maxValue
    const isMaxValueInputError = startValue >= maxValue || maxValue <= 0
    const isIncButtonDisabled = currentValue === maxValue
    const isResetButtonDisabled = currentValue === startValue

    return {isStartValueInputError, isMaxValueInputError, isIncButtonDisabled, isResetButtonDisabled}
}