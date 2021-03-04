export default interface Create<T> {
    create(info: object): Promise<T>;
}