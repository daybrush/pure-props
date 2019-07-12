import PureProps from "react-pure-props";
import { PurePropsInterface } from "./types";

export default PureProps as new <T = {}, U = {}>(props: any) => PurePropsInterface<T, U>;
