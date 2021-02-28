export default interface Get<T> {
    get(info: object): Promise<T>;
}