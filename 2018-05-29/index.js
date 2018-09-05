var a = {
    "上上一级3":
        {"上一级4": [
                 {"id":7,"p_name":"上一级4","p_p_name":"上上一级3"}
             ]
        },
    "上上一级2": {"上一级3":
        [
            {"id":6,"p_name":"上一级3","p_p_name":"上上一级2"},
            {"id":5,"p_name":"上一级3","p_p_name":"上上一级2"}]
        },
    "上上一级1":
    {
        "上一级2": [
        {"id":4,"p_name":"上一级2","p_p_name":"上上一级1"},
        {"id":3,"p_name":"上一级2","p_p_name":"上上一级1"}
    ],
    "上一级1": [
        {"id":2,"p_name":"上一级1","p_p_name":"上上一级1"},
        {"id":1,"p_name":"上一级1","p_p_name":"上上一级1"}
    ]
    }
}

let newArray = []
// let oooo = {a: "c", b: "e"}
// Object.keys(oooo).map(i => oooo[i].length ? () )


function transform(obj, array) {
    for (let i in obj) {
        let item = obj[i];
        if (typeof item === 'object') {
            array.push({
                key: i,
                value: item
            })
            // obj.children = array
            if (!item.length) {
                let cur = array[array.length - 1];
                console.log('array:', array);
                // transform(cur, newArray);
            }
        }
    }
    return array;
}

let res = transform(a, newArray);
console.log(res);
// Object.keys(res).map(i => ())
