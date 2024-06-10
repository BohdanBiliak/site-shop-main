(async function fetchingData() {
    const URL = 'https://e9fzo7yc5k.execute-api.us-east-1.amazonaws.com/dev/products/1234';
    const result = await (await fetch(URL)).json();

    console.log(result);

    const myDiv = document.createElement('div');
    myDiv.textContent = `
    Item: ${result.product.Item},
    Age: ${result.product.Age}
    `;

    myDiv.style = `border: 1px solid ${result.product.Color}`
    const results = [
        {
            name: "Some name",
            id: "someid",
            price: 234312
        },

        {
            name: "Some name",
            id: "someid",
            price: 234312
        },

        {
            name: "Some name",
            id: "someid",
            price: 234
        },

        {
            name: "Some name",
            id: "someid",
            price: 234
        }
    ]

    results.forEach(element => {
        `
        <span>${element.name}</span>
        <span>${element.someid}</span>
        <span>${element.price}</span>
        `
    });


    const pageBody = document.getElementById('myBody');
    pageBody.appendChild(myDiv);
})();
