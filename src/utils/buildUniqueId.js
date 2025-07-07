import tShirts from './tShirts.json'

export const buildUniqueId = ({
    isTShirtMale,
    tShirtColor,   // índice del color en el array
    tShirtSize,    // índice del size en el array
    tShirtStamp,   // índice del stamp en el array
    isTShirtStampInverted,
}) => {
    return `${
        isTShirtMale ? '1' : '0' }-${
            tShirts.color[tShirtColor].id}-${
                tShirts.size[tShirtSize].id}-${
                    tShirts.stamp[tShirtStamp].id}-${
                        isTShirtStampInverted ? '1' : '0'}`;
};

export const parseUniqueId = (uniqueId) => {
    const [gender, colorId, sizeId, stampId, inverted] = uniqueId.split("-");
    return {
        isTShirtMale: gender === '1',
        tShirtColor: parseInt(colorId, 10),   // id real
        tShirtSize: parseInt(sizeId, 10),     // id real
        tShirtStamp: parseInt(stampId, 10),   // id real
        isTShirtStampInverted: inverted === '1',
    };
};
