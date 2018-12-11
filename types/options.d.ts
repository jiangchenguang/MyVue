import Vue from "./vue";
import VNode from "src/core/vnode/vnode";
import { Component } from "types/component";

export type ComponentOptions = {
  data?: object | Function;
  computed?: { [key: string]: Function | { get?: Function, set?: (v: any) => any } };
  watch?: { [key: string]: Function | string };
  methods?: { [key: string]: Function };

  el?: string | Element;
  template?: string;
  render?: (h: () => VNode) => VNode;

  components?: { [index: string]: Component }
}


