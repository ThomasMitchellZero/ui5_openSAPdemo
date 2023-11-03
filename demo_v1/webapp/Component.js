sap.ui.define(["sap/ui/core/UIComponent"], (UIComponent) => {
    "use strict"
    return UIComponent.extend("", {
        init() {
            UIComponent.prototype.init.apply(this, arguments)
        }
    })
})