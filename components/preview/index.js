import previewComponent from './preview.vue'

const preview = {
  install: function (Vue) {
    let Preview = Vue.extend(previewComponent);
    let tpl = new Preview().$mount();
    document.body.appendChild(tpl.$el);

    Vue.prototype.$Preview = {
      open: (e) =>{
        tpl.open(e);
      },
      close: () =>{
        tpl.close();
      }
    };

    Vue.directive('preview', {
      bind: function (el, binding, vnode) {
        el.addEventListener('click',Vue.prototype.$Preview.open);
      },
      unbind: function(el) {
        el.removeEventListener('click',Vue.prototype.$Preview.open);
      }
    })
  }
}

export default preview
