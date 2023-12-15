export default class set{
    resource = []

    add(value){
        if(!this.resource.includes(value)){
            this.resource.push(value)
        }
    }

    remove(value){
        this.resource = this.resource.filter(e => e!=value)
    }

    getAll(){
        return this.resource
    }

    get(value){
        return this.resource.filter(e => e==value)
    }
}