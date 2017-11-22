export class Entity
{
    constructor() {
        this.components = {};
    }

    addComponent(component) {
        this.components[component.name()] = component;
    }

    removeComponent(component) {
        if(this.components[component.name()]){
            delete this.components[component.name()];
        }
    }

    getComponent(componentName) {
        return this.components[componentName] || null;
    }

    hasComponent(componentName) {
        return this.components.hasOwnProperty(componentName);
    }

}
