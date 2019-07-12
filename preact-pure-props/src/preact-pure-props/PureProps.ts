import PureProps from "react-pure-props";
import { Component } from "preact";

export default PureProps as any as new <T = {}, U = {}>(props: any) => Component<T, U>;
