export default interface Delete {
    delete(info: object): Promise<boolean>;
}