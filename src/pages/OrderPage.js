import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { IndianRupee } from "lucide-react";

const menuItems = [
    { id: 1, name: "Masala Dosa", price: 80 },
    { id: 2, name: "Pav Bhaji", price: 70 },
    { id: 3, name: "Vada Pav", price: 30 },
    { id: 4, name: "Samosa Chaat", price: 50 },
];

export default function OrderPage() {
    return (
        <main className="min-h-screen bg-orange-50 p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Order Delicious Indian Fast Food</h1>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {menuItems.map((item) => (
                    <Card key={item.id} className="rounded-2xl shadow-md hover:shadow-xl transition">
                        <CardContent className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                            <p className="text-lg text-gray-600 flex items-center">
                                <IndianRupee className="w-4 h-4 mr-1" />
                                {item.price}
                            </p>
                            <label className="block mt-4 mb-1 text-sm font-medium">Quantity:</label>
                            <Input type="number" min={1} defaultValue={1} className="mb-4" aria-label={`Quantity for ${item.name}`} />
                            <Button className="w-full" aria-label={`Add ${item.name} to cart`}>
                                Add to Cart
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </main>
    );
}