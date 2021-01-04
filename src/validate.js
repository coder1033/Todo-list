const validate = (() => {
    let _validateEmpty = input => {
        if(/^\s/.test(input.value))
            input.value = '';
    };

    let validateEmpty = input => {
        _validateEmpty(input);
    };
    return {validateEmpty};
})();

export default validate;