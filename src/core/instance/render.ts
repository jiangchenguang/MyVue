import { createElement } from "src/core/vnode/create-element";
import VNode, { createTextVNode } from "src/core/vnode/vnode";
import { toString } from "src/shared/util";
import { Component } from "types/component";

export function initRender(vm: Component) {
  vm._c = (a: any, b: any, c: any, d: any) => createElement(vm, a, b, c, d, false);
  vm.$createElement = (a: any, b: any, c: any, d: any) => createElement(vm, a, b, c, d, true);
}

export function renderMixin(Vue: Function) {
  Vue.prototype._render = function () {
    const vm = <Component>this;
    const {render} = vm.$options;
    let vnode: VNode;

    try {
      vnode = render.call(vm._renderProxy);
    } catch (e) {
      console.error('render failed!', e);
    }

    return vnode;
  }

  Vue.prototype._s = toString;
  Vue.prototype._v = createTextVNode;
}
