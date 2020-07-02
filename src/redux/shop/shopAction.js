import shopActionType from "./shopActionType";

export const updateCollections=collectionMap=>{
    return{
        type:shopActionType.UPDATE_COLLECTION,
        payload:collectionMap
    }
}
