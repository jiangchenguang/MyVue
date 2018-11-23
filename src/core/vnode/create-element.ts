import VNode, { createEmptyVNode } from "./vnode";
import { normalizeChildren } from "./helper/normalize-children";
import { resolveAsset, isPrimitive } from "src/core/util/index";
import { Component } from "types/component";

const SIMPLE_NORMALIZE = 1;
const ALWAYS_NORMALIZE = 2;

export function createElement(
  context: Component,
  tag: any,
  data: any,
  children: any,
  normalizeType: any,
  alwaysNormalize: boolean
): VNode {

  if (Array.isArray(data)) {
    normalizeType = children;
    children = data;
    data = undefined;
  }

  if (alwaysNormalize) normalizeType = ALWAYS_NORMALIZE;
  return _createElement(context, tag, data, children, normalizeType);
}

function _createElement(
  context: Component,
  tag?: string,
  data?: VNodeData,
  children?: any,
  normalizeType?: number
): VNode {
  if (!tag) {
    return createEmptyVNode();
  }

  let vnode: VNode;
  let Ctor;

  if (normalizeType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  }

  // todo 在option没有合并前临时附加components属性
  context.$options.components || (context.$options.components = {});
  if ((Ctor = resolveAsset(context.$options, "components", tag))) {

  }

  return new VNode(tag, data, children, undefined, context);
}