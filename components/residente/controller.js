const storage = require('./storage')

function getResidente() {
    return new Promise((resolve, reject) => {
        resolve(storage.get())
    })
}

function getResidenteBuscar(filtroResidente) {
    return new Promise((resolve, reject) => {
        resolve(storage.getxNombre(filtroResidente))
    })
}

function getResidenteModificar(filtroResidente) {
    return new Promise((resolve, reject) => {
        resolve(storage.getxId(filtroResidente))
    })
}

function add_residente(residente) {
    return new Promise((resolve, reject) => {
        if (!residente) {
            return reject('Error')
        }
        storage.add(residente)
        resolve(residente)
    })

}

function update_residente(residente) {
    return new Promise((resolve, reject) => {
        let resultado = storage.update(residente)
        if (resultado) {
            return resolve(residente)
        } else {
            return reject('Residente inexistente.')
        }
    })
}

function delete_residente(residente) {
    return new Promise((resolve, reject) => {
        storage.delete(residente)
        resolve(residente)
    })
}

module.exports = {
    getResidente,
    getResidenteBuscar,
    getResidenteModificar,
    add_residente,
    update_residente,
    delete_residente,
}