export default interface Update {
    update(info: object): Promise<boolean>;
}