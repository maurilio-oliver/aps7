const ObjectsHelper = {
    nonNull: (object) => {
        return (object && (object !== undefined) && (object !== null) && (object !== {})) ? true : false
    }
}
export default ObjectsHelper