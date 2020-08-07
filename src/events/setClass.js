const ClassHelper = {};


ClassHelper.setClass = (element, TheClassName) => {
    element.className += ` ${TheClassName}`;

}
ClassHelper.removeAll = (TheClassName) => {
    document.querySelectorAll(`.${TheClassName}`).forEach(element => {
        const className = element.className.replace(`${TheClassName}`, '');
        element.className = className;
    })
}
ClassHelper.removeOne = (element,TheClassName) => {
    const className = element.className.replace(`${TheClassName}`, '');
    element.className = className;
}

export default ClassHelper