export const updateObjectInArray = (items, pk, objPropName, newObjsProps) => {
    return items.map(u => u[objPropName] === pk ? {...u, ...newObjsProps} : u)
}