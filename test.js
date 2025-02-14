for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // 0, 1, 2 (expected behavior)
    }, 1000);
}

let a = 3
{
    a = 4
}
