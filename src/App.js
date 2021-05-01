import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { useState } from "react";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        return (images[item.replace("./", "")] = r(item));
    });
    return images;
}
const images = importAll(
    require.context("./images/", false, /\.(png|jpe?g|svg)$/)
);

function App() {
    // Mini Database - Chaoneng
    const items = {
        Appetizers: {
            "Avocado Eggrolls": 12.99,
            "Guacamole and Chips": 7.99,
            "Chicken Potstickers": 13.99,
            "Hot Spinach and Cheese Dip": 9.99,
            "Quesadillas": 10.49,
            "Crab and Artichoke Dip": 12.99,
            "Sweet Corn and Tamale Cakes": 11.49,
            "Tex Mex Eggrolls": 12.99,
            "Thai Lettuce Wraps": 9.49
        },
        Salads: {
            "Almond Crusted Salmon Salad": 14.99,
            "Barbeque Ranch Chicken Salad": 8.49,
            "Caesar Salad": 7.99,
            "Chinese Chicken Salad": 8.99,
            "Santa Fe Salad": 8.99,
            "Cobb Salad": 9.99,
            "Chicken and Avocado Salad": 9.49,
            "Thai Chicken Salad": 8.99,
            "Vegan Cobb Salad": 9.99
        },
        Sandwiches: {
            "Chicken Parmesan Sandwich": 12.99,
            "Chicken Salad Sandwich": 12.49,
            "Grilled Chicken Avocado Club": 14.99,
            "Cuban Sandwich": 15.49,
            "The Club": 13.99,
            "Classic Burger": 11.99,
            "Grilled Turkey Burger": 12.49,
            "Impossible Burger": 14.99,
            "Veggie Burger": 13.49
        },
        Sides: {
            "Chicken Samosas": 8.99,
            "Chicken Taquitos": 10.49,
            "Crispy Crab Wontons": 11.99,
            "Avocado Toast": 6.99,
            "Crispy Brussels Sprouts": 7.49,
            "Crispy Crab Bites": 12.99,
            "Edamame": 6.49,
            "Korean Fried Cauliflower": 8.99,
            "Stuffed Mushrooms": 10.49
        },
        Beverages: {
            "Cappuccino": 0.99,
            "Cold Brew": 0.99,
            "Double Espresso": 0.99,
            "Frozen Iced Mango": 0.99,
            "Strawberry Fruit Smoothie": 0.99,
            "Tropical Smoothie": 0.99
        }
    };

    //shopping cart state
    const [cart, setCart] = useState([
        // {
        //     itemCount: 1,
        //     itemName: "Cappuccino",
        //     itemPrice: 0.99
        // }
    ]);

    const addToCart = (newItem) => {
        let itemAlreadyInCart = cart
            .map((item) => item.itemName)
            .some((itemName) => itemName === newItem.itemName);
        if (itemAlreadyInCart) {
            incrementCount(newItem.itemName);
        } else {
            setCart(cart.concat(newItem));
        }
    };

    const deleteFromCart = (itemName) => {
        setCart(cart.filter((item) => item.itemName !== itemName));
    };

    const incrementCount = (itemName) => {
        const newCart = [...cart];
        let index = newCart.findIndex(
            (element) => element.itemName === itemName
        );
        newCart[index].itemCount = newCart[index].itemCount + 1;
        setCart(newCart);
    };

    const decrementCount = (itemName) => {
        const newCart = [...cart];
        let index = newCart.findIndex(
            (element) => element.itemName === itemName
        );
        if (newCart[index].itemCount - 1 === 0) {
            deleteFromCart(itemName);
        } else {
            newCart[index].itemCount = newCart[index].itemCount - 1;
            setCart(newCart);
        }
    };

    // Tab state
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <div className="App">
            <Header className="boxHeader" />
            <Body
                className="boxBody"
                tabValue={tabValue}
                handleTabChange={handleTabChange}
                items={items}
                images={images}
                cart={cart}
                addToCart={addToCart}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
            />
        </div>
    );
}

export default App;
