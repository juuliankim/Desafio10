class Productos{
    constructor(){
        this.productos = [];
    }

    listar(){        
        return this.productos;
    }

    listarId(id){
        let found = this.productos.find(element => element.id === id);
        if(found==undefined){
            found = 'Producto no encontrado';
        }
        return found;
    }

    guardar(obj){
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

    borrar(id){
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

    actualizar(id, obj){
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