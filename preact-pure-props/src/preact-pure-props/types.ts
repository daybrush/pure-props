export interface PurePropsInterface<T = {}, U = {}> extends JSX.ElementClass {
    props: T;
    state: U;
}
