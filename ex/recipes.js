export default {
    "recipes": [
        {
            "name": "Some beer name",
            "id": 1,
            "fermentables": [
                {
                    "name": "Maris Otter",
                    "weight": 4500,
                    "color": 5,
                    "id": 1
                },
                {
                    "name": "CaraPils",
                    "weight": 200,
                    "color": 12,
                    "id": 2
                },
                {
                    "name": "Wheat",
                    "weight": 1500,
                    "color": 55,
                    "id": 3
                }
            ],
            "hops": [
                {
                    "name": "Hallertauer",
                    "weight": 132,
                    "time": 60,
                    "aa": 5,
                    "id": 1
                },
                {
                    "name": "Citra",
                    "weight": 32,
                    "time": 15,
                    "aa": 10,
                    "id": 2
                },
                {
                    "name": "Mandarina",
                    "weight": 22,
                    "time": 0,
                    "aa": 20,
                    "id": 3
                },
            ],
            "yeasts": [
                {
                    "name": "WLP 1000",
                    "id": 1
                }
            ]
        },
        {
            "name": "Irish Red Ale",
            "id": 2,
            "source": "http://byo.com/mead/item/1868-irish-red-ale-style-profile",
            "style": "Irish red ale",
            "carbonation": {
                from: 2,
                to: 2.5
            },
            "fermentables": [
                {
                    weight: 4500,
                    name: "Maris Otter Pale Malt with a super long an weird name",
                    color: 5,
                    "id": 4
                },
                {
                    weight: 170,
                    name: "Great Western crystal malt",
                    color: 40,
                    "id": 5
                },
                {
                    weight: 170,
                    name: "Great Western crystal malt",
                    color: 120,
                    "id": 6
                },
                {
                    weight: 142,
                    name: "Roasted barley",
                    color: 300,
                    "id": 7
                }
            ],
            "hops": [
                {
                    name: "Kent Golding",
                    type: "Pellets",
                    weight: 30,
                    time: 60,
                    aa: 5,
                    "id": 4
                }
            ],
            "yeasts": [
                {
                    name: "White Labs WLP004 (Irish Ale)",
                    "id": 2
                }
            ]
        }
    ]
}
