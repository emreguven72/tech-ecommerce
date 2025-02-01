export interface Cart {
    id: number
    user: string
    cart: {
        name: string
    }[]
}

export const carts: Cart[] = [
    {
        id: 1,
        user: 'Emre',
        cart: [
            { name: 'urun1' },
            { name: 'urun2' },
            { name: 'urun3' },
        ],
    },
    {
        id: 2,
        user: 'Mustafa',
        cart: [
            { name: 'urun1' },
            { name: 'urun2' },
            { name: 'urun3' },
            { name: 'urun4' },
            { name: 'urun5' },
        ],
    }
]
