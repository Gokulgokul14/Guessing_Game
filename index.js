

const arr = [
    "rgba(183, 106, 184, 1)",
    "rgba(119, 215, 204, 0.98)",
    "rgba(255, 225, 192, 0.755)",
    "rgba(177, 229, 112, 0.7)",
    "rgba(222, 166, 110, 0.98)",
    "rgba(146, 217, 218, 0.76)",
    "rgba(121, 122, 208, 0.98)",
    "rgba(204, 173, 141, 0.76)",
    "rgba(197, 155, 139, 1)",
    "rgba(184, 187, 125, 0.98)",
    "rgba(110, 50, 51, 0.76)",
    "rgba(189, 126, 126, 1)",
    "rgba(144, 116, 190, 0.23)",
    "rgba(180, 149, 111, 0.86)"
];

let idx = 0;
function change() {
    const c1 = arr[idx % arr.length];
    const c2 = arr[(idx + 1) % arr.length];
    const c3 = arr[(idx + 2) % arr.length];
    const c4 = arr[(idx + 3) % arr.length];
    const c5 = arr[(idx + 4) % arr.length];
    document.body.style.background = `linear-gradient(135deg, ${c1}, ${c2}, ${c3})`;
    idx++;
}

setInterval(change,2500);