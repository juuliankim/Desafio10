class Productos{
    constructor(){
        this.productos = [];
    }

    check(){        
        return this.productos;
    }

    checkId(id){
        let found = this.productos.find(element => element.id === id);
        if(found==undefined){
            found = 'Producto no encontrado';
        }
        return found;
    }

    save(obj){
        try {
            const largo = this.productos.length;
            this.productos.push({...obj,id:largo+1});
            return this.productos[largo];    
        } catch (error) {
            return [{
                error: error
            }];
        }
    }

    delete(id){
        try {
            const producto = this.productos.find(item => item.id == id);
            this.productos = this.productos.filter(a => a.id != id);
            return producto;
        } catch (error) {
            return [{
                error: error
            }];
        }
    }

    update(id, obj){
        try {
            const indice = this.productos.findIndex(item => item.id == id);
            this.productos[indice].title = obj.title;
            this.productos[indice].price = obj.price;
            this.productos[indice].thumbnail = obj.thumbnail;
            return this.productos[indice];
        } catch (error) {
            return [{
                error: error
            }];
        }
    }
}

module.exports = new Productos();