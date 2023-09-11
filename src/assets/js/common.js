export default {
    install (Vue) { 
        Vue.prototype.$openModalImage = function($event, name){
            this.$modal.show(name)

            if ($event.target.src) {
                setTimeout(() => {
                    document.getElementById('imageEnlarge').src = $event.target.src
                    document.querySelector('body').classList.add('fixed')
                },100)
            }
        }
    }
}