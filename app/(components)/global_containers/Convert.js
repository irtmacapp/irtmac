export default function covertLink(link) {
    var editlLink = link
        ?.replace(/ə/g, "e")
        ?.replace(/ı/g, "i")
        ?.replace(/ö/g, "o")
        ?.replace(/ğ/g, "g")
        ?.replace(/ü/g, "u")
        ?.replace(/ç/g, "c")
        ?.replace(/ş/g, "s")
        ?.replace(/\s/g, "")
        ?.replace(/[()]/g, "");
    return editlLink;
}