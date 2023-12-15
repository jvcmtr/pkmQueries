
export class keyValue{
    key = [];
    valueArray =[];

    constructor(_keyArray, value = null ){
        this.key = _keyArray
        this.valueArray.push(value)
        return this
    }

    equals(other){
        if( other.length != this.key.length){
            return false
        }
        
        for (let i = 0; i  < this.key.length; i++) {
            const element  = this.key[i]
            if (!other.includes(element)){
                return false;
            }
        }
        return true
    }

    add(value){
        /*
        if(this.valueArray.includes(value)){
            return false
        }*/
        this.valueArray.push(value)
        return true
    }

    appendValues(values){
        for (let i = 0; i < values.length; i++) {
            this.add(values[i])
        }
    }

    remove(value){
        this.valueArray = this.valueArray.filter( e => e!=value)
    }

}

export class dict{
    resource = []
    add(key, value){
        let a = new keyValue(key, value)
        this.addKeyValue(a)
    }

    addKeyValue(keyValue){
        for(var i=0; i<this.resource.length; i++){
            var element = this.resource[i]; 
            if(element.equals(keyValue.key)){
                element.appendValues(keyValue.valueArray)
                return
            }
        }
        this.resource.push(keyValue)
    }
}