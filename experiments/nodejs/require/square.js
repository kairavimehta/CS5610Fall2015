module.exports = function (name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;

    var api = {
        setName: setName,
        setWidth: setWidth,
        getName: getName,
        getWidth : getWidth
    };

    return api;

    function setWidth(width) {
        this.width = width;
    }

    function setName(name) {
        this.name = name;
    }

    function getWidth() {
        return this.width;
    }

    function getName() {
        return this.name;
    }
};